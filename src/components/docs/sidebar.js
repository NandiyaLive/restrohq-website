"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const sidebarItems = [
  {
    title: "Getting Started",
    items: [
      {
        title: "Introduction",
        href: "/docs",
        items: [],
      },
      {
        title: "Authentication",
        href: "/docs/authentication",
        items: [],
      },
    ],
  },
  {
    title: "API Reference",
    items: [
      {
        title: "Users",
        href: "/docs/api/users",
        items: [
          {
            title: "Create User",
            href: "/docs/api/users/create",
          },
          {
            title: "Update User",
            href: "/docs/api/users/update",
          },
        ],
      },
      {
        title: "Authentication",
        href: "/docs/api/auth",
        items: [
          {
            title: "Login",
            href: "/docs/api/auth/login",
          },
          {
            title: "Refresh Token",
            href: "/docs/api/auth/refresh",
          },
        ],
      },
    ],
  },
];

export function DocsSidebarNav() {
  const pathname = usePathname();

  return (
    <div className="w-full">
      {sidebarItems.map((section, index) => (
        <div key={section.title} className={cn("pb-8", index !== 0 && "pt-8")}>
          <h4 className="mb-4 text-sm font-semibold">{section.title}</h4>
          <DocsSidebarNavItems items={section.items} pathname={pathname} />
        </div>
      ))}
    </div>
  );
}

function DocsSidebarNavItems({ items, pathname }) {
  return items?.length ? (
    <div className="grid grid-flow-row auto-rows-max text-sm">
      {items.map((item, index) => (
        <div key={index}>
          {!item.items?.length ? (
            <Link
              href={item.href}
              className={cn(
                "group flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:underline",
                pathname === item.href
                  ? "font-medium text-foreground"
                  : "text-muted-foreground",
              )}
            >
              {item.title}
            </Link>
          ) : (
            <div className="flex flex-col space-y-2">
              <h5 className="font-medium">{item.title}</h5>
              <DocsSidebarNavItems items={item.items} pathname={pathname} />
            </div>
          )}
        </div>
      ))}
    </div>
  ) : null;
}
