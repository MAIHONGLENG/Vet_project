"use client";

import Image from "next/image";
import {Bell,
  CircleHelp,
  Search,
} from "lucide-react";

export default function Navbar() {
  return (
    <header className="bg-white border-b h-20 flex items-center justify-between px-8">

      {/* Search */}

      <div className="relative w-[420px]">

        <Search
          className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
          size={18}
        />

        <input
          placeholder="Search equipment..."
          className="w-full rounded-full bg-gray-100 py-3 pl-11 pr-4 outline-none"
        />

      </div>

      {/* Right */}

      <div className="flex items-center gap-6">

        <Bell className="cursor-pointer" />

        <CircleHelp className="cursor-pointer" />

        <div className="flex items-center gap-3">

          <Image
            src="/logo.png"
            alt="logo"
            width={40}
            height={40}
          />

          <span className="font-medium">
            Dr. Smith
          </span>

        </div>

      </div>

    </header>
  );
}