import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { name, email, phone, message } = data;

    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: "Please fill in all required fields (Name, Email, Message)." },
        { status: 400 }
      );
    }

    const res = await fetch("https://formsubmit.co/ajax/laxya.jaipur08@gmail.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Origin: "https://www.laxyajaipur.com",
        Referer: "https://www.laxyajaipur.com/",
      },
      body: JSON.stringify({
        "Customer Name": name,
        "Customer Email": email,
        "Customer Phone": phone || "Not provided",
        "Inquiry Message": message,
        _subject: `[LAXYA Storefront] New Customer Inquiry from ${name}`,
        _replyto: email,
        _template: "table",
        _captcha: "false",
      }),
    });

    const json = await res.json();
    return NextResponse.json({
      success: true,
      message: json?.message || "Inquiry sent successfully to laxya.jaipur08@gmail.com",
      activationNeeded: json?.message?.toLowerCase().includes("activation"),
    });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error?.message || "Failed to deliver message." },
      { status: 500 }
    );
  }
}
