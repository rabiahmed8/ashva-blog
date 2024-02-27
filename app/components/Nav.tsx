// "use client";
// import React from "react";
// import Image from "next/image";
// import { usePathname } from "next/navigation";
// import Link from "next/link";

// export interface MenuItem {
//   title: string;
//   route?: string;
//   children?: MenuItem[];
// }

// const menuItems: MenuItem[] = [
//   {
//     title: "Home",
//     route: "/",
//   },
//   {
//     title: "Products",
//     children: [
//       {
//         title: "Hinkle Horns",
//         route: "/products/hinkle-horns",
//       },
//       {
//         title: "Doozers",
//         route: "/products/doozers",
//       },
//       {
//         title: "Zizzer-zazzers",
//         route: "/products/zizzer-zazzers",
//       },
//     ],
//   },
// ];

// const Nav = () => {
//   const pathname = usePathname();

//   const navLinks = [
//     {
//       name: "Home",
//       link: "/",
//     },
//     {
//       name: "About",
//       link: "#about",
//     },
//     {
//       name: "Blog",
//       link: "/blog",
//     },
//     {
//       name: "Contact",
//       link: "#contact",
//     },
//   ];

//           // <button
//           //   id="dropdownDefaultButton"
//           //   data-dropdown-toggle="dropdown"
//           //   className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
//           //   type="button"
//           // >
//           //   Dropdown button{" "}
//           //   <svg
//           //     className="w-2.5 h-2.5 ms-3"
//           //     aria-hidden="true"
//           //     xmlns="http://www.w3.org/2000/svg"
//           //     fill="none"
//           //     viewBox="0 0 10 6"
//           //   >
//           //     <path
//           //       stroke="currentColor"
//           //       stroke-linecap="round"
//           //       stroke-linejoin="round"
//           //       stroke-width="2"
//           //       d="m1 1 4 4 4-4"
//           //     />
//           //   </svg>
//           // </button>

//           // <div
//           //   id="dropdown"
//           //   className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
//           // >
//           //   <ul
//           //     className="py-2 text-sm text-gray-700 dark:text-gray-200"
//           //     aria-labelledby="dropdownDefaultButton"
//           //   >
//           //     <li>
//           //       <a
//           //         href="#"
//           //         className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
//           //       >
//           //         Dashboard
//           //       </a>
//           //     </li>
//           //     <li>
//           //       <a
//           //         href="#"
//           //         className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
//           //       >
//           //         Settings
//           //       </a>
//           //     </li>
//           //     <li>
//           //       <a
//           //         href="#"
//           //         className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
//           //       >
//           //         Earnings
//           //       </a>
//           //     </li>
//           //     <li>
//           //       <a
//           //         href="#"
//           //         className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
//           //       >
//           //         Sign out
//           //       </a>
//           //     </li>
//           //   </ul>
//           // </div>
//           // <svg
//           //   className="w-5 h-5"
//           //   aria-hidden="true"
//           //   xmlns="http://www.w3.org/2000/svg"
//           //   fill="none"
//           //   viewBox="0 0 17 14"
//           // >
//           //   <path
//           //     stroke="currentColor"
//           //     stroke-linecap="round"
//           //     stroke-linejoin="round"
//           //     stroke-width="2"
//           //     d="M1 1h15M1 7h15M1 13h15"
//           //   />
//           // </svg>

//   return (
//     <div className="fixed w-full">
//       <div className="flex flex-row py-5 px-40 max-[1440px]:px-20 max-[1024px]:px-4 items-center justify-between bg-[#ffffff]">
//         <div className="flex items-center gap-4">

//           <Image
//             src="logo-favicon.svg"
//             alt="Ashva Logo"
//             width={40}
//             height={40}
//           />
//           <h2 className="font-bold ml-8 text-4xl">Ashva</h2>
//         </div>

//         <div className="flex gap-10">
//           {navLinks.map(({ name, link }) => (
//             <Link
//               key={name}
//               href={link}
//               className={`${
//                 pathname == link ? "text-black" : "text-[#8C8C8C] "
//               } text-xl`}
//             >
//               {name}
//             </Link>
//           ))}
//         </div>

//         <div className="bg-black text-white px-5 py-4 rounded-[20px] cursor-pointer">
//           Share Your Initiative
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Nav;