"use client"
import {NavigationItems}  from "@/lib/constants"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { use } from "react"

const NavItems = () => {
  const pathname = usePathname();
  const isActive = ({path}: {path: string}) => {
    if(path === "/") return pathname === "/";

    return pathname.startsWith(path);
  }

  return (
    <ul className="flex flex-col sm:flex-row gap-3 sm:gap-10 font-medium">
      {NavigationItems.map(({ href, title }) => (
        <li key={href}>
          <Link href={href} className={`hover:text-yellow-500 transition-colors ${isActive({path: href}) ? "text-yellow-500" : ""}`}>
            {title}
          </Link>
        </li>
      ))}

    </ul>
  )
}


export default NavItems;