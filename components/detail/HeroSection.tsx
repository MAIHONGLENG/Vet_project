"use client";

import Image from "next/image";

export default function HeroSection() {
  const specs = [
    {
      title: "Tub Material",
      value: "Polyethylene",
    },
    {
      title: "Tub Capacity",
      value: "16 cu. ft",
    },
    {
      title: "Fuel Tank",
      value: "5 Gal",
    },
    {
      title: "Engine",
      value: "22HP Honda GX690",
    },
  ];

  const dimensions = [
    {
      label: "Length",
      value: "90.5 in",
    },
    {
      label: "Width",
      value: "35.50 in",
    },
    {
      label: "Height",
      value: "56.50 in",
    },
    {
      label: "Operating Weight",
      value: "1896.00 lbs",
    },
  ];

  return (
    <div className="w-full rounded-2xl border border-gray-200 bg-white p-12 shadow-sm">

      <div className="grid grid-cols-[58%_42%] gap-8">

        {/* LEFT */}
        <div>

        {/* Image */}
        <div className="rounded-xl border border-gray-300 bg-[#F8FAFF] p-10">

            <div className="relative h-[460px] w-full">

            <Image
                src="/image/equipment_detail/eq1.png"
                alt="Equipment"
                fill
                className="object-contain"
            />

            </div>

        </div>

        {/* Equipment Information */}
        <div className="mt-10">

            <h1 className="text-[58px] font-extrabold uppercase leading-[0.95] text-[#1F2937]">
            WHITEMAN WTB16
            <br />
            CONCRETE BUGGY
            </h1>

            <div className="mt-8 flex items-end gap-4">

            <div>

                <p className="text-base text-gray-500">
                Starting From
                </p>

                <p className="text-[42px] font-bold text-[#006C4C] leading-none">
                $200.00
                </p>

            </div>

            <p className="mb-2 text-base uppercase tracking-wide text-gray-600">
                CALL FOR WEEKLY AND MONTHLY PRICING
            </p>

            </div>

            <div className="mt-8 border-b border-gray-300"></div>

        </div>

        </div>
        

        {/* RIGHT */}
        <div className="pl-4">

          {/* Technical Specifications */}
          <h2 className="mb-8 text-[18px] font-bold uppercase tracking-wide">
            Technical Specifications
          </h2>

          <div className="space-y-6">

            {specs.map((item) => (

              <div
                key={item.title}
                className="flex items-center"
              >

                <div className="flex w-[270px] items-center gap-3">

                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 22 22"
                    fill="none"
                  >
                    <circle
                      cx="11"
                      cy="11"
                      r="9"
                      stroke="#006C4C"
                      strokeWidth="2"
                    />

                    <path
                      d="M7 11.5L9.5 14L15 8.5"
                      stroke="#006C4C"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>

                  <span className="text-[18px] font-medium text-[#1F2937]">
                    {item.title}:
                  </span>

                </div>

                <span className="text-[18px] text-[#4B5563]">
                  {item.value}
                </span>

              </div>

            ))}

          </div>

          {/* Dimensions */}
          <h2 className="mt-10 mb-6 text-[18px] font-bold uppercase tracking-wide">
            Dimensions
          </h2>

          <div className="grid grid-cols-2 gap-12">

            {dimensions.map((item) => (

              <div
                key={item.label}
                className="rounded-xl border border-gray-300 bg-[#F8FAFF] p-6"
              >

                <p className="text-sm text-gray-500">
                  {item.label}
                </p>

                <p className="mt-3 text-[36px] font-semibold leading-none">
                  {item.value}
                </p>

              </div>

            ))}

          </div>

        </div>

      </div>

    </div>
  );
}