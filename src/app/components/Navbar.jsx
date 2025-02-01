"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const links = [
  { url: "/", title: "HOME" },
  { url: "/about", title: "ABOUT US" },
  { url: "/program", title: "PROGRAMS" },
  { url: "/location", title: "LOCATIONS" },
  { url: "/career", title: "CAREER & PLACEMENT" },
  { url: "/contact", title: "CONTACT US" },
];

const navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="h-full flex items-center justify-between px-4 sm:px-8 md:px-[200px] bg-[#F2F2F2]">
      {/* Logo */}
      <div className="">
        <Link href="/">
          {/* Image */}
          <div className="">
            <Image
              src="/bulipe.svg"
              alt="bulipe"
              className="object-cover rounded-lg"
              width={173}
              height={100}
            />
          </div>
        </Link>
      </div>
      {/* Links */}
      <div className="hidden md:flex gap-4 text-[#004464] font-semibold">
        {links.map((link) => (
          <Link href={link.url} key={link.title}>
            {link.title}
          </Link>
        ))}
      </div>

      {/* Sign Up */}
      <div className="hidden md:flex gap-4">
        <button className="px-[20px] py-[10px] rounded-[24px] bg-[#F15B2D] text-white hover:bg-gray-800 flex items-center gap-2">
          Sign Up
          <Image src="/signup.svg" alt="signup" width={18} height={18} />
        </button>
      </div>

      {/* Menu */}
      <div className="md:hidden">
        {/* Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="w-10 h-10 flex flex-col justify-between z-50 relative"
        >
          <div className="w-10 h-1 bg-black rounded"></div>
          <div className="w-10 h-1 bg-black rounded"></div>
          <div className="w-10 h-1 bg-black rounded"></div>
        </button>
        {/* Menu Items */}
        {open && (
          <div className="absolute top-0 left-0 w-screen h-screen bg-blue-100 flex flex-col items-center justify-center gap-8 text-4xl">
            {links.map((link) => (
              <Link href={link.url} key={link.title}>
                {link.title}
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default navbar;
