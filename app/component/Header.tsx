"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [nav, setNav] = useState(false);

  return (
    <div className="flex justify-between items-center w-full h-18 px-4 text-white bg-black  nav fixed  top-0 left-0 right-0">
      <div>
        {/* <h1 className="text-5xl font-signature ml-2"><a className="link-underline hover:transition ease-in-out delay-150 hover:underline hover:decoration-solid" href="">Logo</a></h1> */}
        <h1 className="text-3xl font-signature ml-2 p-3">
          <a
            className="link-underline link-underline-black"
            href="/"
            rel="noreferrer"
          >
            Zahurul Blogs
          </a>
        </h1>
      </div>

      <ul className="hidden md:flex">
        <li className="nav-links px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 hover:text-white duration-200 link-underline">
          <Link href={"/"}>Home</Link>
        </li>
        <li className="nav-links px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 hover:text-white duration-200 link-underline">
          <Link href={"/"}>Blogs</Link>
        </li>
        <li className="nav-links px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 hover:text-white duration-200 link-underline">
          <Link href={"/about"}>About</Link>
        </li>
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <div className="bg-gray-500 fixed top-14 right-0  p-6 h-40 md:hidden rounded-b-md">
          <ul className="flex flex-col mx-auto">
            <Link href={"/"} className="mx-auto text-xl ">
              <button onClick={() => setNav(!nav)}>Home</button>
            </Link>
            <Link href={"/"} className="mx-auto text-xl mt-4">
              <button onClick={() => setNav(!nav)}>Blogs</button>
            </Link>
            <Link href={"/about"} className="mx-auto text-xl mt-4">
              <button onClick={() => setNav(!nav)}>About</button>
            </Link>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Header;
