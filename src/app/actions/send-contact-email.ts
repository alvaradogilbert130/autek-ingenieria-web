
'use server';

import { z } from 'zod';
import nodemailer from 'nodemailer';

const contactFormSchema = z.object({
  name: z.string().min(2, { message: "El nombre debe tener al menos 2 caracteres." }),
  companyRole: z.string().optional(),
  phone: z.string().min(7, { message: "Por favor, introduce un número de teléfono o WhatsApp válido." }),
  email: z.string().email({ message: "Por favor, introduce un correo electrónico válido." }),
  clientType: z.string().min(1, { message: "Por favor, selecciona el tipo de cliente." }),
  projectRequirement: z.string().min(1, { message: "Por favor, selecciona el requerimiento principal." }),
  message: z.string().min(10, { message: "El mensaje debe tener al menos 10 caracteres." }),
});

export type ContactFormInput = z.infer<typeof contactFormSchema>;

export async function sendContactEmail(data: ContactFormInput): Promise<{ success: boolean; message: string }> {
  const parsedData = contactFormSchema.safeParse(data);
  if (!parsedData.success) {
    const errorMessages = parsedData.error.errors.map(err => err.message).join(' ');
    return { success: false, message: `Datos inválidos: ${errorMessages}` };
  }

  const { name, companyRole, phone, email, clientType, projectRequirement, message } = parsedData.data;

  const emailUser = process.env.EMAIL_USER;
  const emailPass = process.env.EMAIL_PASS;
  const emailHost = process.env.EMAIL_HOST || 'smtp.gmail.com';
  const emailPort = parseInt(process.env.EMAIL_PORT || '587', 10);
  const emailFrom = process.env.EMAIL_FROM || emailUser || 'no-reply@autekingenieria.com';

  if (!emailUser || !emailPass) {
    console.warn('Email credentials (EMAIL_USER, EMAIL_PASS) are not configured. Email sending is simulated.');
    console.log('Simulated email sending:', parsedData.data);
    return { success: true, message: 'Solicitud recibida con éxito. Revisaré tu proyecto y me comunicaré a la brevedad.' };
  }

  const transporter = nodemailer.createTransport({
    host: emailHost,
    port: emailPort,
    secure: emailPort === 465,
    auth: {
      user: emailUser,
      pass: emailPass,
    },
  });

  const mailOptions = {
    from: `"${name}" <${emailFrom}>`, 
    to: 'autekingenieria@gmail.com',
    replyTo: email,
    subject: `Solicitud de Propuesta Técnica - ${name} (${companyRole || clientType})`,
    html: `
      <h2>Nueva Solicitud de Cotización / Propuesta Técnica</h2>
      <p>Se ha recibido una consulta de proyecto a través del sitio web:</p>
      <ul>
        <li><strong>Nombre Completo:</strong> ${name}</li>
        <li><strong>Empresa y Cargo:</strong> ${companyRole || 'No especificado'}</li>
        <li><strong>Teléfono / WhatsApp:</strong> ${phone}</li>
        <li><strong>Correo Electrónico:</strong> ${email}</li>
        <li><strong>Tipo de Cliente:</strong> ${clientType}</li>
        <li><strong>Requerimiento Principal:</strong> ${projectRequirement}</li>
      </ul>
      <h3>Detalles del Proyecto:</h3>
      <p style="white-space: pre-wrap;">${message}</p>
      <hr>
      <p><em>Gilbert Alvarado • Consultoría en Automatización & Tableros Eléctricos</em></p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return { success: true, message: 'Solicitud enviada con éxito. Revisaré tu proyecto y me pondré en contacto a la brevedad.' };
  } catch (error) {
    console.error('Failed to send email:', error);
    const errorMessage = error instanceof Error ? error.message : 'Error desconocido.';
    return { success: false, message: `Error al enviar la solicitud: ${errorMessage}. Por favor, inténtalo de nuevo o escríbeme por WhatsApp.` };
  }
}
