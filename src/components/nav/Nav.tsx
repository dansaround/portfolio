"use client";

import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BiBook, BiMessageSquareDetail } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { useState } from "react";

const items = [
  { href: "#", label: "Home", icon: <AiOutlineHome /> },
  { href: "#work", label: "Work", icon: <RiServiceLine /> },
  { href: "#about", label: "About", icon: <AiOutlineUser /> },
  { href: "#experience", label: "Experience", icon: <BiBook /> },
  { href: "#contact", label: "Contact", icon: <BiMessageSquareDetail /> },
];

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");

  return (
    <nav
      aria-label="Sections"
      className="bg-black/40 w-max fixed left-1/2 -translate-x-1/2 bottom-6
                 flex gap-[0.6rem] px-[1.2rem] py-[0.6rem] rounded-[3rem]
                 backdrop-blur-[15px] z-10"
    >
      {items.map((item) => (
        <a
          key={item.href}
          href={item.href}
          aria-label={item.label}
          title={item.label}
          aria-current={activeNav === item.href ? "location" : undefined}
          onClick={() => setActiveNav(item.href)}
          className={`p-[0.9rem] rounded-full flex text-[1.2rem] transition-all duration-400 hover:bg-black/30 ${
            activeNav === item.href ? "bg-primary text-bg" : "bg-transparent text-white/75"
          }`}
        >
          {item.icon}
        </a>
      ))}
    </nav>
  );
};

export default Nav;
