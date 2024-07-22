import ContactForm from "@/components/contact-form";
import React from "react";

type Props = {};

export default function Contact({}: Props) {
  
  return (
    <section className="mx-auto max-md:w-full flex mt-16 md:mt-20">
      <ContactForm />
    </section>
  );
}
