import { SendByte } from "@sendbyte/node";

const sendbyte = new SendByte(process.env.SENDBYTE_API_KEY);

export default async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({ error: "Method not allowed" });
    }

    const { name, email, message } = req.body;

    try {
        const { id } = await sendbyte.emails.send({
            from: "Portfolio <noreply@akintunde.cv>",
            to: "isaacakintunde11@gmail.com",
            subject: `New portfolio enquiry from ${name}`,
            html: `
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Message:</strong> ${message}</p>
            `,
        });

        return res.status(200).json({ id });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Failed to send" });
    }
}