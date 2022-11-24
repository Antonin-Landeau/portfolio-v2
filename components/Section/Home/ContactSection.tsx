import React from "react";
import ContactForm from "../../Library/ContactForm";
import Title from "../../Library/Title";

const ContactSection = () => {
  return (
    <section className="bg-primary-orange p-5">
      <Title title="Contact" variant="orange" />
      <div className="py-2 mx-auto w-full max-w-md">
        <ContactForm />
        {/* <p className="text-default-white text-lg text-center md:text-xl">
          antoninlandeaupro@gmail.com
        </p> */}
      </div>
    </section>
  );
};

export default ContactSection;
