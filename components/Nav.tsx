"use client";
import React from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";

const Nav = () => {
  const pathname = usePathname();

  const navLinks = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "About",
      link: "#about",
    },
    {
      name: "Blog",
      link: "/blog",
    },
    {
      name: "Contact",
      link: "#contact",
    },
  ];

  return (
    <div className="flex flex-row py-10 px-40 items-center justify-between">
      <div className="flex items-center">
        <Image src="logo-favicon.svg" alt="Ashva Logo" width={40} height={40} />
        <h2 className="font-bold ml-8 text-4xl">Ashva</h2>
      </div>

      <div className="flex gap-10">
        {navLinks.map(({ name, link }) => (
          <Link
            key={name}
            href={link}
            className={`${pathname == link ? "text-black" : "text-[#8C8C8C] "} text-xl`}
          >
            {name}
          </Link>
        ))}
      </div>

      <div className="bg-black text-white px-5 py-4 rounded-[20px]">
        Share Your Initiative
      </div>
    </div>
  );
};

export default Nav;
