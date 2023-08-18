import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
const base = "/portfolio";

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  const navLinks = [
    { path: `${base}/`, text: "Home" },
    { path: `${base}/education`, text: "Education" },
    { path: `${base}/project`, text: "Project" },
  ];

  return (
    <header className="group fixed top-0 left-0 right-0 z-10 flex items-center justify-between px-7 py-5 bg-gradient-to-r from-green-600 via-green-700 to-green-800 text-white shadow-lg md:px-10 lg:px-32">
      <div className="flex items-center gap-2">
        <a href="#" className="font-bold text-lg md:inline lg:text-xl">
          Dhillen
        </a>
      </div>
      <nav className="hidden md:flex">
        <ul className="flex space-x-8 font-semibold">
          {navLinks.map((link) => (
            <li key={link.path} className="group">
              <a
                onClick={() => {
                  navigate(link.path);
                }}
                className={`group/a cursor-pointer relative pb-1 hover:font-bold`}
              >
                {link.text}
                <span
                  className={`absolute left-0 bottom-0 w-full h-0.5 bg-slate-50 transform origin-bottom-left transition-transform duration-300 group-hover/a:scale-x-100 ${
                    isActive(link.path) ? "scale-x-100" : "scale-x-0"
                  }`}
                ></span>
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* <!-- Hamburger menu for small screens --> */}
      <div className="md:hidden relative">
        <button
          id="hamburgerButton"
          className={`text-white focus:outline-none transition-transform ${
            menuOpen ? "shadow-xl p-1 bg-green-900" : ""
          }`}
          onClick={toggleMenu}
        >
          <div className="w-6 h-[3px] bg-white"></div>
          <div className="w-6 h-[3px] mt-1 bg-white"></div>
          <div className="w-6 h-[3px] mt-1 bg-white"></div>
        </button>
        <div
          id="dropdownMenu"
          className={`${
            menuOpen ? "" : "hidden"
          } absolute bg-green-100 mt-2 w-56 py-2 rounded-md shadow-lg right-0 top-4`}
        >
          {navLinks.map((link) => (
            <a
              key={link.path}
              href={link.path}
              className={`block px-4 py-2 text-slate-800 hover:bg-slate-100 border-b-green-500 cursor-pointer pb-1 w-auto transition duration-500 ${
                isActive(link.path) ? "inline-block border-b " : "border-b-0"
              } hover:font-bold hover:block hover:border-b`}
            >
              {link.text}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}
