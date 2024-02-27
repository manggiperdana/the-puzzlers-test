"use client";
import Image from "next/image";
import { useState } from "react";
import ButtonNav from "./ButtonNav";
export default function Header() {
  const [menu, setMenu] = useState(false);
  const toggleMenu = () => {
    setMenu(!menu);
  };
  return (
    <>
      {/* Header Web*/}
      <div className="hidden md:visible md:flex flex-row p-4">
        <div className="flex flex-1 items-center justify-center">
          <Image src={"/assets/logo.svg"} alt="logo" width={144} height={22} />
        </div>
         {/* Nav Web */}
        <div className="flex flex-1 items-center justify-center font-sans">
          <ButtonNav isActive={true} caption="Home" />
          <ButtonNav isActive={false} caption="Features" />
          <ButtonNav isActive={false} caption="About" />
          <ButtonNav isActive={false} caption="Pricing" />
          <ButtonNav isActive={false} caption="Contact" />
        </div>
        <div className="flex flex-1 items-center justify-center font-sans">
          <button className="bg-[#FFDE2C] border border-black border-b-2 px-6 py-1 rounded-3xl">
            Try for free
          </button>
        </div>
      </div>
      {/* Header Mobile*/}
      <div className="md:hidden flex justify-between p-4">
        <Image src={"/assets/logo.svg"} alt="logo" width={144} height={22} />
        <Image
          src={"/assets/menu.svg"}
          alt="logo"
          width={40}
          height={40}
          onClick={toggleMenu}
        />
      </div>
      {/* Nav mobile */}
      <div
        className={
          `border-l border-b flex md:hidden flex-col font-sans absolute top-0 right-0 bg-white z-10 w-40 h-auto` +
          (menu ? " flex" : " hidden")
        }
      >
        <div className="py-4 flex justify-end px-4">
          <Image
            src={"/assets/menu.svg"}
            alt="logo"
            width={40}
            height={40}
            onClick={toggleMenu}
          />
        </div>
        <ButtonNav isActive={true} caption="Home" />
        <ButtonNav isActive={false} caption="Features" />
        <ButtonNav isActive={false} caption="About" />
        <ButtonNav isActive={false} caption="Pricing" />
        <ButtonNav isActive={false} caption="Contact" />
      </div>
    </>
  );
}
