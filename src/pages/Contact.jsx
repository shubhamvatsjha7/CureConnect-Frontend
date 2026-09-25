import React, { useRef } from "react";
import { assets } from "../assets/assets";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_imp80ok", "template_raoayxl", form.current, {
        publicKey: "pPvBI5S-hVhnzAzoi",
      })
      .then(
        () => {
          Swal.fire({
            title: "Success!",
            text: "Message sent successfully!",
            icon: "success",
          });
        },
        (error) => {
          console.log("FAILED...", error.text);
        },
      );
  };

  return (
    <div>
      <div className="text-center text-2xl pt-10 text-gray-500">
        <p>
          CONTACT <span className="text-gray-700 font-semibold">US</span>{" "}
        </p>
      </div>

      <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-28 text-sm">
        <img
          className="w-full md:max-w-[360px]"
          src={assets.contact_image}
          alt=""
        />

        <div className="flex flex-col justify-center items-start gap-6">
          <p className="font-semibold text-lg text-gray-600">Our OFFICE</p>
          <p className="text-gray-500">
            Darbhanga <br /> Bihar-846001
          </p>
          <p className="text-gray-500">
            <a href="tel://+919341520876" target="_blank">
              Tel: +91 9341520876
            </a>{" "}
            <br />{" "}
            <a href="mailto:shubhamvatsjha7@gmail.com" target="_blank">
              Email: shubhamvatsjha7@gmail.com
            </a>
          </p>
          <p className="font-semibold text-lg text-gray-600">
            Careers at CureConnect
          </p>
          <p className="text-gray-500">Want to join us as Doctor?</p>
          <a href="https://forms.gle/wvqj9fBwbRHRadRZ7" target="_blank">
            <button className="border rounded-md border-gray-400 px-8 py-4 text-sm hover:bg-primary hover:text-white transition-all duration-500">
              Join Now
            </button>
          </a>
        </div>
      </div>
      {/* Query form */}
      <div className="px-4 mx-auto max-w-screen-md">
        <div className="text-center text-2xl pt-10 text-gray-500">
          <p>
            ANY <span className="text-gray-700 font-semibold">QUERY</span>
          </p>
        </div>
        <p className="mb-8 lg:mb-16 font-light text-center text__para">
          Got any problem? Want to send feedback about a beta feature? Let us
          know.
        </p>
        <form ref={form} onSubmit={sendEmail} className="space-y-5">
          <div>
            <label className="form__label">Name*</label>
            <input
              type="text"
              name="user_name"
              className="form__input mt-2"
              placeholder="Enter your name"
              required
            />
          </div>
          <div>
            <label className="form__label">Email*</label>
            <input
              type="email"
              name="user_email"
              className="form__input mt-2"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="sm:col-span-2">
            <label className="form__label">Message*</label>
            <textarea
              name="message"
              className="form__input mt-2"
              placeholder="Enter your message"
              rows={5}
              required
            />
          </div>
          <button className="border rounded-md w-full border-primary px-8 py-3 text-gray-700 font-semibold text-lg hover:bg-primary hover:text-white transition-all duration-500 ">
            <input type="submit" value="Send" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
