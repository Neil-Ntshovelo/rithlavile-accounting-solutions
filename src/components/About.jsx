import React from "react";
import {
  FaUsers,
  FaShieldAlt,
  FaChartLine,
  FaGlobeAfrica,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const About = () => {
  return (
    <>
      {/* EXECUTIVE HERO */}
      <section className="bg-white py-28 px-6 text-center">
        <div className="max-w-6xl mx-auto">
          <motion.h1
            variants={fadeIn("up", 0.1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-extrabold text-slate-900 leading-tight"
          >
            Building Financial Confidence.
            <span className="block text-cyan-700">
              Delivering Measurable Results.
            </span>
          </motion.h1>

          <motion.p
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="mt-8 text-lg text-gray-600 max-w-3xl mx-auto"
          >
            Ritlhavile Accounting Solutions is a South African professional
            services firm providing audit, tax, advisory and financial
            management solutions to public institutions, SMMEs and corporate
            organisations.
          </motion.p>
        </div>
      </section>

      {/* COMPANY PROFILE */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center text-center md:text-left">
          
          <motion.div
            variants={fadeIn("right", 0.1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="mx-auto md:mx-0"
          >
            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              Who We Are
            </h2>

            <p className="text-gray-600 leading-relaxed mb-6">
              Established in 2014, Ritlhavile Accounting Solutions (Pty) Ltd
              operates with a clear mandate: to strengthen financial governance,
              enhance compliance, and drive sustainable growth.
            </p>

            <p className="text-gray-600 leading-relaxed">
              Our firm combines technical excellence with practical insight,
              helping organisations navigate complex regulatory environments
              while unlocking strategic financial value.
            </p>
          </motion.div>

          <motion.div
            variants={fadeIn("left", 0.1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="border-l-0 md:border-l-4 border-red-800 md:pl-8 mx-auto md:mx-0"
          >
            <h3 className="text-xl font-semibold text-red-800 mb-4">
              Regulatory & Professional Standing
            </h3>

            <ul className="space-y-3 text-gray-700">
              <li>• Registered Company (Reg No: 2014/248017/7)</li>
              <li>• CIBA Member (201410-6312)</li>
              <li>• SARS & CIPC Compliant</li>
              <li>• Public Sector & Municipal Experience</li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="py-24 px-6 bg-white text-center">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="mx-auto">
            <h3 className="text-2xl font-bold text-cyan-700 mb-6">
              Our Mission
            </h3>
            <p className="text-gray-600 leading-relaxed max-w-xl mx-auto">
              To deliver reliable, ethical and forward-thinking financial
              services that empower organisations to operate transparently,
              comply confidently and grow sustainably.
            </p>
          </div>

          <div className="mx-auto">
            <h3 className="text-2xl font-bold text-red-800 mb-6">
              Our Vision
            </h3>
            <p className="text-gray-600 leading-relaxed max-w-xl mx-auto">
              To become a trusted national advisory partner recognised for
              integrity, technical excellence and measurable impact across
              South Africa.
            </p>
          </div>
        </div>
      </section>

      {/* ENTERPRISE STATS SECTION */}
      <section className="bg-slate-900 py-28 px-6 text-white text-center">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 items-center">
            <Stat icon={<FaUsers />} number="200+" label="Clients Served" />
            <Stat icon={<FaChartLine />} number="10+" label="Years Experience" />
            <Stat icon={<FaShieldAlt />} number="100%" label="Compliance Focus" />
            <Stat icon={<FaGlobeAfrica />} number="National" label="Coverage" />
          </div>
        </div>
      </section>

      {/* STRATEGIC VALUES */}
      <section className="py-24 px-6 bg-gray-50 text-center">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-12">
            Our Strategic Principles
          </h2>

          <div className="grid md:grid-cols-3 gap-10 items-center">
            <EnterpriseCard
              title="Integrity"
              text="We maintain uncompromising ethical standards in every engagement."
            />
            <EnterpriseCard
              title="Client Partnership"
              text="We build long-term relationships grounded in trust and measurable value."
            />
            <EnterpriseCard
              title="Performance Excellence"
              text="We apply modern systems and best practices to deliver consistent results."
            />
          </div>
        </div>
      </section>

      {/* EXECUTIVE CTA */}
      <section className="bg-white py-24 px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
          Let's Strengthen Your Organisation
        </h2>

        <p className="text-gray-600 max-w-2xl mx-auto mb-10">
          Speak with our professional team to discuss how we can enhance your
          financial governance, compliance framework and growth strategy.
        </p>

        <Link
          to="/services-items"
          className="inline-block bg-cyan-700 text-white px-10 py-4 rounded-md font-semibold hover:bg-cyan-800 transition duration-300"
        >
          Explore Our Services
        </Link>
      </section>
    </>
  );
};

/* STAT COMPONENT */
const Stat = ({ icon, number, label }) => (
  <div className="flex flex-col items-center">
    <div className="text-3xl text-cyan-500 mb-4">{icon}</div>
    <h3 className="text-3xl font-bold">{number}</h3>
    <p className="text-gray-300 mt-2">{label}</p>
  </div>
);

/* ENTERPRISE CARD */
const EnterpriseCard = ({ title, text }) => (
  <div className="bg-white p-10 rounded-md shadow-sm hover:shadow-lg transition duration-300 flex flex-col items-center text-center">
    <h3 className="text-xl font-semibold text-slate-900 mb-4">{title}</h3>
    <p className="text-gray-600">{text}</p>
  </div>
);

export default About;
