import React from "react";

const ContactForm = () => {
  return (
    // <div
    //   className=" flex flex-col items-center justify-center bg-[#fff7f0] p-6"
    //   id="contact"
    // >
    //   <div className="w-full max-w-lg opacity-100 bg-white rounded-xl p-8 shadow-xl border border-gray-200">
    //     <h2 className="text-center text-3xl font-bold mb-2 text-gray-800">
    //       Contact Us
    //     </h2>
    //     <p className="text-center mb-6 text-sm text-gray-600">
    //       Book a service or get in touch with our team
    //     </p>

    //     <form className="space-y-5">
    //       {/* Service Select */}
    //       <div>
    //         <label
    //           htmlFor="service"
    //           className="block text-sm font-medium text-gray-700 mb-1"
    //         >
    //           What Service Do You Need?
    //         </label>
    //         <select
    //           id="service"
    //           defaultValue=""
    //           className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
    //         >
    //           <option value="" disabled>
    //             Select a service
    //           </option>
    //           <option>Carpenter</option>
    //           <option>Electrician</option>
    //           <option>Mechanic</option>
    //           <option>Painter</option>
    //           <option>Plumber</option>
    //           <option>House Cleaning</option>
    //         </select>
    //       </div>

    //       {/* Name & Phone */}
    //       <div className="flex flex-col md:flex-row gap-4">
    //         <div className="flex-1">
    //           <label
    //             htmlFor="name"
    //             className="block text-sm font-medium text-gray-700 mb-1"
    //           >
    //             Full Name
    //           </label>
    //           <input
    //             id="name"
    //             type="text"
    //             placeholder="Enter your name"
    //             className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
    //           />
    //         </div>
    //         <div className="flex-1">
    //           <label
    //             htmlFor="phone"
    //             className="block text-sm font-medium text-gray-700 mb-1"
    //           >
    //             Phone Number
    //           </label>
    //           <input
    //             id="phone"
    //             type="tel"
    //             placeholder="Enter your phone number"
    //             className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
    //           />
    //         </div>
    //       </div>

    //       {/* Email */}
    //       <div>
    //         <label
    //           htmlFor="email"
    //           className="block text-sm font-medium text-gray-700 mb-1"
    //         >
    //           Email
    //         </label>
    //         <input
    //           id="email"
    //           type="email"
    //           placeholder="Enter your email address"
    //           className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
    //         />
    //       </div>

    //       {/* Address */}
    //       <div>
    //         <label
    //           htmlFor="address"
    //           className="block text-sm font-medium text-gray-700 mb-1"
    //         >
    //           Address
    //         </label>
    //         <textarea
    //           id="address"
    //           rows="3"
    //           placeholder="Enter your address"
    //           className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
    //         ></textarea>
    //       </div>

    //       {/* Date & Time */}
    //       <div className="flex flex-col md:flex-row gap-4">
    //         <div className="flex-1">
    //           <label
    //             htmlFor="date"
    //             className="block text-sm font-medium text-gray-700 mb-1"
    //           >
    //             Preferred Date
    //           </label>
    //           <input
    //             id="date"
    //             type="date"
    //             className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
    //           />
    //         </div>
    //         <div className="flex-1">
    //           <label
    //             htmlFor="time"
    //             className="block text-sm font-medium text-gray-700 mb-1"
    //           >
    //             Preferred Time
    //           </label>
    //           <input
    //             id="time"
    //             type="time"
    //             className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
    //           />
    //         </div>
    //       </div>

    //       {/* Message */}
    //       <div>
    //         <label
    //           htmlFor="message"
    //           className="block text-sm font-medium text-gray-700 mb-1"
    //         >
    //           Message
    //         </label>
    //         <textarea
    //           id="message"
    //           rows="3"
    //           placeholder="Enter your message"
    //           className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
    //         ></textarea>
    //       </div>

    //       {/* Terms */}
    //       <div className="flex items-center space-x-2 text-xs">
    //         <input
    //           type="checkbox"
    //           id="terms"
    //           className="h-4 w-4 rounded border-gray-300 focus:ring-blue-500"
    //         />
    //         <label htmlFor="terms" className="text-gray-700">
    //           I agree to the{" "}
    //           <a href="#" className="text-blue-600 underline">
    //             Terms and conditions
    //           </a>
    //         </label>
    //       </div>

    //       {/* Submit Button */}
    //       <button
    //         type="submit"
    //         className="w-full bg-blue-500 hover:bg-blue-700 text-white py-2 rounded-lg text-sm font-semibold hover:from-blue-600 hover:to-indigo-700 transition"
    //       >
    //         Submit Request
    //       </button>
    //     </form>
    //   </div>
    // </div>

    <div
      className="flex flex-col items-center justify-center bg-bg-[#fff7f0]  py-12 px-4 sm:px-6 lg:px-8"
      id="contact"
    >
      <div className="w-full max-w-2xl bg-white/80 backdrop-blur-lg border border-gray-200 rounded-2xl shadow-xl p-8">
        <h2 className="text-center text-4xl font-extrabold text-gray-800 mb-2">
          Contact Us
        </h2>
        <p className="text-center text-sm text-gray-500 mb-6">
          Book a service or get in touch with our team
        </p>

        <form className="space-y-6">
          {/* Service Select */}
          <div>
            <label
              htmlFor="service"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              What Service Do You Need?
            </label>
            <select
              id="service"
              defaultValue=""
              className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white"
            >
              <option value="" disabled>
                Select a service
              </option>
              <option>Carpenter</option>
              <option>Electrician</option>
              <option>Mechanic</option>
              <option>Painter</option>
              <option>Plumber</option>
              <option>House Cleaning</option>
            </select>
          </div>

          {/* Name & Phone */}
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Full Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="Enter your name"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div className="flex-1">
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Phone Number
              </label>
              <input
                id="phone"
                type="tel"
                placeholder="Enter your phone number"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email address"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Address */}
          <div>
            <label
              htmlFor="address"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Address
            </label>
            <textarea
              id="address"
              rows="3"
              placeholder="Enter your address"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
            ></textarea>
          </div>

          {/* Date & Time */}
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <label
                htmlFor="date"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Preferred Date
              </label>
              <input
                id="date"
                type="date"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div className="flex-1">
              <label
                htmlFor="time"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Preferred Time
              </label>
              <input
                id="time"
                type="time"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
          </div>

          {/* Message */}
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Message
            </label>
            <textarea
              id="message"
              rows="3"
              placeholder="Enter your message"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
            ></textarea>
          </div>

          {/* Terms */}
          <div className="flex items-center space-x-2 text-xs text-gray-700">
            <input
              type="checkbox"
              id="terms"
              className="h-4 w-4 rounded border-gray-300 focus:ring-blue-400"
            />
            <label htmlFor="terms">
              I agree to the{" "}
              <a href="#" className="text-blue-600 underline">
                Terms and conditions
              </a>
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-500  hover:from-blue-600  text-white py-3 rounded-lg text-sm font-semibold transition duration-300 ease-in-out transform hover:scale-105 will-change-transform"
          >
            <span className="block transform scale-100">Submit Request</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
