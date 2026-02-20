"use client";

import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BiBook, BiMessageSquareDetail } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { useState } from "react";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");

  const linkClass = (id: string) =>
    `p-[0.9rem] rounded-full flex text-[1.2rem] transition-all duration-400 hover:bg-black/30
     ${activeNav === id ? "bg-primary text-bg" : "bg-transparent text-white/60"}`;

  return (
    <nav
      className="bg-black/30 w-max fixed left-1/2 -translate-x-1/2 bottom-8
                 flex gap-[0.8rem] px-[1.7rem] py-[0.7rem] rounded-[3rem]
                 backdrop-blur-[15px] z-10"
    >
      <a href="#" onClick={() => setActiveNav("#")} className={linkClass("#")}>
        <AiOutlineHome />
      </a>
      <a
        href="#portfolio"
        onClick={() => setActiveNav("#portfolio")}
        className={linkClass("#portfolio")}
      >
        <RiServiceLine />
      </a>
      <a
        href="#about"
        onClick={() => setActiveNav("#about")}
        className={linkClass("#about")}
      >
        <AiOutlineUser />
      </a>
      <a
        href="#experience"
        onClick={() => setActiveNav("#experience")}
        className={linkClass("#experience")}
      >
        <BiBook />
      </a>
      <a
        href="#contact"
        onClick={() => setActiveNav("#contact")}
        className={linkClass("#contact")}
      >
        <BiMessageSquareDetail />
      </a>
    </nav>
  );
};

export default Nav;
