// /api/subscribe.js
export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { email, name } = req.body || {};
  if (!email) return res.status(400).json({ error: 'Missing email' });

  const API_KEY = process.env.MAILCHIMP_API_KEY; // example: "abcd1234-us5"
  const LIST_ID = process.env.1ccde52e54; // audience id
  if (!API_KEY || !LIST_ID) return res.status(500).json({ error: 'Mailchimp not configured' });

  // data center is after the dash in the API key
  const dc = API_KEY.split('-')[1];
  const url = `https://${dc}.api.mailchimp.com/3.0/lists/${LIST_ID}/members/`;

  // Mailchimp expects a lowercase hashed email for PUT (upsert), but POST to members to create
  const body = {
    email_address: email,
    status: 'pending', // 'pending' triggers double opt-in confirmation; use 'subscribed' for single opt-in
    merge_fields: { FNAME: name || '' },
  };

  try {
    const r = await fetch(url, {
      method: 'POST',
      headers: {
        Authorization: `apikey ${API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    const data = await r.json();
    if (!r.ok) {
      // Mailchimp returns details in the JSON
      return res.status(r.status).json({ error: data.detail || data.title || 'Mailchimp error', raw: data });
    }

    return res.status(201).json({ success: true, id: data.id });
  } catch (err) {
    return res.status(500).json({ error: 'Request failed', details: err.message });
  }
}
