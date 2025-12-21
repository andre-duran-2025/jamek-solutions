import { Resend } from 'resend';

// Initialize Resend
// Note: In Vercel, process.env.RESEND_API_KEY will be available from the project settings
const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  // Add CORS headers
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  // Handle OPTIONS request for CORS
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, phone, message } = req.body;

  if (!process.env.RESEND_API_KEY) {
    return res.status(500).json({ error: 'Missing Resend API Key' });
  }

  try {
    console.log('Tentando enviar e-mail via Vercel Function (v2) para:', 'contato@jamek.com.br');
    console.log('Reply-To será definido como:', email);
    
    const data = await resend.emails.send({
      from: 'Jamek Site <onboarding@resend.dev>',
      to: 'contato@jamek.com.br',
      reply_to: email,
      headers: {
        'Reply-To': email
      },
      subject: `Novo contato de: ${name}`,
      html: `
        <h2>Novo Contato via Site</h2>
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Telefone:</strong> ${phone || 'Não informado'}</p>
        <p><strong>Mensagem:</strong></p>
        <p>${message}</p>
      `
    });

    console.log('Resposta do Resend:', JSON.stringify(data, null, 2));

    if (data.error) {
      return res.status(400).json({ success: false, error: data.error.message });
    }

    return res.status(200).json({ success: true, data });
  } catch (error) {
    console.error('Error sending email:', error);
    return res.status(500).json({ success: false, error: error.message });
  }
}
