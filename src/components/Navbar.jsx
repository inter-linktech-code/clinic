
import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

import {
  Heart,
  Menu,
  X,
  ChevronDown,
  ArrowUpRight,
  MessageCircle,
} from "lucide-react";

import LanguageSwitcher from "./LanguageSwitcher";
import { getWhatsAppLink } from "./WhatsAppButton";

import "./Navbar.css";

const countries = [
  {
    name: "Bahrain",
    path: "/bahrain",
    description: "Women's health information",
    message: "Bahrain",
  },
  {
    name: "UAE",
    path: "/uae",
    description: "Women's health information",
    message: "UAE",
  },
  {
    name: "Dubai",
    path: "/dubai",
    description: "Women's health information",
    message: "Dubai",
  },
  {
    name: "Qatar",
    path: "/qatar",
    description: "Women's health information",
    message: "Qatar",
  },
];

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const navbarRef = useRef(null);
  const location = useLocation();

  const closeNavigation = () => {
    setMobileOpen(false);
    setOpenDropdown(null);
  };

  const toggleDropdown = (country) => {
    setOpenDropdown((current) => (current === country ? null : country));
  };

  useEffect(() => {
    closeNavigation();
  }, [location.pathname]);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        navbarRef.current &&
        !navbarRef.current.contains(event.target)
      ) {
        setOpenDropdown(null);
        setMobileOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <header className="swc-navbar" ref={navbarRef}>
      <div className="swc-navbar-container">
        {/* BRAND */}
        <Link
          to="/"
          className="swc-navbar-brand"
          onClick={closeNavigation}
          aria-label="Sarah's Women's Clinic homepage"
        >
          <span className="swc-navbar-brand-icon">
            <Heart size={25} strokeWidth={1.5} />
          </span>

          <span className="swc-navbar-brand-text">
            <strong>SARAH'S</strong>
            <small>WOMEN'S CLINIC</small>
          </span>
        </Link>

        {/* MOBILE MENU BUTTON */}
        <button
          type="button"
          className="swc-navbar-mobile-toggle"
          onClick={() => setMobileOpen((current) => !current)}
          aria-label={mobileOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={25} /> : <Menu size={25} />}
        </button>

        {/* NAVIGATION */}
        <nav
          className={`swc-navbar-navigation ${
            mobileOpen ? "swc-navbar-navigation-open" : ""
          }`}
          aria-label="Main navigation"
        >
          <div className="swc-navbar-links">
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `swc-navbar-link ${isActive ? "active" : ""}`
              }
              onClick={closeNavigation}
            >
              Home
            </NavLink>

            <NavLink
              to="/about"
              className={({ isActive }) =>
                `swc-navbar-link ${isActive ? "active" : ""}`
              }
              onClick={closeNavigation}
            >
              About
            </NavLink>

            <NavLink
              to="/services"
              className={({ isActive }) =>
                `swc-navbar-link ${isActive ? "active" : ""}`
              }
              onClick={closeNavigation}
            >
              Services
            </NavLink>

            <NavLink
              to="/womens-health"
              className={({ isActive }) =>
                `swc-navbar-link ${isActive ? "active" : ""}`
              }
              onClick={closeNavigation}
            >
              Women's Health
            </NavLink>

            <NavLink
              to="/reproductive-health"
              className={({ isActive }) =>
                `swc-navbar-link ${isActive ? "active" : ""}`
              }
              onClick={closeNavigation}
            >
              Reproductive Health
            </NavLink>

            <NavLink
              to="/patient-resources"
              className={({ isActive }) =>
                `swc-navbar-link ${isActive ? "active" : ""}`
              }
              onClick={closeNavigation}
            >
              Resources
            </NavLink>

            {/* FOUR INDEPENDENT COUNTRY DROPDOWNS */}
            {countries.map((country) => (
              <div
                className={`swc-country-dropdown ${
                  openDropdown === country.name ? "dropdown-open" : ""
                }`}
                key={country.name}
              >
                <button
                  type="button"
                  className="swc-country-dropdown-trigger"
                  onClick={() => toggleDropdown(country.name)}
                  aria-expanded={openDropdown === country.name}
                  aria-haspopup="true"
                >
                  {country.name}
                  <ChevronDown size={15} />
                </button>

                <div className="swc-country-dropdown-menu">
                  <div className="swc-country-dropdown-heading">
                    <span>EXPLORE</span>
                    <strong>{country.name}</strong>
                    <small>{country.description}</small>
                  </div>

                  <Link
                    to={country.path}
                    className="swc-country-dropdown-item"
                    onClick={closeNavigation}
                  >
                    <span>
                      <strong>{country.name} Overview</strong>
                      <small>Explore our {country.name} information</small>
                    </span>
                    <ArrowUpRight size={17} />
                  </Link>

                  <Link
                    to={`${country.path}#womens-health`}
                    className="swc-country-dropdown-item"
                    onClick={closeNavigation}
                  >
                    <span>
                      <strong>Women's Health</strong>
                      <small>Read relevant health information</small>
                    </span>
                    <ArrowUpRight size={17} />
                  </Link>

                  <a
                    href={getWhatsAppLink(country.message)}
                    className="swc-country-dropdown-whatsapp"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={closeNavigation}
                  >
                    <MessageCircle size={17} />
                    WhatsApp {country.name}
                    <ArrowUpRight size={16} />
                  </a>
                </div>
              </div>
            ))}

            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `swc-navbar-link ${isActive ? "active" : ""}`
              }
              onClick={closeNavigation}
            >
              Contact
            </NavLink>
          </div>

          {/* RIGHT SIDE ACTIONS */}
          <div className="swc-navbar-actions">
            <LanguageSwitcher />

            <a
              href={getWhatsAppLink()}
              className="swc-navbar-contact"
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeNavigation}
            >
              <MessageCircle size={17} />
              <span>WhatsApp</span>
              <ArrowUpRight size={15} />
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
