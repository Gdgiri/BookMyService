import React from "react";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";

const SupportCards = () => {
  const number = "919715424895"; // replace with your actual number (no +, no spaces)
  const callLink = `tel:${number}`;
  const message = "Hello, I need some service details. Kindly assist.";
  // const message = "Hi, I'm interested in your services. Please let me know how to proceed.";
  // const message = "Hello! I’d like to know more about your services.";
  // const message = "Hi, I’m looking for services. Please guide me.";

  const encodedMessage = encodeURIComponent(message);
  const whatsappLink = `https://wa.me/${number}?text=${encodedMessage}`;
  return (
    <div
      className="py-16 bg-[#fff7f0] flex items-center justify-center "
      id="support"
    >
      <div className=" grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl w-full m-4 mb-34">
        {/* WhatsApp Card */}
        <div className="bg-white rounded-xl shadow-md p-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 h-16 w-16 bg-green-100 rounded-bl-full"></div>
          <div className="absolute bottom-0 left-0 h-16 w-16 bg-green-100 rounded-tr-full"></div>

          <div className="flex items-center justify-center mb-4">
            <div className="bg-green-500 text-white p-3 rounded-full text-xl">
              <FaWhatsapp />
            </div>
          </div>
          <h3 className="text-lg font-bold text-center">
            Need Help Instantly?
          </h3>
          <p className="text-sm text-gray-700 text-center mt-2">
            Connect with our team on WhatsApp and get quick responses to your
            service queries. We’re available every day from{" "}
            <strong>8 AM to 9 PM</strong>.
          </p>
          <div className="flex justify-center mt-4">
            <a
              href={whatsappLink}
              className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-full text-sm"
              target="_blank"
              rel="noopener noreferrer"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>

        {/* Call Card */}
        <div className="bg-white rounded-xl shadow-md p-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 h-16 w-16 bg-blue-100 rounded-bl-full"></div>
          <div className="absolute bottom-0 left-0 h-16 w-16 bg-blue-100 rounded-tr-full"></div>

          <div className="flex items-center justify-center mb-4">
            <div className="bg-blue-500 text-white p-3 rounded-full text-xl">
              <FaPhoneAlt />
            </div>
          </div>
          <h3 className="text-lg font-bold text-center">
            Prefer to Talk?
            <br />
            Give Us a Call!
          </h3>
          <p className="text-sm text-gray-700 text-center mt-2">
            We're just a call away. Speak directly with our team for bookings,
            inquiries, or urgent help.
          </p>
          <div className="flex justify-center mt-4">
            <a
              href={callLink}
              className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-full text-sm"
            >
              Call now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupportCards;
