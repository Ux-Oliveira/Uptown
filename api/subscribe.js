// /api/subscribe.js
import crypto from 'crypto';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { email, name } = req.body || {};
    if (!email || typeof email !== 'string') {
      return res.status(400).json({ error: 'Missing or invalid email' });
    }

    const API_KEY = process.env.MAILCHIMP_API_KEY;
    const LIST_ID = process.env.MAILCHIMP_LIST_ID;

    if (!API_KEY || !LIST_ID) {
      return res.status(500).json({ error: 'Mailchimp not configured (missing env vars)' });
    }

    // extract data center from API key (part after dash)
    const dc = API_KEY.split('-')[1];
    if (!dc) return res.status(500).json({ error: 'Invalid MAILCHIMP_API_KEY format' });

    // subscriber hash required for PUT upsert
    const emailLower = email.trim().toLowerCase();
    const subscriberHash = crypto.createHash('md5').update(emailLower).digest('hex');

    const url = `https://${dc}.api.mailchimp.com/3.0/lists/${LIST_ID}/members/${subscriberHash}`;

    // prepare body: 'pending' triggers double opt-in
    const body = {
      email_address: emailLower,
      status: 'pending', // double opt-in; use 'subscribed' for single opt-in
      merge_fields: { FNAME: name || '' },
    };

    // Mailchimp expects Basic Auth: username:anyapikey
    const authHeader = `Basic ${Buffer.from(`anystring:${API_KEY}`).toString('base64')}`;

    const resp = await fetch(url, {
      method: 'PUT', // upsert: create or update
      headers: {
        'Content-Type': 'application/json',
        Authorization: authHeader,
      },
      body: JSON.stringify(body),
    });

    const data = await resp.json();

    if (!resp.ok) {
      console.error('Mailchimp error', data);
      return res
        .status(resp.status)
        .json({ error: data.detail || data.title || 'Mailchimp error', raw: data });
    }

    return res.status(200).json({ success: true, raw: data });
  } catch (err) {
    console.error('Subscribe handler error', err);
    return res.status(500).json({ error: 'Server error', details: err.message });
  }
}
