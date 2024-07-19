import React from "react";

type Props = {};

export default function ContactForm({}: Props) {
  return (
    <div className="md:w-[400px] w-full contact-form md:px-4 md:py-2">
      <h4 className="text-xl md:text-2xl leading-5 font-light">Get in Touch!</h4>
      <p className="text-sm max-md:text-xs">Answer a few fun questions to reach out to me.</p>
      <form className="z-40 max-md:mt-1 mt-3 flex flex-col gap-y-2 ">
        <div className="flex flex-col">
          <label className="max-md:text-xs text-sm font-medium" htmlFor="name">
            What's your name? *
          </label>
          <input
          required
            autoFocus
            className="max-md:p-1 p-2 focus:outline-none focus:shadow-md focus:shadow-cyan-500/50 text-sm rounded-md border-none text-slate-900"
            type="text"
            id="name"
            name="name"
          />
        </div>
        <div className="flex flex-col">
          <label className="max-md:text-xs text-sm font-medium" htmlFor="email">
            Where can I reach you? *
          </label>
          <input
          required
            className="placeholder:text-slate-600 p-2 focus:outline-none focus:shadow-md focus:shadow-cyan-500/50 text-sm rounded-md border-none text-slate-900"
            type="email"
            id="email"
            name="enail"
            placeholder="john@mail.com"
          />
        </div>
        <div className="flex flex-col">
          <label className="max-md:text-xs text-sm font-medium" htmlFor="message">
            What's your message? *
          </label>
          <textarea
          required
            rows={6}
            className="p-2 resize-none focus:outline-none focus:shadow-md focus:shadow-cyan-500/50 text-sm rounded-md border-none text-slate-900"
            name="message"
            id="message"
          ></textarea>
        </div>
        <button
          className="mt-2 max-md:text-xs max-md:mt-1 focus:bg-slate-50 focus:text-slate-950 hover:bg-slate-50 text-sm font-semibold hover:text-slate-950 transition-colors border p-2 rounded-md border-slate-200"
          type="submit"
        >
          Send message
        </button>
      </form>
    </div>
  );
}
