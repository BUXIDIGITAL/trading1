import { NextResponse } from "next/server";

type SubscribePayload = {
  email?: string;
};

export async function POST(request: Request) {
  let payload: SubscribePayload;

  try {
    payload = (await request.json()) as SubscribePayload;
  } catch {
    return NextResponse.json(
      { error: "Invalid request body" },
      { status: 400 }
    );
  }

  const email = payload.email?.trim();

  if (!email || !/^[\w.!#$%&'*+/=?^`{|}~-]+@[\w-]+\.[\w.-]+$/.test(email)) {
    return NextResponse.json(
      { error: "Enter a valid email" },
      { status: 400 }
    );
  }

  const webhook = process.env.SIGNUP_WEBHOOK_URL;

  if (!webhook) {
    console.warn("SIGNUP_WEBHOOK_URL missing. Email was not forwarded.");
    return NextResponse.json(
      { error: "Signup service not configured" },
      { status: 500 }
    );
  }

  try {
    const response = await fetch(webhook, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        source: "buxidigital-trading-assistant",
        date: new Date().toISOString(),
      }),
    });

    if (!response.ok) {
      const message = await response.text();
      throw new Error(message || "Webhook responded with error");
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Signup webhook error", error);
    return NextResponse.json(
      { error: "Upstream service unavailable" },
      { status: 502 }
    );
  }
}
