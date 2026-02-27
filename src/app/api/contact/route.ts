import { NextResponse } from "next/server";
import { Resend } from "resend";

function getResend() {
  return new Resend(process.env.RESEND_API_KEY);
}

const NOTIFY_EMAIL = process.env.CONTACT_FORM_EMAIL || "wjones@jonesmanagement.com";

const RENTCAFE_API_BASE = "https://api.rentcafe.com/rentcafeapi.aspx";
const RENTCAFE_TOKEN = process.env.RENTCAFE_API_TOKEN;
const RENTCAFE_COMPANY_CODE = process.env.RENTCAFE_COMPANY_CODE;

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, message, property } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    const results: { email?: string; rentcafe?: string } = {};

    // 1. Send email notification via Resend
    if (process.env.RESEND_API_KEY) {
      try {
        await getResend().emails.send({
          from: "Jones Properties <onboarding@resend.dev>",
          to: [
            NOTIFY_EMAIL,
            "ehale@jonesmanagement.com",
            "bking@jonesmanagement.com",
            "ringram@jonesmanagement.com",
          ],
          subject: `New Contact Form: ${name}${property ? ` — ${property}` : ""}`,
          html: `
            <h2>New Contact Form Submission</h2>
            <table style="border-collapse:collapse;width:100%;max-width:600px;">
              <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee;">Name</td><td style="padding:8px;border-bottom:1px solid #eee;">${escapeHtml(name)}</td></tr>
              <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee;">Email</td><td style="padding:8px;border-bottom:1px solid #eee;"><a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></td></tr>
              <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee;">Phone</td><td style="padding:8px;border-bottom:1px solid #eee;">${escapeHtml(phone || "Not provided")}</td></tr>
              <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee;">Property</td><td style="padding:8px;border-bottom:1px solid #eee;">${escapeHtml(property || "Not specified")}</td></tr>
              <tr><td style="padding:8px;font-weight:bold;vertical-align:top;">Message</td><td style="padding:8px;">${escapeHtml(message).replace(/\n/g, "<br>")}</td></tr>
            </table>
          `,
        });
        results.email = "sent";
      } catch (emailErr) {
        console.error("Email send failed:", emailErr);
        results.email = "failed";
      }
    }

    // 2. Submit lead/guest card to RentCafe
    if (RENTCAFE_TOKEN) {
      try {
        const nameParts = name.trim().split(/\s+/);
        const firstName = nameParts[0] || "";
        const lastName = nameParts.slice(1).join(" ") || "";

        const params = new URLSearchParams({
          apiToken: RENTCAFE_TOKEN,
          requestType: "lead",
          firstName,
          lastName,
          email,
          phone: phone || "",
          message: `${property ? `Property: ${property}\n` : ""}${message}`,
          source: "Website Contact Form",
          ...(RENTCAFE_COMPANY_CODE ? { companyCode: RENTCAFE_COMPANY_CODE } : {}),
        });

        const response = await fetch(`${RENTCAFE_API_BASE}?${params.toString()}`, {
          method: "GET",
        });

        if (response.ok) {
          results.rentcafe = "submitted";
        } else {
          results.rentcafe = "failed";
        }
      } catch (rcErr) {
        console.error("RentCafe lead submission failed:", rcErr);
        results.rentcafe = "failed";
      }
    }

    return NextResponse.json({ success: true, results });
  } catch (err) {
    console.error("Contact form error:", err);
    return NextResponse.json(
      { error: "Failed to process your message. Please try again." },
      { status: 500 }
    );
  }
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
