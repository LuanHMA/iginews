"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";

export function Nav() {
  const pathname = usePathname();

  return (
    <nav className="flex items-center gap-x-6 text-gray-500">
      <Link
        href={"/"}
        className={`leading-[5rem] h-20 ${
          pathname == "/" && "font-bold text-white border-b-4 border-yellow-500"
        } hover:text-white transition-all`}
      >
        Home
      </Link>
      <Link
        href={"/posts"}
        className={`leading-[5rem] h-20 active:text-white ${
          pathname == "/posts" &&
          "font-bold text-white border-b-4 border-yellow-500"
        } hover:text-white transition-all`}
      >
        Posts
      </Link>
    </nav>
  );
}
