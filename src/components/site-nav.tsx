'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";

type NavItem = {
  href: string;
  label: string;
};

function isActive(pathname: string, href: string) {
  if (href === "/") {
    return pathname === "/";
  }

  return pathname === href || pathname.startsWith(`${href}/`);
}

export function DesktopNav({ items }: { items: NavItem[] }) {
  const pathname = usePathname();

  return (
    <nav className="hidden gap-6 text-sm font-medium uppercase tracking-widest text-white/70 md:flex">
      {items.map((item) => {
        const active = isActive(pathname, item.href);
        const baseClass = "relative transition hover:text-(--accent)";
        const activeClass =
          "text-(--accent) after:absolute after:-bottom-3 after:left-1/2 after:h-px after:w-6 after:-translate-x-1/2 after:bg-(--accent)";

        return (
          <Link
            key={item.href}
            href={item.href}
            className={`${baseClass} ${active ? activeClass : ""}`.trim()}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}

export function MobileNav({ items }: { items: NavItem[] }) {
  const pathname = usePathname();

  return (
    <nav className="mx-auto mt-1 flex w-full max-w-6xl gap-4 overflow-x-auto px-6 pb-4 text-[11px] uppercase tracking-[0.35em] text-white/60 md:hidden">
      {items.map((item) => {
        const active = isActive(pathname, item.href);
        const baseClass = "shrink-0 rounded-full border px-4 py-2 transition";
        const inactiveClass = "border-white/10 hover:border-(--accent) hover:text-(--accent)";
        const activeClass = "border-(--accent) bg-(--accent)/10 text-(--accent)";

        return (
          <Link
            key={item.href}
            href={item.href}
            className={`${baseClass} ${active ? activeClass : inactiveClass}`.trim()}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}
