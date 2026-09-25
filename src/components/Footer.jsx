import React from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <div className="md:mx-10">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-1O mt-40 text-sm">
        {/* ----- Left Section ----- */}
        <div>
          <img
            onClick={() => {
              navigate("/");
              scrollTo(0, 0);
            }}
            className="mb-5 w-40 cursor-pointer"
            src={assets.mainlogo}
            alt=""
          />
          <p className="w-full md:w-2/3 text-gray-600 leading-6">
            CureConnect helps you find the right doctor and book appointments
            with ease. Get access to trusted healthcare professionals and manage
            your appointments all in one place. Explore doctors by specialty,
            check their availability, and choose a convenient time for your
            visit. Our goal is to make healthcare simpler, faster, and more
            accessible for everyone.
          </p>
        </div>

        {/* ----- Center Section ----- */}
        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li
              onClick={() => {
                navigate("/");
                scrollTo(0, 0);
              }}
              className="cursor-pointer"
            >
              Home
            </li>
            <li
              onClick={() => {
                navigate("/about");
                scrollTo(0, 0);
              }}
              className="cursor-pointer"
            >
              About us
            </li>
            <li
              onClick={() => {
                navigate("/contact");
                scrollTo(0, 0);
              }}
              className="cursor-pointer"
            >
              Contact us
            </li>
            <li
              onClick={() => {
                navigate("/doctors");
                scrollTo(0, 0);
              }}
              className="cursor-pointer"
            >
              Book an Appointment
            </li>
          </ul>
        </div>

        {/* ----- Right Section ----- */}
        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <a href="tel://+919341520876" target="_blank">
              <li>+91 9341520876</li>
            </a>
            <a href="mailto:shubhamvatsjha7@gmail.com" target="_blank">
              <li>shubhamvatsjha7@gmail.com</li>
            </a>
          </ul>
        </div>
      </div>

      {/* ---- Copyright Text ---- */}
      <div>
        <br />
        <hr />
        <p className="py-5 text-sm text-center">
          Copyright © 2026 - All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
