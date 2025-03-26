'use client'

import { Separator } from "@/components/ui/separator";
import Navbar from "../navbar";
import Footer from "../footer";
import { useState, ChangeEvent, FormEvent } from "react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form Submitted", formData);
  };

  return (
    <div className="md:min-h-screen bg-white">
      <Navbar />

      <div className="pt-32 pb-20 px-6 mx-auto 2xl:w-4/5 md:px-16">
        <div className="mx-auto flex items-center flex-col text-center">
          <h1 className="text-4xl xl:text-6xl 2xl:text-7xl font-bold mb-8">
            Get in Touch
          </h1>
          <p className="text-xl text-neutral-500 max-w-2xl">
            Have questions or want to collaborate? Fill out the form below and
            we’ll get back to you soon.
          </p>
        </div>
      </div>

      <Separator className="my-16" />

      <div className="px-6 mx-auto 2xl:w-4/5 md:px-16 md:py-20">
        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6">
          <div>
            <label className="block text-lg font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full mt-2 px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
              required
            />
          </div>
          <div>
            <label className="block text-lg font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full mt-2 px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
              required
            />
          </div>
          <div>
            <label className="block text-lg font-medium text-gray-700">
              Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              className="w-full mt-2 px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-black text-white text-lg font-semibold rounded-md hover:bg-gray-800 transition"
          >
            Send Message
          </button>
        </form>
      </div>

      <Footer />
    </div>
  );
};

export default ContactUs;
