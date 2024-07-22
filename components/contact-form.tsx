"use client";
import { Loader2 } from "lucide-react";
import React, { useState } from "react";
type Props = {};

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [data, setData] = useState<ContactForm>({
    name: "",
    email: "",
    message: "",
  });

  const handleResetMessage = () => {
    setSuccess(false);
    setError(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    handleResetMessage();
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleResetMessage();
    setLoading(true);

    try {
      const res = await fetch(`${process.env.BACKEND_URL}/api/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setError(false);
        setSuccess(true);

        setData({
          email: "",
          message: "",
          name: "",
        });
      }
    } catch (error) {
      console.log("error", error);
      setSuccess(false);
      setError(true);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="md:w-[400px] w-full contact-form md:px-4 md:py-2">
      <h4 className="text-xl md:text-2xl leading-5 font-light">
        Get in Touch!
      </h4>
      <p className="text-sm max-md:text-xs">
        Answer a few fun questions to reach out to me.
      </p>
      <form
        onSubmit={handleSubmit}
        className="z-40 max-md:mt-1 mt-3 flex flex-col gap-y-2 "
      >
        <div className="flex flex-col">
          <label className="max-md:text-xs text-sm font-medium" htmlFor="name">
            What's your name? *
          </label>
          <input
            value={data.name}
            onChange={handleChange}
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
            value={data.email}
            onChange={handleChange}
            required
            className="placeholder:text-slate-600 p-2 focus:outline-none focus:shadow-md focus:shadow-cyan-500/50 text-sm rounded-md border-none text-slate-900"
            type="email"
            id="email"
            name="email"
            placeholder="john@mail.com"
          />
        </div>
        <div className="flex flex-col">
          <label
            className="max-md:text-xs text-sm font-medium"
            htmlFor="message"
          >
            What's your message? *
          </label>
          <textarea
            value={data.message}
            onChange={handleChange}
            required
            rows={6}
            className="p-2 resize-none focus:outline-none focus:shadow-md focus:shadow-cyan-500/50 text-sm rounded-md border-none text-slate-900"
            name="message"
            id="message"
          ></textarea>
        </div>
        {error && !success && (
          <p className="text-red-600 text-sm">
            Uh-oh! Something went wrong. Please give it another shot!
          </p>
        )}

        {success && !error && (
          <p className="text-green-600 text-sm">
            Your form is in. Nosang will contact you shortly.
          </p>
        )}
        <button
          className="mt-2 max-md:text-xs max-md:mt-1 focus:bg-slate-50 focus:text-slate-950 hover:bg-slate-50 text-sm font-semibold hover:text-slate-950 transition-colors border p-2 rounded-md border-slate-200"
          type="submit"
        >
          {loading ? (
            <Loader2 className="mx-auto animate-spin" />
          ) : (
            "Send message"
          )}
        </button>
      </form>
    </div>
  );
}
