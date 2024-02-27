"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode, createContext, useRef } from "react";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const pathname = usePathname();
  console.log(pathname)

  const [linkClass,setLinkClass]=useState('/#home')

  const scrollToRef = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      window.scrollTo({
        top: ref.current.offsetTop,
        behavior: "smooth",
      });
    }
  };

  // const handleClick = (link: string) => {
  //   switch (link) {
  //     case 'home':
  //       scrollToRef(homeRef);
  //       break;
  //     case 'about':
  //       scrollToRef(aboutRef);
  //       break;
  //     case 'contact':
  //       scrollToRef(contactRef);
  //       break;
  //     default:
  //       break;
  //   }
  // };

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
            <ul className="flex flex-col justify-center items-center  text-white absolute top-[70px] left-[20px] bg-black rounded-lg">
              {links.map(({ id, link, href }) => (
                <li
                  key={id}
                  className="px-4 cursor-pointer capitalize py-6 font-medium text-xl"
                  // onClick={() => handleClick(link)}
                >
                  <Link
                    onClick={() => setNav(!nav)}
                    href={href}
                  >
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
        {links.map(({ id, link, href }) => (
          <li
            key={id}
            className="nav-links px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 hover:text-black duration-200 link-underline"
          >
            <Link
            onClick={()=>setLinkClass(`${href}`)}
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

      <Link
        href={"#contact"}
        className="bg-black text-white px-5 py-4 rounded-[20px] cursor-pointer"
      >
        Share Your Initiative
      </Link>
    </div>
  );
};

export default Navbar;
