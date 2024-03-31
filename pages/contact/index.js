import React, { useState } from "react";
import Swal from "sweetalert2";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, subject, message }),
      });
      if (response.ok) {
        Swal.fire("Success", "Email sent successfully!", "success");
        // Reset form fields after successful submission
        setTimeout(() => {
          setEmail("");
          setSubject("");
          setMessage("");
        }, 3000); // Reset after 3 seconds
      } else {
        Swal.fire(
          "Error",
          "Failed to send email. Please try again later.",
          "error"
        );
      }
    } catch (error) {
      console.error("Failed to send email", error);
      Swal.fire(
        "Error",
        "Failed to send email. Please try again later.",
        "error"
      );
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white dark:bg-gray-900 py-8 lg:py-16 px-8 w-full max-w-screen-md border border-gray-300 rounded-lg">
        <h2 className="text-2xl font-extrabold text-center text-gray-900 dark:text-white mb-4">
          Contact Us
        </h2>
        <p className="text-center text-gray-500 dark:text-gray-400 mb-8 lg:mb-12">
          Got a technical issue? Want to send feedback about a beta feature? or
          You have a suggestion to me? Let us know.
        </p>
        <form
          onSubmit={handleSubmit}
          className="space-y-4 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-4"
        >
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Your email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="block w-full p-2.5 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder="name@gmail.com"
              required
            />
          </div>
          <div>
            <label
              htmlFor="subject"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="block w-full p-2.5 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder="Let us know how we can help you"
              required
            />
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block mb-2 mt-2 text-sm font-medium text-gray-900 dark:text-gray-400"
            >
              Your message
            </label>
            <textarea
              id="message"
              rows="2"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="block mb-10 w-full p-2.5 text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="Leave a comment..."
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-[#131424] sm:w-auto hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
          >
            Send message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
