import MainLayout from "@/components/layout/MainLayout";
import EquipmentHero from "@/components/equipment/EquipmentHero";
import EquipmentSearch from "@/components/equipment/EquipmentSearch";
import CategoryFilter from "@/components/equipment/CategoryFilter";
import EquipmentGrid from "@/components/equipment/EquipmentGrid";

export default function EquipmentPage() {
  return (
    <MainLayout>
      <EquipmentHero />
      <EquipmentSearch />
      <CategoryFilter />
      <EquipmentGrid />
    </MainLayout>
  );
}