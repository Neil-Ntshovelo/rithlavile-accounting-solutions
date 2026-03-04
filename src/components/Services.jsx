import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import {
  FaWhatsapp,
  FaShieldAlt,
  FaBalanceScale,
  FaGraduationCap,
} from "react-icons/fa";
import backGround from "../assets/a.avif";

const Services = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-white min-h-screen font-sans">
      {/* EXECUTIVE HEADER */}
      <section className="py-28 px-6 text-center">
        <div className="max-w-5xl mx-auto">
          <motion.h1
            variants={fadeIn("up", 0.1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-extrabold text-slate-900 leading-tight"
          >
            Audit, Accounting, Tax, Payroll & Advisory Solutions
          </motion.h1>

          <motion.p
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="mt-8 text-lg text-gray-600 max-w-3xl mx-auto"
          >
            We provide professional financial management, audit, tax, payroll,
            training and community development consultancy services to
            government, private sector, SMMEs, NPOs and community projects
            across South Africa.
          </motion.p>
        </div>
      </section>

      {/* SERVICES LIST */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto space-y-20">
          <ServiceBlock
            icon={<FaShieldAlt />}
            title="Audit & Assurance Services"
            description="We provide audit, independent review and assurance services for schools, NPOs, municipalities, cooperatives, churches and private companies. Our focus is ensuring financial transparency, accountability and compliance with regulatory requirements."
          />

          <ServiceBlock
            icon={<FaBalanceScale />}
            title="Taxation & Advisory Services"
            description="We assist with business and individual tax returns, VAT registration and submissions, PAYE, SDL, EMP201, EMP501, ITR12 and ITR14 compliance. We also provide SARS liaison support, tax clearance certificates and dispute resolution assistance."
            reverse
          />

          <ServiceBlock
            icon={<FaGraduationCap />}
            title="Training, Community Development & Capacity Building"
            description="We develop training materials, facilitate business management training, financial literacy programs and community development workshops. Our goal is to empower disadvantaged communities through skills development, participation and sustainable project management."
          />
        </div>
      </section>

      {/* STRATEGIC BANNER */}
      <motion.section
        variants={fadeIn("up", 0.3)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="relative py-28 px-6 bg-cover bg-center"
        style={{ backgroundImage: `url(${backGround})` }}
      >
        <div className="absolute inset-0 bg-slate-900/95"></div>

        <div className="relative z-10 max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Community Focused Financial Solutions
          </h2>

          <p className="text-lg text-gray-300 mb-10 leading-relaxed">
            Our development approach promotes community participation,
            sustainability, transparency and capacity building through
            participatory planning methodologies and professional financial
            management support.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <button
              onClick={() => navigate("/contact")}
              className="bg-cyan-700 px-10 py-4 rounded-md font-semibold hover:bg-cyan-800 transition duration-300"
            >
              Contact Us
            </button>

            <button
              onClick={() => navigate("/about")}
              className="border border-white px-10 py-4 rounded-md font-semibold hover:bg-white hover:text-slate-900 transition duration-300"
            >
              Learn More About Our Company
            </button>
          </div>
        </div>
      </motion.section>

      {/* WHATSAPP FLOAT */}
      <div className="fixed bottom-6 right-6 z-50">
        <a
          href="https://wa.me/0711234567"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-600 text-white p-4 rounded-full shadow-xl hover:bg-green-700 transition duration-300 flex items-center justify-center"
        >
          <FaWhatsapp className="text-2xl" />
        </a>
      </div>
    </div>
  );
};

/* SERVICE BLOCK COMPONENT */
const ServiceBlock = ({ icon, title, description, reverse }) => (
  <motion.div
    variants={fadeIn("up", 0.2)}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true }}
    className={`grid md:grid-cols-2 gap-12 items-center ${
      reverse ? "md:flex-row-reverse" : ""
    }`}
  >
    <div>
      <div className="text-cyan-700 text-3xl mb-6">{icon}</div>
      <h3 className="text-2xl font-bold text-slate-900 mb-6">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>

    <div className="border-l-4 border-red-800 pl-8">
      <p className="text-gray-500 leading-relaxed">
        We apply professional accounting standards, technology-enabled systems
        and ethical financial governance principles to deliver reliable and
        sustainable financial management solutions.
      </p>
    </div>
  </motion.div>
);

export default Services;