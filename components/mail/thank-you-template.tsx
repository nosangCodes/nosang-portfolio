import React from "react";

type Props = {
  name?: string;
};

export default function ThankYouTemnplate({ name = "Jane" }: Props) {
  return (
    <div className="h-svh w-full text-white p-4 bg-gradient-to-r from-slate-900 to-slate-700">
      <p>Dear {name},</p>
      <p>
        Thank you for reaching out through my contact form. I have received your
        message and will get back to you shortly
      </p>

      <div className="leading-4">
        <p>Best regards,</p>
        <p>Nosang Subba</p>
      </div>
    </div>
  );
}
