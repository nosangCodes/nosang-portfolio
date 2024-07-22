import React from "react";

type Props = ContactForm;

export default function ContactTemplate({
  email = "johndoe@Mail.com",
  message = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit dignissimos non maxime necessitatibus natus, sequi totam alias dolorum ipsum illo? Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit dignissimos non maxime necessitatibus natus, sequi totam alias dolorum ipsum illo?",
  name = "John Doe",
}: Props) {
  return (
    <div className="flex flex-col h-screen w-full gap-y-2 px-2 py-4">
      <h3 className="text-sm font-semibold text-zinc-800">
        You have a new message from {name}.
      </h3>
      <a
        className="text-sm font-medium hover:text-indigo-700/60 transition-colors"
        href={`mailto:${email}`}
      >
        {email}
      </a>
      <div>
        <p className="text-sm text-zinc-900">{message}</p>
      </div>
    </div>
  );
}
