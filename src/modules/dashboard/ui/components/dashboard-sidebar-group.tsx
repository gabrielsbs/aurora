"use client";
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface DashboardSidebarGroupProps {
  items: {
    icon: React.ComponentType<{ className?: string }>;
    label: string;
    href: string;
  }[];
}

export const DashboardSidebarGroup = ({
  items,
}: DashboardSidebarGroupProps) => {
  const pathname = usePathname();
  return (
    <SidebarGroup>
      <SidebarGroupContent>
        <SidebarMenu>
          {items.map((item) => (
            <SidebarMenuItem key={item.label}>
              <SidebarMenuButton
                asChild
                isActive={pathname === item.href}
                className={cn(
                  "h-10 hover:bg-linear-to-r/oklch border border-transparent hover:border-[#5d6b68]/10 from-sidebar-accent from-5% via-30% via-sidebar-accent/50 to-sidebar/50",
                  pathname === item.href &&
                    "bg-linear-to-r/oklch border border-[#5d6b68]/10 ",
                )}
              >
                <Link href={item.href}>
                  <item.icon className="size-6" />
                  <span className="text-sm font-medium tracking-tight">
                    {item.label}
                  </span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
};
