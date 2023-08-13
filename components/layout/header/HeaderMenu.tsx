"use client";

import { HEADER_MENU } from "@/consts";
import HeaderDropdownMenu from "./HeaderDropdownMenu";
import { useState } from "react";
import { usePathname } from "next/navigation";

const HeaderMenu = () => {
  const pathname = usePathname();
  const [showDropdown, setShowDropdown] = useState(false);
  const [dropdownContent, setDropdownContent] = useState("");

  if (pathname === "/login" || pathname === '/register') return null;
  return (
    <div className="relative ">
      <ul>
        {HEADER_MENU.map((item) => (
          <li
            key={item.label}
            onMouseOver={() => {
              setShowDropdown(true);
              setDropdownContent(item.label);
            }}
            onMouseLeave={() => {
              setShowDropdown(false);
            }}
            className={`inline-block px-4 py-[0.45rem] ${
              dropdownContent === item.label && "bg-slate-300"
            } tracking-wider hover:bg-slate-300 transition-all   ease-in rounded-md font-bold cursor-pointer text-sm `}
          >
            {item.label}
          </li>
        ))}
      </ul>

      <HeaderDropdownMenu
        setShowDropdown={setShowDropdown}
        showDropdown={showDropdown}
        dropdownContent={dropdownContent}
        setDropdownContent={setDropdownContent}
      />
    </div>
  );
};

export default HeaderMenu;
