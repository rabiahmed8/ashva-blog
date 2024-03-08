"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";

const Navbar = () => {
  const [linkClass, setLinkClass] = useState("/#home");
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: "home",
      href: "/#home",
    },
    {
      id: 2,
      link: "about",
      href: "/#about",
    },
    {
      id: 3,
      link: "blog",
      href: "/blog",
    },
    {
      id: 4,
      link: "contact",
      href: "/#contact",
    },
  ];

  return (
    <div className="nav fixed z-[9999] flex h-20 w-full items-center justify-between bg-white px-40 py-5 text-black max-[1440px]:px-20 max-[1024px]:px-4">
      <div>
        <div className="flex items-center">
          <div
            onClick={() => setNav(!nav)}
            className="z-10 cursor-pointer pr-4 text-gray-500 md:hidden"
          >
            {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
          </div>

          {nav && (
            <ul className="absolute left-[20px] top-[70px] flex  flex-col items-center justify-center rounded-lg bg-black text-white">
              {links.map(({ id, link, href }) => (
                <li
                  key={id}
                  className="cursor-pointer px-4 py-6 text-xl font-medium capitalize"
                  // onClick={() => handleClick(link)}
                >
                  <Link onClick={() => setNav(!nav)} href={href}>
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
          <h2 className="ml-8 text-4xl font-bold max-[570px]:hidden">Ashva</h2>
        </div>
      </div>

      <ul className="hidden md:flex">
        {links.map(({ id, link, href }) => (
          <li
            key={id}
            className="nav-links link-underline cursor-pointer px-4 font-medium capitalize text-gray-500 duration-200 hover:scale-105 hover:text-black"
          >
            <Link
              onClick={() => setLinkClass(`${href}`)}
              className={`${
                linkClass == href ? "text-black" : "text-[#8C8C8C]"
              }`}
              href={href}
            >
              {link}
            </Link>
          </li>
        ))}
      </ul>

      <Link href={"/#contact"} className="">
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
          className="cursor-pointer rounded-[20px] bg-black px-5 py-4 text-white hover:bg-[#383838]"
        >
          Share Your Initiative
        </motion.div>
      </Link>
    </div>
  );
};

export default Navbar;
