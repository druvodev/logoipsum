import { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
import { HiMiniBars3 } from "react-icons/hi2";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import logo from "../../assets/icon/blackLogo.png";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // toggle navbar button for mobile devices
  const isMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="absolute sm:hidden left-2 top-1 z-50" onClick={isMenu}>
        {isMenuOpen ? (
          <AiOutlineClose className="h-10 w-10" />
        ) : (
          <HiMiniBars3 className="h-10 w-10" />
        )}
      </div>
      <nav
        className={`${
          isMenuOpen
            ? "bg-white"
            : "bg-white/10 backdrop-filter backdrop-blur-md "
        } flex flex-col sm:flex-row justify-between items-center gap-3 py-3 px-5 sm:px-12 xl:px-primary absolute sm:sticky sm:top-0 sm:rounded-none z-50 ${
          isMenuOpen
            ? "left-1 top-10 rounded-2xl duration-500 shadow-custom"
            : "-left-64"
        }`}
      >
        <div className="flex items-center gap-8 font-poppins">
          <Link to={"/"} onClick={isMenu} className="hidden sm:block">
            <img src={logo} alt="logoipsum" />
          </Link>
          <ul className="flex flex-col sm:flex-row gap-5 sm:gap-6 text-lg font-bold">
            <li onClick={isMenu} className="flex items-center">
              Solutions{" "}
              <MdOutlineKeyboardArrowDown className="text-xl text-primary" />
            </li>
            <li onClick={isMenu} className="flex items-center">
              Features
              <MdOutlineKeyboardArrowDown className="text-xl text-primary" />
            </li>
            <li onClick={isMenu}>Blogs</li>
            <li onClick={isMenu} className="flex items-center">
              About
              <MdOutlineKeyboardArrowDown className="text-xl text-primary" />
            </li>
          </ul>
        </div>
        <div className="text-base flex gap-4">
          <Link to={"/"}>
            <button
              className="px-5 py-2 border-[1.5px] border-primary text-primary rounded-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              Login
            </button>
          </Link>
          <Link to={"/"}>
            <button
              className="px-5 py-2 border-[1.5px] border-primary text-white bg-primary rounded-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              Register
            </button>
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
