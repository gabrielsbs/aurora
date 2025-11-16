"use client";

import { Separator } from "@/components/ui/separator";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
} from "@/components/ui/sidebar";
import { NotebookPenIcon, TrendingUpDownIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { DashboardSidebarGroup } from "./dashboard-sidebar-group";
import { DashboardUserButton } from "./dashboard-user-button";

const firstSection = [
  {
    icon: NotebookPenIcon,
    label: "Diary",
    href: "/diary",
  },
  {
    icon: TrendingUpDownIcon,
    label: "History",
    href: "/history",
  },
];

export const DashboardSidebar = () => {
  return (
    <Sidebar>
      <SidebarHeader className="text-sidebar-foreground">
        <Link href="/dashboard" className="flex items-center gap-2 px-2 pt-2">
          <Image src="/logo.svg" alt="Logo" width={36} height={36} />
          <p className="text-2xl font-semibold">Meet.Ai</p>
        </Link>
      </SidebarHeader>
      <div className="px-4 py-2">
        <Separator className="opacity-10 text-[#5d6b68]" />
      </div>
      <SidebarContent>
        <DashboardSidebarGroup items={firstSection} />
      </SidebarContent>
      <SidebarFooter className="text-white">
        <DashboardUserButton />
      </SidebarFooter>
    </Sidebar>
  );
};
