import React from "react";
import { useNavigate } from "react-router-dom";
import cover from "../assets/cover.jpg";
import Impact from "../components/Impact";
import Services from "../components/Services";

const FirstPage = () => {
  const navigate = useNavigate();

  return (
    <>
      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center">
        <img
          src={cover}
          alt="Ritlhavile Accounting Solutions Cover"
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>

        <div className="relative text-center px-6 max-w-4xl z-10">
          <h1 className="text-5xl sm:text-6xl font-bold text-white leading-tight">
            Ritlhavile Accounting Solutions
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-cyan-700 font-medium">
            Audit · Accounting · Advisory · Tax · Payroll
          </p>
          <p className="mt-6 text-gray-300 max-w-2xl mx-auto">
            Empowering communities through transparent financial management and
            sustainable business solutions.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <button
              onClick={() => navigate("/contact")}
              className="bg-cyan-800 hover:bg-cyan-500 text-white px-8 py-3 rounded-full font-semibold transition duration-300 shadow-lg hover:shadow-xl"
            >
              Contact Us
            </button>
            <button
              onClick={() => navigate("/services-items")}
              className="border border-white/70 hover:bg-white hover:text-black text-white px-8 py-3 rounded-full font-semibold transition duration-300"
            >
              Explore Services
            </button>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">About Us</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              In today's complex business environment, you need more than just
              compliance — you need a strategic partner who understands your
              challenges and helps you grow.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Based in Limpopo, we provide Audit, Accounting, Tax, Advisory,
              Training, and Payroll services led by a Chartered Accountant.
              Through smart technology and modern systems, we simplify
              compliance so you can focus on building your business.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                SAIBA Member
              </span>
              <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                SAIT Registered
              </span>
              <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                Since 2014
              </span>
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-md p-10 rounded-2xl shadow-xl border border-gray-100">
            <h3 className="text-xl font-semibold text-cyan-800 mb-3">Our Vision</h3>
            <p className="text-gray-600 italic mb-6">
              To deliver quality financial services that promote accountability
              and sustainable development across South Africa.
            </p>
            <h3 className="text-xl font-semibold text-cyan-800 mb-3">Our Mission</h3>
            <p className="text-gray-600">
              We empower communities, government institutions, and
              non-profit organisations through transparent financial
              management, capacity building, and sustainable systems that
              strengthen long-term growth.
            </p>
          </div>
        </div>
      </section>

      {/* Service SECTION */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <Services />
        </div>
      </section>

      {/* IMPACT SECTION */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <Impact />
        </div>
      </section>

      {/* CTA SECTION */}
      <section id="contact" className="py-24 bg-cyan-950">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-200 mb-6">
            Ready to Transform Your Financial Management?
          </h2>
          <p className="text-gray-400 text-lg mb-8">
            Let us help you navigate compliance, optimize your finances, and grow your business with confidence.
          </p>
          <button
            onClick={() => navigate("/contact")}
            className="bg-white text-blue-900 px-8 py-3 rounded-full font-semibold transition duration-300 hover:bg-gray-100 shadow-lg"
          >
            Get in Touch Today
          </button>
        </div>
      </section>
    </>
  );
};

export default FirstPage;