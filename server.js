import express from 'express';
import cors from 'cors';
import { Resend } from 'resend';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Initialize Resend with the provided API Key
if (!process.env.RESEND_API_KEY) {
  console.error('ERRO: A variável de ambiente RESEND_API_KEY não está definida.');
  process.exit(1);
}

const resend = new Resend(process.env.RESEND_API_KEY);

// Use /api/send-email to match Vercel's structure and the Vite proxy
app.post('/api/send-email', async (req, res) => {
  const { name, email, phone, message } = req.body;

  try {
    console.log('Tentando enviar e-mail para:', 'contato@jamek.com.br');
    const data = await resend.emails.send({
      from: 'Jamek Site <onboarding@resend.dev>', // Custom display name with default Resend email
      to: 'contato@jamek.com.br', // Authorized email for testing
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
      console.error('Erro retornado pela API do Resend:', data.error);
      return res.status(400).json({ success: false, error: data.error.message });
    }

    res.status(200).json({ success: true, data });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ success: false, error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
