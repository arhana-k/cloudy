"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  {
    href: "/",
    label: "Home",
  },
  {
    href: "/posts",
    label: "Posts",
  },
  {
    href: "/create-post",
    label: "Create post",
  },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="flex justify-between items-center py-4 px-7 border-b">
      <Link href="/"> 
      <Image
        src="https://utfs.io/f/106d2246-4b48-44c2-b9af-ecb6a550e1bf-rip3my.jpg"
        alt="logo"
        className="rounded-lg w-[35px] h-[35px]"
        width="35"
        height="35"
      />
      </Link>

      <nav>
        <ul className="flex gap-x-5 text-[14px]">
        {navLinks.map((link) => (
              <li key={link.href}>
                <Link className={` ${
                  pathname === link.href ? "text-zinc-100" : "text-zinc-400"
                }`} href={link.href}>
                {link.label}</Link>
              </li>
        ))}
        </ul>
      </nav>

  </header>
  );
}
