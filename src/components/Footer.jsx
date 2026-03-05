import React from "react";
import {
  MapPin,
  Phone,
  Mail,
  Printer,
  Facebook,
  Linkedin,
  Globe,
  MessageCircle,
} from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-gray-200 text-gray-700 pt-24 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">

          {/* COMPANY OVERVIEW */}
          <div>
            <div className="mb-8">
              <img
                src={logo}
                alt="Ritlhavile Accounting Solutions"
                className="h-20 w-auto object-contain"
              />
            </div>

            <p className="text-sm leading-relaxed mb-8">
              Ritlhavile Accounting Solutions (Pty) Ltd is a South African
              professional services firm providing audit, tax, advisory and
              financial governance solutions to public institutions, SMMEs and
              corporate organisations.
            </p>

            <div className="flex gap-5">
              <a href="#" className="hover:text-cyan-700 transition">
                <Facebook size={18} />
              </a>

              <a href="#" className="hover:text-cyan-700 transition">
                <Linkedin size={18} />
              </a>

              <a
                href="https://wa.me/27833468884"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-green-600 transition"
              >
                <MessageCircle size={18} />
              </a>
            </div>
          </div>

          {/* CONTACT DETAILS */}
          <div>
            <h4 className="text-gray-900 font-semibold mb-6 tracking-wide uppercase text-sm">
              Contact
            </h4>

            <ul className="space-y-5 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="mt-1 text-cyan-700" />
                <span>
                  P.O. Box 125, House No. 543A <br />
                  Malamulele, 0982 <br />
                  Limpopo, South Africa
                </span>
              </li>

              <li className="flex items-center gap-3">
                <Phone size={18} className="text-cyan-700" />
                <span>083 346 8884 | 073 842 0943</span>
              </li>

              <li className="flex items-center gap-3">
                <Printer size={18} className="text-cyan-700" />
                <span>Fax: 086 619 8902</span>
              </li>

              <li className="flex items-center gap-3">
                <Mail size={18} className="text-cyan-700" />
                <a
                  href="mailto:eric.tinyiko@gmail.com"
                  className="hover:text-cyan-700 transition"
                >
                  eric.tinyiko@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* SERVICES */}
          <div>
            <h4 className="text-gray-900 font-semibold mb-6 tracking-wide uppercase text-sm">
              Services
            </h4>

            <ul className="space-y-4 text-sm">
              {[
                "Audit & Assurance",
                "Accounting & Tax",
                "Payroll Solutions",
                "Training & Facilitation",
                "Company Secretarial",
                "Management Consultancy",
              ].map((service, index) => (
                <li key={index}>
                  <Link
                    to="/services-items"
                    className="hover:text-cyan-700 transition"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* REGULATORY INFORMATION */}
          <div>
            <h4 className="text-gray-900 font-semibold mb-6 tracking-wide uppercase text-sm">
              Registration & Accreditation
            </h4>

            <ul className="space-y-4 text-sm">
              <li>
                <span className="font-semibold">Reg No:</span> 2014/248017/7
              </li>

              <li>
                <span className="font-semibold">SAIBA:</span> MIBA0491
              </li>

              <li>
                <span className="font-semibold">SAIT:</span> 28753829
              </li>

              <li className="flex items-center gap-2">
                <Globe size={16} className="text-cyan-700" />
            
              </li>
            </ul>
          </div>

        </div>

        {/* DIVIDER */}
        <div className="border-t border-gray-300 pt-8 flex flex-col md:flex-row justify-between items-center text-sm">

          <p className="text-gray-600">
            © {new Date().getFullYear()} Ritlhavile Accounting Solutions (Pty) Ltd.
            All rights reserved.
          </p>

          <div className="flex gap-8 mt-4 md:mt-0">
            <a href="#" className="hover:text-cyan-700 transition">
              Privacy Policy
            </a>

            <a href="#" className="hover:text-cyan-700 transition">
              Terms of Service
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;