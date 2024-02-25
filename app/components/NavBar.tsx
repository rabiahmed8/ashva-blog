"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "blog",
    },
    {
      id: 4,
      link: "contact",
    },
  ];

  return (
    <div className="z-[9999] flex justify-between items-center py-5 px-40 max-[1440px]:px-20 max-[1024px]:px-4 w-full h-20 text-black bg-white fixed nav">
      <div>
        <div className="flex items-center">
        <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl"
            >
              <Link onClick={() => setNav(!nav)} href={link}>
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
          <Image
            src="logo-favicon.svg"
            alt="Ashva Logo"
            width={40}
            height={40}
          />
          <h2 className="font-bold ml-8 text-4xl max-[570px]:hidden">Ashva</h2>
        </div>
      </div>

      <ul className="hidden md:flex">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="nav-links px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 hover:text-black duration-200 link-underline"
          >
            <Link href={link}>{link}</Link>
          </li>
        ))}
      </ul>

      <div className="bg-black text-white px-5 py-4 rounded-[20px] cursor-pointer">
        Share Your Initiative
      </div>
    </div>
  );
};

export default Navbar;
