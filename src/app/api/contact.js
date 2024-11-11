export default async function handler(req, res) {
    if (req.method === 'POST') {
      const { name, email, message } = req.body;
  
      try {
        const sgMail = require('@sendgrid/mail');
        sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  
        const msg = {
          to: 'junekrotich@gmail.com',
          from: 'junekrotich@gmail.com', // Replace with your verified sender email
          subject: `New Contact Message from ${name}`,
          text: `
            Name: ${name}
            Email: ${email}
            Message: ${message}
          `,
        };
  
        await sgMail.send(msg);
  
        res.status(200).json({ message: 'Message sent successfully!' });
      } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ error: 'Failed to send message' });
      }
    } else {
      res.setHeader('Allow', ['POST']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  }
  