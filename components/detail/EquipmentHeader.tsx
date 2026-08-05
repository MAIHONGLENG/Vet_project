"use client";

import Link from "next/link";

export default function EquipmentHeader() {
  return (
    <div className="mb-8">

      {/* Back Button */}
      <Link
          href="/equipment"
          className="inline-flex items-center gap-2 text-gray-600 transition hover:text-green-700"
        >
          <svg
            width="10"
            height="10"
            viewBox="0 0 10 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 flex-shrink-0"
          >
            <path
              d="M2.23125 5.25L5.49792 8.51667L4.66667 9.33333L0 4.66667L4.66667 0L5.49792 0.816667L2.23125 4.08333H9.33333V5.25H2.23125Z"
              fill="#3F4945"
            />
          </svg>

          <span className="text-lg font-large"> Back</span>
        </Link>

    </div>
  );
}