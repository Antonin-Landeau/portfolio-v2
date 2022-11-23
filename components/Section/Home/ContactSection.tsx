import React from "react";
import Title from "../../Library/Title";

const ContactSection = () => {
  return (
    <section className="bg-primary-orange p-5">
        <Title className="text-4xl" title="Contact" variant="orange" />
        <div className="py-2 mx-auto w-full max-w-md">
          <p className="text-default-white text-lg text-center md:text-xl">
            antoninlandeaupro@gmail.com
          </p>
        </div>
    </section>
  );
};

export default ContactSection;
