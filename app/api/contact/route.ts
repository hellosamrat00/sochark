import { NextResponse } from "next/server";
import { Resend } from "resend";

// allowed values for the "interest" field — keeps the inbox subject clean
const INTERESTS = [
  "Development",
  "AI & Automation",
  "Design",
  "Cloud & DevOps",
  "Digital Marketing",
  "Not sure yet",
];

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  // Until you verify your own domain in Resend, use their test sender.
  const from = process.env.CONTACT_FROM_EMAIL ?? "Sochark <onboarding@resend.dev>";

  if (!apiKey || !to) {
    console.error("Contact form: missing RESEND_API_KEY or CONTACT_TO_EMAIL env var.");
    return NextResponse.json(
      { error: "Email is not configured on the server." },
      { status: 500 }
    );
  }

  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const { name, email, interest, message } = (payload ?? {}) as Record<string, unknown>;

  // basic validation
  const cleanName = typeof name === "string" ? name.trim() : "";
  const cleanEmail = typeof email === "string" ? email.trim() : "";
  const cleanMessage = typeof message === "string" ? message.trim() : "";
  const cleanInterest =
    typeof interest === "string" && INTERESTS.includes(interest)
      ? interest
      : "Not sure yet";

  if (!cleanName || !cleanEmail || !cleanMessage) {
    return NextResponse.json(
      { error: "Name, email, and message are all required." },
      { status: 400 }
    );
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(cleanEmail)) {
    return NextResponse.json(
      { error: "Please enter a valid email address." },
      { status: 400 }
    );
  }

  const resend = new Resend(apiKey);

  try {
    const { error } = await resend.emails.send({
      from,
      to,
      replyTo: cleanEmail, // hit "reply" in your inbox to answer the client directly
      subject: `New inquiry: ${cleanInterest} (${cleanName})`,
      text: `Name: ${cleanName}\nEmail: ${cleanEmail}\nInterested in: ${cleanInterest}\n\n${cleanMessage}`,
      html: `
        <div style="font-family:system-ui,sans-serif;line-height:1.6;color:#0a0a0a">
          <h2 style="margin:0 0 16px">New project inquiry</h2>
          <p style="margin:0 0 4px"><strong>Name:</strong> ${escapeHtml(cleanName)}</p>
          <p style="margin:0 0 4px"><strong>Email:</strong> ${escapeHtml(cleanEmail)}</p>
          <p style="margin:0 0 16px"><strong>Interested in:</strong> ${escapeHtml(cleanInterest)}</p>
          <p style="margin:0;white-space:pre-wrap">${escapeHtml(cleanMessage)}</p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Could not send the message. Please try again." },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact form send failed:", err);
    return NextResponse.json(
      { error: "Something went wrong. Please email us directly." },
      { status: 500 }
    );
  }
}
