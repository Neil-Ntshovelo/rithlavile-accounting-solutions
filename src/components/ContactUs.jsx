import React, { useState } from "react";
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebook,
  FaWhatsapp,
  FaLinkedin,
  FaPhone,
  FaBuilding,
} from "react-icons/fa";
import { motion } from "framer-motion";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: "" });
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name) newErrors.name = "Name is required";

    if (!formData.email) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Invalid email address";

    if (!formData.message) newErrors.message = "Message is required";

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setLoading(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));

      setSubmitted(true);
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleClear = () => {
    setFormData({ name: "", email: "", message: "" });
    setErrors({});
    setSubmitted(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-blue-50 to-slate-200">

      {/* TITLE */}
      <div className="text-center pt-24 px-6">
        <h1 className="text-4xl font-bold text-gray-700 mb-4">
          Contact Us
        </h1>

        <p className="text-gray-600 max-w-2xl mx-auto">
          Reach out to Ritlhavile Accounting Solutions for professional audit,
          tax, payroll and advisory services.
        </p>
      </div>

      {/* INFO + FORM SECTION */}
      <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-16">

        {/* LEFT INFO */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="space-y-8"
        >
          <div>
            <h2 className="text-3xl font-bold text-red-950 flex items-center gap-3">
              <FaBuilding className="text-gray-700" />
              Ritlhavile Accounting Solutions
            </h2>

            <p className="text-gray-600 mt-4 leading-relaxed">
              Audit | Accounting | Tax | Payroll | Advisory Services
            </p>
          </div>

          <div className="space-y-4 text-gray-700">
            <p className="flex items-center gap-3">
              <FaPhone className="text-gray-500" />
              083 346 8884 / 073 842 0943
            </p>

            <p className="flex items-center gap-3">
              <FaEnvelope className="text-gray-600" />
              eric.tinyiko@gmail.com
            </p>

            <p className="flex items-start gap-3">
              <FaMapMarkerAlt className="text-red-600 mt-1" />
              Malamulele, Limpopo, South Africa
            </p>
          </div>

          <div className="flex gap-6 pt-6">
            <a href="https://wa.me/27833468884">
              <FaWhatsapp className="text-green-900 text-2xl hover:scale-125 transition" />
            </a>

            <a href="#">
              <FaLinkedin className="text-blue-900 text-2xl hover:scale-125 transition" />
            </a>

            <a href="#">
              <FaFacebook className="text-blue-900 text-2xl hover:scale-125 transition" />
            </a>
          </div>
        </motion.div>

        {/* FORM */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="bg-white/80 backdrop-blur-xl border border-slate-200 shadow-2xl rounded-3xl p-10"
        >
          {submitted && (
            <div className="mb-6 p-4 bg-emerald-50 text-emerald-700 border border-emerald-200 rounded-xl text-center">
              ✓ Message sent successfully! We will respond shortly.
            </div>
          )}

          <h3 className="text-2xl font-semibold text-red-900 mb-8">
            Send a Message
          </h3>

          <form onSubmit={handleSubmit} className="space-y-6">

            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-4 rounded-xl border border-slate-300 focus:ring-4 focus:ring-blue-100 focus:border-blue-900 outline-none transition"
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name}</p>
            )}

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-4 rounded-xl border border-slate-300 focus:ring-4 focus:ring-blue-100 focus:border-blue-900 outline-none transition"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email}</p>
            )}

            <textarea
              name="message"
              rows="5"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-4 rounded-xl border border-slate-300 focus:ring-4 focus:ring-blue-100 focus:border-blue-900 outline-none resize-none transition"
            />

            {errors.message && (
              <p className="text-red-500 text-sm">{errors.message}</p>
            )}

            <div className="flex justify-between items-center pt-4">
              <button
                type="submit"
                disabled={loading}
                className="bg-gradient-to-r from-gray-00 to-blue-700 text-white px-8 py-3 rounded-xl shadow-lg hover:scale-[1.03] transition"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>

              <button
                type="button"
                onClick={handleClear}
                className="text-red-700 hover:text-gray-700 transition"
              >
                Clear
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactUs;