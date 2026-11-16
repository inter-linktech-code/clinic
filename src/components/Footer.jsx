
import { Link } from "react-router-dom";
import {
  Heart,
  ArrowUpRight,
  MessageCircle,
  ShieldCheck,
} from "lucide-react";

import { getWhatsAppLink } from "./WhatsAppButton";

import "./Footer.css";

const footerCountries = [
  { name: "Bahrain", path: "/bahrain" },
  { name: "UAE", path: "/uae" },
  { name: "Dubai", path: "/dubai" },
  { name: "Qatar", path: "/qatar" },
];

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="swc-footer">
      <div className="swc-footer-main">
        <div className="swc-footer-container">
          {/* BRAND COLUMN */}
          <div className="swc-footer-brand-column">
            <Link to="/" className="swc-footer-brand">
              <span className="swc-footer-brand-icon">
                <Heart size={25} />
              </span>

              <span>
                <strong>SARAH'S</strong>
                <small>WOMEN'S CLINIC</small>
              </span>
            </Link>

            <p className="swc-footer-about">
              A women's health information and enquiry platform focused
              on education, dignity, privacy and informed awareness.
            </p>

            <a
              href={getWhatsAppLink()}
              className="swc-footer-whatsapp"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle size={18} />
              General WhatsApp Enquiry
              <ArrowUpRight size={16} />
            </a>
          </div>

          {/* QUICK LINKS */}
          <div className="swc-footer-column">
            <h3>Explore</h3>

            <Link to="/">Home</Link>
            <Link to="/about">About Us</Link>
            <Link to="/services">Services</Link>
            <Link to="/womens-health">Women's Health</Link>
            <Link to="/reproductive-health">Reproductive Health</Link>
            <Link to="/patient-resources">Patient Resources</Link>
            <Link to="/contact">Contact</Link>
          </div>

          {/* COUNTRY LINKS */}
          <div className="swc-footer-column">
            <h3>Our Locations</h3>

            {footerCountries.map((country) => (
              <div className="swc-footer-country" key={country.name}>
                <Link to={country.path}>{country.name}</Link>

                <a
                  href={getWhatsAppLink(country.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`WhatsApp enquiry for ${country.name}`}
                >
                  <MessageCircle size={14} />
                </a>
              </div>
            ))}
          </div>

          {/* INFORMATION */}
          <div className="swc-footer-column swc-footer-information">
            <h3>Important Information</h3>

            <Link to="/privacy-policy">Privacy Policy</Link>

            <div className="swc-footer-privacy-note">
              <ShieldCheck size={19} />
              <p>
                Please avoid sharing sensitive personal or medical
                information through general website enquiries.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* DISCLAIMER */}
      <div className="swc-footer-disclaimer">
        <div className="swc-footer-container">
          <p>
            Website information is provided for general educational
            purposes and is not a substitute for individual medical
            assessment, diagnosis or treatment. Clinical services, if
            offered, are subject to applicable local laws and
            professional authorization.
          </p>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="swc-footer-bottom">
        <div className="swc-footer-container">
          <p>
            © {currentYear} Sarah's Women's Clinic. All rights reserved.
          </p>

          <div className="swc-footer-bottom-links">
            <Link to="/privacy-policy">Privacy</Link>
            <Link to="/contact">Contact</Link>
            <a href="#home">Back to top ↑</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
