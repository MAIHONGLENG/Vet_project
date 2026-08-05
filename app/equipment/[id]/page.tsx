import MainLayout from "@/components/layout/MainLayout";
import EquipmentHeader from "@/components/detail/EquipmentHeader";
import HeroSection from "@/components/detail/HeroSection";

export default function EquipmentDetailPage() {
  return (
    <MainLayout>
      <div className="grid grid-cols-8 gap-8">

        {/* Left Side */}
        <div className="col-span-8 space-y-8">

          <EquipmentHeader />

          <HeroSection />

          {/* Later */}
          {/* <BookingForm /> */}
          {/* <QuickGuide /> */}
          {/* <ProtectionCard /> */}

        </div>

        {/* Right Side */}
        <div className="col-span-4">

          {/* Later */}
          {/* <BookingCard /> */}

        </div>

      </div>
    </MainLayout>
  );
}