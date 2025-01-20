"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  {
    name: "Dashboard",
    href: "/dashboard",
  },
  { name: "Users", href: "/dashboard/users" },
  { name: "Emails", href: "/dashboard/emails" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className='border-b'>
      <nav className='max-w-7xl mx-auto flex flex-row justify-between items-center p-5'>
        <Link className='text-2xl' href='/'>
          Logo
        </Link>

        <div className=''>
          <ul className='flex flex-row gap-4'>
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className={`${
                    pathname === link.href ? "bg-stone-300 text-stone-800" : ""
                  } px-10 py-2 rounded-md`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}
