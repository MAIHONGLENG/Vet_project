"use client";

import { Search } from "lucide-react";

export default function EquipmentSearch() {
  return (
    <div className="relative my-8">
      <Search
        className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
        size={20}
      />

      <input
        type="text"
        placeholder="Search equipment..."
        className="w-full rounded-xl border border-gray-300 bg-white py-3 pl-12 pr-4 outline-none focus:ring-2 focus:ring-green-600"
      />
    </div>
  );
}