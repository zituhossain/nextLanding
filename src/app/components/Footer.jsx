"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Footer = () => {
  return (
    <div className="h-full flex items-center justify-between px-4 sm:px-8 md:px-[200px] bg-[#E6ECEF]">
      {/* Logo */}
      <div className=""></div>
      {/* Text */}
      <div className="flex flex-col gap-4 items-center py-10">
        <p className="text-[#004464] text-center border-b-2 border-[#004464]">
          © 2025 <span className="text-[#F15B2D]">Bulipe Tech Limited</span> all
          rights reserved.
        </p>
        <p className="text-[#848484] text-center">
          The quick brown fox jumps over the lazy dog. The quick brown fox jumps
          over the lazy dog once upon a time. The quick brown fox jumps over the
          lazy dog. The quick brown fox jumps over the lazy dog once upon a
          time. The quick brown fox jumps over the lazy dog. The lazy dog once
          upon a time. The quick brown fox jumps over the lazy dog. The quick
          brown fox jumps over the lazy dog once upon a time.{" "}
        </p>
      </div>

      {/* Sign Up */}
      <div className="hidden md:flex gap-4"></div>
    </div>
  );
};

export default Footer;
