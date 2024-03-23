"use client";

import { navLinks } from "@/constants";
import { useMediaQuery } from "@/hooks/use-media-query";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const isDesktop: boolean = useMediaQuery("(min-width: 768px)");
  if (!isDesktop) {
    return <></>;
  }
  return (
    <aside className=" w-[var(--sidebar-width)] fixed bg-background left-0 top-[var(--header-height)] bottom-0">
      <nav className="flex flex-col p-3 gap-3">
        {navLinks.map((item) => (
          <NavLink
            key={item.id}
            {...item}
            icon={<item.icon className="w-7 h-7" />}
          />
        ))}
      </nav>
    </aside>
  );
}

function NavLink({
  name,
  icon,
  href,
}: {
  name: string;
  icon: any;
  href: string;
}) {
  const pathname = usePathname();
  return (
    <Link href={href} className="flex flex-col items-center">
      <div
        className={cn(
          " aspect-square p-3 rounded-md hover:bg-secondary",
          pathname === href && "bg-secondary"
        )}
      >
        {icon}
      </div>
      <span className="text-sm">{name}</span>
    </Link>
  );
}
