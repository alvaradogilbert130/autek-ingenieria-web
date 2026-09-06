
'use server';

import { z } from 'zod';
import nodemailer from 'nodemailer';

// Define the schema for the contact form input, mirroring the client-side one
const contactFormSchema = z.object({
  name: z.string().min(2, { message: "El nombre debe tener al menos 2 caracteres." }),
  email: z.string().email({ message: "Por favor, introduce un correo electrónico válido." }),
  service: z.string().optional(),
  message: z.string().min(10, { message: "El mensaje debe tener al menos 10 caracteres." }),
});

export type ContactFormInput = z.infer<typeof contactFormSchema>;

export async function sendContactEmail(data: ContactFormInput): Promise<{ success: boolean; message: string }> {
  // Validate data
  const parsedData = contactFormSchema.safeParse(data);
  if (!parsedData.success) {
    // Concatenate all error messages for a more informative response
    const errorMessages = parsedData.error.errors.map(err => err.message).join(' ');
    return { success: false, message: `Datos inválidos: ${errorMessages}` };
  }

  const { name, email, service, message } = parsedData.data;

  // Environment variables should be set in .env.local or server environment
  // EMAIL_HOST=smtp.gmail.com
  // EMAIL_PORT=587
  // EMAIL_USER=autekingenieria@gmail.com
  // EMAIL_PASS=your-gmail-app-password
  // EMAIL_FROM=autekingenieria@gmail.com (or another verified sender for your service)
  // The recipient email is hardcoded below as autekingenieria@gmail.com

  const emailUser = process.env.EMAIL_USER;
  const emailPass = process.env.EMAIL_PASS;
  const emailHost = process.env.EMAIL_HOST || 'smtp.gmail.com';
  const emailPort = parseInt(process.env.EMAIL_PORT || '587', 10);
  const emailFrom = process.env.EMAIL_FROM || emailUser || 'no-reply@autekingenieria.com';

  if (!emailUser || !emailPass) {
    console.warn('Email credentials (EMAIL_USER, EMAIL_PASS) are not configured. Email sending is simulated.');
    console.log('Simulated email sending:', parsedData.data);
    return { success: true, message: 'Mensaje recibido con éxito. (Modo de prueba activo)' };
  }

  const transporter = nodemailer.createTransport({
    host: emailHost,
    port: emailPort,
    secure: emailPort === 465, // true for 465, false for other ports (like 587)
    auth: {
      user: emailUser,
      pass: emailPass,
    },
  });

  const mailOptions = {
    from: `"${name}" <${emailFrom}>`, 
    to: 'autekingenieria@gmail.com', // Receiver address
    replyTo: email, // Set the user's email as reply-to
    subject: `Nuevo Mensaje de Contacto de ${name} - Autek Ingenieria`,
    html: `
      <p>Has recibido un nuevo mensaje de contacto a través de la página web de Autek Ingenieria:</p>
      <ul>
        <li><strong>Nombre:</strong> ${name}</li>
        <li><strong>Email (Responder a):</strong> ${email}</li>
        ${service ? `<li><strong>Servicio Requerido:</strong> ${service}</li>` : ''}
        <li><strong>Mensaje:</strong></li>
      </ul>
      <p style="white-space: pre-wrap;">${message}</p>
      <hr>
      <p><em>Este es un mensaje automático enviado desde el formulario de contacto de autekingenieria.com</em></p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return { success: true, message: 'Mensaje enviado con éxito.' };
  } catch (error) {
    console.error('Failed to send email:', error);
    // Check if error is an instance of Error to safely access message property
    const errorMessage = error instanceof Error ? error.message : 'Error desconocido.';
    return { success: false, message: `Error al enviar el mensaje: ${errorMessage}. Por favor, inténtalo de nuevo más tarde.` };
  }
}
