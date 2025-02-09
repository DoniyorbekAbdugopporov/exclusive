import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { NavLink } from "react-router-dom";

const Contact = () => {
  return (
    <div className="container py-10">
      {/* Breadcrumb */}
      <div className="text-gray-500 mb-6">
        <NavLink to="/">Home</NavLink>
        <span className="mx-2">/</span>
        <NavLink to="/contact">Contact</NavLink>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Contact Information */}
        <div className="bg-white shadow-md p-6 rounded-lg border border-gray-200">
          {/* Call Us */}
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-red-500 text-white w-10 h-10 flex items-center justify-center rounded-full">
              <FaPhoneAlt />
            </div>
            <h3 className="text-lg font-semibold">Call To Us</h3>
          </div>
          <p className="text-gray-600 text-sm mb-2">
            We are available 24/7, 7 days a week.
          </p>
          <p className="text-black font-medium mb-4">Phone: +88011112222</p>
          <hr className="border-gray-300 mb-4" />

          {/* Write To Us */}
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-red-500 text-white w-10 h-10 flex items-center justify-center rounded-full">
              <MdEmail />
            </div>
            <h3 className="text-lg font-semibold">Write To Us</h3>
          </div>
          <p className="text-gray-600 text-sm mb-2">
            Fill out our form and we will contact you within 24 hours.
          </p>
          <p className="text-black font-medium">
            Emails: customer@exclusive.com
          </p>
          <p className="text-black font-medium">Email: support@exclusive.com</p>
        </div>

        {/* Contact Form */}
        <div className="md:col-span-2 bg-white shadow-md p-6 rounded-lg border border-gray-200">
          <form className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <input
                type="text"
                placeholder="Your Name *"
                required
                className="border border-gray-300 px-4 py-2 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-red-400"
              />
              <input
                type="email"
                placeholder="Your Email *"
                required
                className="border border-gray-300 px-4 py-2 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-red-400"
              />
              <input
                type="tel"
                placeholder="Your Phone *"
                required
                className="border border-gray-300 px-4 py-2 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-red-400"
              />
            </div>
            <textarea
              placeholder="Your Message"
              rows={5}
              className="border border-gray-300 px-4 py-2 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-red-400"
            ></textarea>
            <button
              type="submit"
              className="bg-red-500 text-white px-6 py-2 rounded-md hover:bg-red-600 transition w-full sm:w-auto"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Contact);
