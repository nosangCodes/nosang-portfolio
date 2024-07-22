import ContactTemplate from "@/components/mail/contact-template";
import ThankYouTemnplate from "@/components/mail/thank-you-template";
import resend from "@/lib/resend";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body: ContactForm = await req.json();

    // send to Nosang
    const msgRes = await resend.emails.send({
      from: "Nosang <hey@nosang.in>",
      to: "Nosang Subba <nosang.codes@gmail.com>",
      subject: `New message from ${body.name}`,
      react: ContactTemplate({ ...body }),
    });

    if (msgRes.error) {
      throw msgRes.error;
    }

    // send to query holder
    const msgResSender = await resend.emails.send({
      from: "Nosang <hey@nosang.in>",
      to: `${body.name} <${body.email}>`,
      subject: `Thank You for Contacting Me!`,
      react: ThankYouTemnplate({ name: body.name }),
    });

    if (msgResSender.error) {
      throw msgRes.error;
    }

    return NextResponse.json({
      message: "message sent successfully",
    });
  } catch (error) {
    return new NextResponse("Internal server error", { status: 500 });
  }
}
