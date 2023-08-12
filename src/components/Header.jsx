import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const isActive = (path) => {
    console.log("path: ", location.pathname);
    return location.pathname === path;
  };

  return (
    <header className="group fixed top-0 left-0 right-0 z-10 flex items-center justify-between px-7 py-5 bg-gradient-to-r from-green-600 via-green-700 to-green-800 text-white shadow-lg md:px-10 lg:px-32">
      <div className="flex items-center gap-2">
        <a href="#" className="font-bold text-lg md:inline lg:text-xl">
          Dhillen
        </a>
      </div>
      <nav className="hidden md:flex">
        <ul className="flex space-x-8 font-semibold">
          <li>
            <a
              onClick={() => {
                navigate(`/`);
              }}
              className={`cursor-pointer pb-1  ${
                isActive("/") ? "border-b" : "border-b-0"
              } hover:font-bold hover:border-b`}
            >
              Home
            </a>
          </li>
          <li>
            <a
              onClick={() => {
                navigate(`/education`);
              }}
              className={`cursor-pointer pb-1  ${
                isActive("/education") ? "border-b" : "border-b-0"
              } hover:font-bold hover:border-b`}
            >
              Education
            </a>
          </li>
          <li>
            <a
              onClick={() => {
                navigate(`/project`);
              }}
              className={`cursor-pointer pb-1  ${
                isActive("/project") ? "border-b" : "border-b-0"
              } hover:font-bold hover:border-b`}
            >
              Project
            </a>
          </li>
        </ul>
      </nav>
      {/* <!-- Hamburger menu for small screens --> */}
      <div className="md:hidden relative">
        <button
          id="hamburgerButton"
          className="text-white focus:outline-none transition-transform"
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
          <a
            href="#"
            className="block px-4 py-2 text-gray-800 hover:bg-gray-100 border-b border-green-600 pb-1 hover:font-bold hover:border-b"
          >
            Home
          </a>
          <a
            href="./education.html"
            className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
          >
            Education
          </a>
          <a
            href="./project.html"
            className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
          >
            Project
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
          >
            Resume
          </a>
        </div>
      </div>
    </header>
  );
}
