import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { close, logo, menu } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const location = useLocation();

  const isBlogPage = location.pathname === "/blog";

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="Logo" className="w-9 h-9 object-contain" />
          <p className="text-white text-[18px] font-bold flex">
            Sujay P V &nbsp;
            <span className="sm:block hidden">| &nbsp; Full Stack Dev</span>
          </p>
        </Link>

        {/* Desktop Menu */}
        <ul className="list-none hidden sm:flex flex-row gap-10 items-center">
          {/* Scroll Links (Only on Home) */}
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] cursor-pointer`}
              onClick={() => setActive(link.title)}
            >
              <a href={isBlogPage ? `/#${link.id}` : `#${link.id}`}>{link.title}</a>
            </li>
          ))}

          {/* Blog Route Link */}
          <li
            className={`${
              isBlogPage ? "text-white" : "text-secondary"
            } hover:text-white text-[18px] cursor-pointer`}
          >
            <Link to="/blog">Blog</Link>
          </li>
        </ul>

        {/* Mobile Menu */}
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="Menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-col gap-4">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className="text-secondary hover:text-white font-medium text-[16px] cursor-pointer"
                  onClick={() => {
                    setToggle(false);
                    setActive(link.title);
                  }}
                >
                  <a href={isBlogPage ? `/#${link.id}` : `#${link.id}`}>{link.title}</a>
                </li>
              ))}

              <li
                className="text-secondary hover:text-white font-medium text-[16px] cursor-pointer"
                onClick={() => setToggle(false)}
              >
                <Link to="/blog">Blog</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
