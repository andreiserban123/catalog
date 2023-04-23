import { Link } from 'react-router-dom';
import { FaSchool, FaUserGraduate } from 'react-icons/fa';
import { MdContactSupport } from 'react-icons/md';
import { useState } from 'react';
const Header = () => {
  return (
    <nav className="h-screen w-7 md:w-20 border-2 bg-indigo-700  border-indigo-700 border-solid fixed left-0 rounded-br-3xl rounded-tr-3xl">
      <ul className="flex flex-col justify-start space-y-14 mt-5 h-full ">
        <li className="text-center text-xl font-bold transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover: duration-300 ">
          <a
            className="text-white text-center hover: border-b-neutral-200 border-1 border-solid flex flex-col items-center "
            href="/"
          >
            <span className="">Home</span>
            <FaSchool />
          </a>
        </li>
        <li className="text-center text-xl font-bold transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 ">
          <a
            className="text-white flex flex-col justify-center items-center"
            href="/about"
          >
            <div>Profile</div>
            <FaUserGraduate />
          </a>
        </li>
        <li className="text-center text-xl font-bold transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover: duration-300">
          <a
            className="text-white flex flex-col items-center justify-center "
            href="/contact"
          >
            Contact
            <MdContactSupport />
          </a>
        </li>
        <li className="text-center text-xl font-bold fixed bottom-10 left-2 duration-500 hover:-translate-y-1  w-6 h-6 ">
          <Link to="/login" className="text-white">
            <div className="sm:hidden">Logout</div>
            <i className="fa-solid fa-right-from-bracket"></i>
          </Link>
        </li>
      </ul>
    </nav>
  );
};
export default Header;
