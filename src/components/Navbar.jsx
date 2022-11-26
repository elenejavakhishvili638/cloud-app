import React, { useState } from "react";
import { HiMenu } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import { Link, animateScroll as scroll } from "react-scroll";

const Navbar = () => {
  const [select, setSelect] = useState(false);

  return (
    <div className="w-screen h-[80px] z-10 bg-zinc-200 fixed drop-shadow-lg">
      <div className="px-2 flex justify-between items-center w-full h-full">
        <div className="flex items-center">
          <h1 className="text-3xl font-bold mr-4 sm:text-4xl">Brand.</h1>
          <ul className="hidden md:flex">
            <li>
              <Link to="home" smooth={true} duration={500}>
                Home
              </Link>
            </li>
            <li>
              <Link to="about" smooth={true} offset={-200} duration={500}>
                About
              </Link>
            </li>
            <li>
              <Link to="support" smooth={true} offset={-50} duration={500}>
                Support
              </Link>
            </li>
            <li>
              <Link to="platforms" smooth={true} offset={-100} duration={500}>
                Platforms
              </Link>
            </li>
            <li>
              <Link to="pricing" smooth={true} offset={-50} duration={500}>
                Pricing
              </Link>
            </li>
          </ul>
        </div>
        <div className="hidden md:flex pr-4">
          <button className="pr-3 border-none bg-transparent text-black">
            sign in
          </button>
          <button className="px-8 py-3">sign up</button>
        </div>
        <div className="md:hidden">
          {select ? (
            <IoMdClose
              className="text-red-800 w-30"
              onClick={() => setSelect(false)}
            />
          ) : (
            <HiMenu className="w-5" onClick={() => setSelect(true)} />
          )}
        </div>
      </div>
      {select && (
        <ul className="bg-zinc-200 px-8 transition-all">
          <li className="border-b-2 border-zinc-300 w-full">
            <Link
              onClick={() => setSelect(false)}
              to="home"
              smooth={true}
              duration={500}
            >
              Home
            </Link>
          </li>
          <li className="border-b-2 border-zinc-300 w-full">
            <Link
              onClick={() => setSelect(false)}
              to="about"
              smooth={true}
              offset={-200}
              duration={500}
            >
              About
            </Link>
          </li>
          <li className="border-b-2 border-zinc-300 w-full">
            <Link
              onClick={() => setSelect(false)}
              to="support"
              smooth={true}
              offset={-50}
              duration={500}
            >
              Support
            </Link>
          </li>
          <li className="border-b-2 border-zinc-300 w-full">
            <Link
              onClick={() => setSelect(false)}
              to="platforms"
              smooth={true}
              offset={-100}
              duration={500}
            >
              Platforms
            </Link>
          </li>
          <li className="border-b-2 border-zinc-300 w-full">
            <Link
              onClick={() => setSelect(false)}
              to="pricing"
              smooth={true}
              offset={-50}
              duration={500}
            >
              Pricing
            </Link>
          </li>
          <div className="flex flex-col py-4">
            <button className="bg-transparent text-indigo-600 px-8 py-3 mb-4">
              sign in
            </button>
            <button className="px-8 py-3">sign up</button>
          </div>
        </ul>
      )}
    </div>
  );
};

export default Navbar;
