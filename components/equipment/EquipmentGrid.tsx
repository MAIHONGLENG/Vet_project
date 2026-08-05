"use client";

import EquipmentCard from "./EquipmentCard";
import { equipments } from "@/data/equipment";

export default function EquipmentGrid() {
  return (
    <div className="grid grid-cols-3 gap-6 mt-8">
      {equipments.map((item) => (
        <EquipmentCard
          key={item.id}
          id={item.id}
          name={item.name}
          image={item.image}
          status={item.status}
        />
      ))}
    </div>
  );
}