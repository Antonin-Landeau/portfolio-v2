import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const form = useRef<any>();
  const sendEmail = (e: any) => {
    e.preventDefault();
    console.log(form.current)
    emailjs
      .sendForm("service_pgs12xn", "template_sd6sdr3", form.current, "1HJPmOYla7pgW9du0")
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <form className="max-w-lg flex flex-col" ref={form} onSubmit={sendEmail}>
      <div className="flex flex-col py-1">
        <label className="text-default-white pb-1">Name</label>
        <input
          type="text"
          name="name"
          className="rounded-lg pl-4 py-2 focus:outline-0 text-gb-color-black"
        />
      </div>
      <div className="flex flex-col py-1">
        <label className="text-default-white pb-1">Email</label>
        <input
          type="email"
          name="email"
          className="rounded-lg pl-4 py-2 focus:outline-0 text-gb-color-black"
        />
      </div>
      <div className="flex flex-col py-1">
        <label className="text-default-white pb-1">Message</label>
        <textarea
          className="rounded-lg pl-4 py-2 focus:outline-0 text-gb-color-black h-40 resize-none"
          name="message"
        ></textarea>
      </div>
      <button className="bg-gb-color-black text-default-white py-2 px-3 rounded text-sm mt-3 ml-auto" >
        Envoyer
      </button>
    </form>
  );
};

export default ContactForm;
