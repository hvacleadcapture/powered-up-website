import { Resend } from 'resend';

const rateLimitMap = new Map();
const WINDOW_MS = 60 * 60 * 1000;
const MAX_PER_WINDOW = 3;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function getClientIp(req) {
  const fwd = req.headers['x-forwarded-for'];
  if (typeof fwd === 'string' && fwd.length > 0) {
    return fwd.split(',')[0].trim();
  }
  return req.headers['x-real-ip'] || req.socket?.remoteAddress || 'unknown';
}

function checkRateLimit(ip) {
  if (process.env.NODE_ENV !== 'production') return true;
  const now = Date.now();
  const entry = rateLimitMap.get(ip);
  if (!entry || now - entry.windowStart > WINDOW_MS) {
    rateLimitMap.set(ip, { windowStart: now, count: 1 });
    return true;
  }
  if (entry.count >= MAX_PER_WINDOW) return false;
  entry.count += 1;
  return true;
}

function esc(str) {
  return String(str ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function buildHtml({ name, phone, email, service, town }) {
  const townDisplay = town || 'Not provided';
  return `<!doctype html>
<html>
<body style="margin:0;padding:0;background:#f4efe6;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Helvetica,Arial,sans-serif;color:#0a1a2f;">
  <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="background:#f4efe6;padding:24px 0;">
    <tr><td align="center">
      <table role="presentation" cellpadding="0" cellspacing="0" width="600" style="max-width:600px;background:#ffffff;border:2px solid #0a1a2f;">
        <tr>
          <td style="background:#0a1a2f;padding:20px 28px;border-bottom:4px solid #f5c518;">
            <div style="color:#f5c518;font-size:12px;letter-spacing:2px;text-transform:uppercase;font-weight:700;">Powered Up LLC</div>
            <div style="color:#f4efe6;font-size:22px;font-weight:800;margin-top:6px;">New Quote Request</div>
          </td>
        </tr>
        <tr>
          <td style="padding:28px;">
            <p style="margin:0 0 18px;font-size:15px;line-height:1.5;">A homeowner just submitted the quote form on poweredbymicah.com.</p>
            <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="font-size:15px;line-height:1.5;border-collapse:collapse;">
              <tr>
                <td style="padding:10px 0;border-bottom:1px solid #e6dfd2;width:110px;font-weight:700;color:#0a1a2f;">Name</td>
                <td style="padding:10px 0;border-bottom:1px solid #e6dfd2;">${esc(name)}</td>
              </tr>
              <tr>
                <td style="padding:10px 0;border-bottom:1px solid #e6dfd2;font-weight:700;color:#0a1a2f;">Phone</td>
                <td style="padding:10px 0;border-bottom:1px solid #e6dfd2;"><a href="tel:${esc(phone)}" style="color:#0a1a2f;font-weight:600;text-decoration:underline;">${esc(phone)}</a></td>
              </tr>
              <tr>
                <td style="padding:10px 0;border-bottom:1px solid #e6dfd2;font-weight:700;color:#0a1a2f;">Email</td>
                <td style="padding:10px 0;border-bottom:1px solid #e6dfd2;"><a href="mailto:${esc(email)}" style="color:#0a1a2f;text-decoration:underline;">${esc(email)}</a></td>
              </tr>
              <tr>
                <td style="padding:10px 0;border-bottom:1px solid #e6dfd2;font-weight:700;color:#0a1a2f;">Service</td>
                <td style="padding:10px 0;border-bottom:1px solid #e6dfd2;">${esc(service)}</td>
              </tr>
              <tr>
                <td style="padding:10px 0;font-weight:700;color:#0a1a2f;">Town</td>
                <td style="padding:10px 0;">${esc(townDisplay)}</td>
              </tr>
            </table>
            <div style="margin-top:24px;padding:14px 16px;background:#f5c518;color:#0a1a2f;font-weight:700;font-size:14px;">
              Reply to this email to respond directly to the homeowner.
            </div>
          </td>
        </tr>
        <tr>
          <td style="background:#0a1a2f;padding:14px 28px;color:#f4efe6;font-size:12px;">
            Powered Up LLC &middot; poweredbymicah.com
          </td>
        </tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`;
}

function buildText({ name, phone, email, service, town }) {
  return [
    'New Quote Request — Powered Up LLC',
    '',
    `Name:    ${name}`,
    `Phone:   ${phone}`,
    `Email:   ${email}`,
    `Service: ${service}`,
    `Town:    ${town || 'Not provided'}`,
    '',
    'Reply to this email to respond directly to the homeowner.',
  ].join('\n');
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ ok: false, error: 'Method not allowed' });
  }

  try {
    const body = typeof req.body === 'string' ? JSON.parse(req.body || '{}') : (req.body || {});

    if (body.website && String(body.website).trim() !== '') {
      return res.status(200).json({ ok: true });
    }

    const name = String(body.name || '').trim();
    const phone = String(body.phone || '').trim();
    const email = String(body.email || '').trim();
    const service = String(body.service || '').trim();
    const town = String(body.town || '').trim();

    if (!name || !phone || !email || !service) {
      return res.status(400).json({ ok: false, error: 'Missing required fields.' });
    }
    if (!EMAIL_RE.test(email)) {
      return res.status(400).json({ ok: false, error: 'Please enter a valid email address.' });
    }

    const ip = getClientIp(req);
    if (!checkRateLimit(ip)) {
      return res.status(429).json({ ok: false, error: 'Too many requests. Please try again later or call us directly.' });
    }

    const apiKey = process.env.RESEND_API_KEY;
    const toEmail = process.env.QUOTE_TO_EMAIL;
    const fromEmail = process.env.QUOTE_FROM_EMAIL;
    if (!apiKey || !toEmail || !fromEmail) {
      console.error('Quote form misconfigured: missing RESEND_API_KEY, QUOTE_TO_EMAIL, or QUOTE_FROM_EMAIL');
      return res.status(500).json({ ok: false, error: 'Server is not configured to send email yet. Please call us directly.' });
    }

    const resend = new Resend(apiKey);
    const subject = `New Quote Request — ${service} in ${town || 'Unknown town'}`;

    const { error } = await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      reply_to: email,
      subject,
      html: buildHtml({ name, phone, email, service, town }),
      text: buildText({ name, phone, email, service, town }),
    });

    if (error) {
      console.error('Resend API error:', error);
      return res.status(502).json({ ok: false, error: 'We could not send your request. Please call us directly.' });
    }

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error('Quote handler error:', err);
    return res.status(500).json({ ok: false, error: 'Something went wrong. Please call us directly.' });
  }
}
