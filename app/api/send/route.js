import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const DEFAULT_FROM = "noreply@bbwml.com";
const DEFAULT_TO = "info@bbwml.com";

function normalizeBase64(input = "") {
  if (typeof input !== "string") return "";
  const trimmed = input.trim();
  const parts = trimmed.split(",");
  return parts.length > 1 ? parts.pop() || "" : trimmed;
}

export async function GET() {
  try {
    const { data } = await resend.emails.send({
      from: DEFAULT_FROM,
      to: DEFAULT_TO,
      subject: "Account Opening Email",
      html: "<strong>It works!</strong>",
    });
    return NextResponse.json({ ok: true, id: data?.id ?? null });
  } catch (error) {
    console.error("Error occurred:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}

export async function POST(req) {
  try {
    const { pdfBase64, filename, subject, html } = await req.json();
    if (!pdfBase64) {
      return NextResponse.json({ error: "pdfBase64 is required" }, { status: 400 });
    }

    const attachmentContent = normalizeBase64(pdfBase64);
    if (!attachmentContent) {
      return NextResponse.json({ error: "Unable to parse PDF payload" }, { status: 400 });
    }

    const { data } = await resend.emails.send({
      from: DEFAULT_FROM,
      to: DEFAULT_TO,
      subject: subject || "New Account Application PDF",
      html: html || "<p>The generated account application PDF is attached.</p>",
      attachments: [
        {
          filename: filename || "application.pdf",
          content: attachmentContent,
        },
      ],
    });

    return NextResponse.json({ ok: true, id: data?.id ?? null });
  } catch (error) {
    console.error("Email send failed:", error);
    return NextResponse.json({ error: error?.message || "Unable to send email" }, { status: 500 });
  }
}
