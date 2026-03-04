import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import {
  FaSchool,
  FaUsers,
  FaHandshake,
  FaBuilding,
  FaChartLine,
  FaGlobe,
} from "react-icons/fa";

const Impact = () => {
  const [visible, setVisible] = useState(false);

  const stats = [
    {
      icon: FaChartLine,
      value: "10+",
      label: "Years of Professional Experience",
      sub: "Established 2014",
    },
    {
      icon: FaSchool,
      value: "98%",
      label: "Schools Audited",
      sub: "Malamulele West Circuit",
    },
    {
      icon: FaUsers,
      value: "65+",
      label: "SMMEs Trained",
      sub: "Government Support Programs",
    },
    {
      icon: FaBuilding,
      value: "14+",
      label: "Cooperatives Managed",
      sub: "R14M+ Financial Oversight",
    },
    {
      icon: FaHandshake,
      value: "85%",
      label: "Creches Registered",
      sub: "NPO Compliance Support",
    },
    {
      icon: FaGlobe,
      value: "4",
      label: "Districts Served",
      sub: "Across Limpopo",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.4 }
    );

    const section = document.getElementById("impact-section");
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  return (
    <section
      id="impact-section"
      className="py-24 bg-white"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* SECTION HEADER */}
        <motion.div
          variants={fadeIn("up", 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900">
            Our Impact
          </h2>
          <p className="mt-6 text-gray-600 max-w-2xl mx-auto text-lg">
            Delivering measurable financial governance outcomes across public
            institutions, SMMEs and community organisations.
          </p>
        </motion.div>

        {/* STATS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-12">

          {stats.map((stat, index) => {
            const Icon = stat.icon;

            return (
              <motion.div
                key={index}
                variants={fadeIn("up", index * 0.1)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="flex flex-col items-center text-center px-4"
              >
                <div className="mb-6 text-cyan-700">
                  <Icon size={30} />
                </div>

                <div className="text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">
                  {visible && stat.value}
                </div>

                <h3 className="text-lg font-semibold text-slate-800 mb-2">
                  {stat.label}
                </h3>

                <p className="text-sm text-gray-500">
                  {stat.sub}
                </p>
              </motion.div>
            );
          })}

        </div>
      </div>
    </section>
  );
};

export default Impact;