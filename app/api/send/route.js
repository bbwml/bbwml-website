import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const DEFAULT_FROM = process.env.RESEND_FROM_EMAIL || "BBWML <onboarding@resend.dev>";
const DEFAULT_TO = "samuelsoaga@gmail.com";

function normalizeBase64(input = "") {
  if (typeof input !== "string") return "";
  const trimmed = input.trim();
  const parts = trimmed.split(",");
  return parts.length > 1 ? parts.pop() || "" : trimmed;
}

export async function POST(req) {
  try {
    const { pdfBase64, filename, subject, html } = await req.json();
    if (!pdfBase64) {
      return Response.json({ error: "pdfBase64 is required" }, { status: 400 });
    }

    const attachmentContent = normalizeBase64(pdfBase64);
    if (!attachmentContent) {
      return Response.json({ error: "Unable to parse PDF payload" }, { status: 400 });
    }

    const { data, error } = await resend.emails.send({
      from: DEFAULT_FROM,
      to: [DEFAULT_TO],
      subject: subject || "New Account Application PDF",
      html: html || "<p>The generated account application PDF is attached.</p>",
      attachments: [
        {
          filename: filename || "application.pdf",
          content: attachmentContent,
        },
      ],
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json({ ok: true, id: data?.id ?? null });
  } catch (error) {
    return Response.json({ error: error?.message || "Unable to send email" }, { status: 500 });
  }
}
