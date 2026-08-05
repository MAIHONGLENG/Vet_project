"use client";

import Image from "next/image";
import Link from "next/link";

interface EquipmentCardProps {
  id: number;
  name: string;
  image: string;
  status: string;
}

export default function EquipmentCard({
  id,
  name,
  image,
  status,
}: EquipmentCardProps) {
  return (
    <div className="overflow-hidden rounded-2xl bg-white shadow transition hover:shadow-lg">
      {/* Equipment Image */}
      <div className="relative">
        <Image
          src={image}
          alt={name}
          width={400}
          height={220}
          className="h-52 w-full object-cover"
        />

        {/* Status Badge */}
        <span
          className={`absolute right-4 top-4 rounded-full px-3 py-1 text-sm font-medium text-white ${
            status === "Available"
              ? "bg-green-700"
              : "bg-red-600"
          }`}
        >
          {status}
        </span>
      </div>

      {/* Content */}
      <div className="p-5">
        <h2 className="text-xl font-semibold">{name}</h2>

        <p className="mt-2 text-gray-500">
          Equipment description will appear here.
        </p>

        <Link
          href={`/equipment/${id}`}
          className="mt-5 block w-full rounded-xl bg-green-700 py-3 text-center text-white transition hover:bg-green-800"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}