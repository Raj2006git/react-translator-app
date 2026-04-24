import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#101828] backdrop-blur-xl px-4 md:px-12 py-4 shadow-[0_20px_50px_rgba(91,244,222,0.1)]">

      <div className="flex justify-between items-center">

        {/* LOGO */}
        <NavLink to="/" className="text-xl md:text-2xl font-black text-[#5bf4de]">
          LEXICON
        </NavLink>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex gap-10">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-[#5bf4de] border-b-2 border-[#5bf4de]"
                : "text-slate-400 hover:text-[#5bf4de]"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/translator"
            className={({ isActive }) =>
              isActive
                ? "text-[#5bf4de] border-b-2 border-[#5bf4de]"
                : "text-slate-400 hover:text-[#5bf4de]"
            }
          >
            Translate
          </NavLink>
        </div>

        {/* RIGHT SIDE */}
        <div className="hidden md:flex items-center gap-6">
          <NavLink to="/login" className="text-slate-400 hover:text-[#5bf4de]">
            Login
          </NavLink>

          <NavLink
            to="/signup"
            className="bg-[#5bf4de] px-4 py-2 rounded-lg font-bold"
          >
            Sign Up
          </NavLink>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="mt-4 flex flex-col gap-4 md:hidden text-center">

          <NavLink
            to="/"
            onClick={() => setIsOpen(false)}
            className="text-slate-400 hover:text-[#5bf4de]"
          >
            Home
          </NavLink>

          <NavLink
            to="/translator"
            onClick={() => setIsOpen(false)}
            className="text-slate-400 hover:text-[#5bf4de]"
          >
            Translate
          </NavLink>

          <NavLink
            to="/login"
            onClick={() => setIsOpen(false)}
            className="text-slate-400 hover:text-[#5bf4de]"
          >
            Login
          </NavLink>

          <NavLink
            to="/signup"
            onClick={() => setIsOpen(false)}
            className="bg-[#5bf4de] py-2 rounded-lg"
          >
            Sign Up
          </NavLink>
        </div>
      )}
    </nav>
  );
};

export default Navbar;