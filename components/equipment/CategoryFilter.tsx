"use client";

export default function CategoryFilter() {
  return (
    <div className="flex gap-3 mb-8 overflow-x-auto">
      <button className="px-5 py-2 rounded-full bg-green-700 text-white">
        All
      </button>

      <button className="px-5 py-2 rounded-full bg-white border hover:bg-gray-100">
        Diagnostic
      </button>

      <button className="px-5 py-2 rounded-full bg-white border hover:bg-gray-100">
        Surgical
      </button>

      <button className="px-5 py-2 rounded-full bg-white border hover:bg-gray-100">
        Therapeutic
      </button>

    </div>
  );
}