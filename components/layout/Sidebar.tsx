"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Package,
  CalendarDays,
  BarChart3,
  Settings,
  CircleHelp,
  LogOut,
  BriefcaseMedical,
} from "lucide-react";

const menuItems = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Equipment",
    href: "/equipment",
    icon: Package,
  },
  {
    title: "Reservations",
    href: "/reservations",
    icon: CalendarDays,
  },
  {
    title: "Analytics",
    href: "/analytics",
    icon: BarChart3,
  },
  {
    title: "Settings",
    href: "/settings",
    icon: Settings,
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 bg-white border-r h-screen flex flex-col justify-between">
      {/* Logo */}
      <div>
        <div className="flex items-center gap-3 px-6 py-7">
          <div className="bg-green-700 p-3 rounded-xl">
            <BriefcaseMedical className="text-white w-6 h-6" />
          </div>

          <div>
            <h1 className="font-bold text-3xl text-green-800">
              VetShare
            </h1>

            <p className="text-gray-500 text-sm">
              Clinical Network
            </p>
          </div>
        </div>

        {/* Navigation */}

        <nav className="mt-6 space-y-2 px-4">
          {menuItems.map((item) => {
            const Icon = item.icon;

            const active = pathname === item.href;

            return (
              <Link
                key={item.title}
                href={item.href}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all
                ${
                  active
                    ? "bg-green-700 text-white"
                    : "hover:bg-gray-100 text-gray-700"
                }`}
              >
                <Icon size={20} />

                <span>{item.title}</span>
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Bottom */}

      <div className="p-4 border-t">

        <button className="flex items-center gap-3 w-full px-4 py-3 rounded-xl hover:bg-gray-100">
          <CircleHelp size={20} />
          Support
        </button>

        <button className="flex items-center gap-3 w-full px-4 py-3 rounded-xl text-red-600 hover:bg-red-50">
          <LogOut size={20} />
          Sign Out
        </button>

      </div>
    </aside>
  );
}