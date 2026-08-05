"use client"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { BarChart3, FileText, Gift, Home, ImageIcon, Package, Settings, ShoppingCart, Store, Users } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

const sidebarNavItems = [
  {
    title: "Dashboard",
    href: "/admin",
    icon: Home,
  },
  {
    title: "Products",
    href: "/admin/products",
    icon: Package,
  },
  {
    title: "Orders",
    href: "/admin/orders",
    icon: ShoppingCart,
  },
  {
    title: "Customers",
    href: "/admin/customers",
    icon: Users,
  },
  {
    title: "Categories",
    href: "/admin/categories",
    icon: Users,
  },
  {
    title: "Coupons",
    href: "/admin/coupons",
    icon: Gift,
  },
  {
    title: "Banners",
    href: "/admin/banners",
    icon: ImageIcon,
  },
  {
    title: "Support",
    href: "/admin/support",
    icon: ImageIcon,
  },
  {
    title: "Reports",
    href: "/admin/reports",
    icon: BarChart3,
  },
   {
    title: "Profile",
    href: "/admin/profile",
    icon: FileText,
  },
  {
    title: "Settings",
    href: "/admin/settings",
    icon: Settings,
  },
 
];


export function Sidebar() {
  const pathname = usePathname()

  return (
    <div className="pb-12 w-64 bg-white border-r">
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <div className="flex items-center gap-2 mb-8">
            <Store className="h-8 w-8" />
            <h2 className="text-lg font-semibold">Admin Dasboard</h2>
          </div>
          <div className="space-y-1">
            <ScrollArea className="h-[calc(100vh-8rem)]">
              {sidebarNavItems.map((item) => (
                <Button
                  key={item.href}
                  variant={pathname === item.href ? "secondary" : "ghost"}
                  className={cn("w-full justify-start", pathname === item.href && "bg-muted font-medium")}
                  asChild
                >
                  <Link href={item.href}>
                    <item.icon className="mr-2 h-4 w-4" />
                    {item.title}
                  </Link>
                </Button>
              ))}
            </ScrollArea>
          </div>
        </div>
      </div>
    </div>
  )
}
