"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
export default function Body() {
  const [loaded, setLoaded] = useState(false);
  const [animate, setAnimate] = useState("opacity-0 translate-y-10");
  useEffect(() => {
    const onPageLoad = () => {
      setLoaded(true);
      setAnimate("opacity-100 translate-y-0");
    };

    if (document.readyState === "complete") {
      onPageLoad();
    } else {
      window.addEventListener("load", onPageLoad, false);
      return () => window.removeEventListener("load", onPageLoad);
    }
  }, []);
  return (
    <>
      <div className="py-8 md:py-20 flex flex-col justify-center items-center">
        <div className="w-full p-4 md:w-[40%] md:p-0 relative z-0 font-andada">
          <div className="flex flex-col absolute left-0 top-0 animate-[spin_6s_linear_infinite] -mt-10 ml-2 md:-ml-10 md:-mt-9">
            <Image
              className={`animate-[grow_3s_infinite]`}
              src={"/assets/star-1.svg"}
              alt="sales"
              width={51}
              height={51}
            />
          </div>
          <div className="hidden md:flex flex-col absolute right-0 md:right-0 md:bottom-0 animate-[spin_6s_linear_infinite]">
            <Image
              className={`animate-[grow_4s_infinite]`}
              src={"/assets/star-2.svg"}
              alt="sales"
              width={51}
              height={51}
            />
          </div>
          <div className="hidden md:flex flex-col absolute right-0 top-0 animate-[spin_6s_linear_infinite] mt-14 -mr-20">
            <Image
              className={`animate-[grow_2s_infinite]`}
              src={"/assets/star-3.svg"}
              alt="sales"
              width={51}
              height={51}
            />
          </div>
          <p className="font-andada text-center font-semibold text-3xl text-gray-800">
            Field sales software for humans
          </p>
          <p className="font-andada text-center my-0 md:my-4 font-light text-gray-600">
            Supersales enables your team to perform at the highest level, yet
            stay human. With a sleek design and an easy-to-navigate app.
          </p>
          <div className="md:hidden flex items-end justify-end">
            <div className="w-6 animate-[spin_6s_linear_infinite]">
              <Image
                className={`animate-[grow_2s_infinite]`}
                src={"/assets/star-3.svg"}
                alt="sales"
                width={51}
                height={51}
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-center items-center font-sans">
            <div className="w-full md:mr-2 md:w-40">
              <button className="border w-full border-black border-b-2 bg-[#FFDE2C] px-8 py-3 md:text-xs text-sm font-semibold rounded-3xl hover:border-b hover:mb-[1px]">
                Book a demo
              </button>
            </div>
            <div className="flex flex-row justify-center items-center md:ml-2 mt-6 md:mt-0">
              <Image
                src={"/assets/play.svg"}
                alt="play"
                width={24}
                height={24}
              />
              <p className="text-xs">See how it works</p>
            </div>
          </div>
        </div>
        <div className="h-[64px]"></div>
        <div className="flex flex-row">
          <div className="flex flex-col items-end">
            <div className="rounded-s-xl w-4 h-16 mt-8 md:h-44 md:w-16 bg-[#E7FBFF] md:mt-20"></div>
            <div className="rounded-s-xl w-4 h-16 mt-12 md:h-36 md:w-28 bg-[#E7FBFF] md:mt-36"></div>
          </div>
          <div className="relative z-0 md:p-0 font-sans">
            <div className="hidden md:flex flex-col absolute left-0 bottom-0 -ml-16 mb-52">
              <Image
                className={`border border-black border-b-[4px] rounded-full z-20 transition-all ease-out duration-500 ${animate}`}
                src={"/assets/sales.jpg"}
                alt="sales"
                width={123}
                height={123}
              />
              <p
                className={`bg-[#0084BD] text-center -mt-4 text-white rounded-3xl z-20 py-1 font-semibold px-6 transition-opacity duration-1000 ease-in ${
                  loaded ? "opacity-100" : "opacity-0"
                }`}
              >
                Sales
              </p>
            </div>
            <div className="hidden md:visible md:flex flex-col absolute top-0 right-0 md:-mr-20 md:mt-7">
              <Image
                className={`border border-black border-b-[4px] rounded-full z-20 transition-all ease-out duration-500 ${animate}`}
                src={"/assets/client.jpg"}
                alt="client"
                width={123}
                height={123}
              />
              <p
                className={`bg-[#5DC022] text-center -mt-4 text-white rounded-3xl z-20 py-1 font-semibold px-6 transition-opacity duration-1000 ease-in ${
                  loaded ? "opacity-100" : "opacity-0"
                }`}
              >
                Client
              </p>
            </div>
            <div className="md:hidden flex flex-col absolute top-0 right-0 -mr-2 -mt-8">
              <Image
                className={`border border-black border-b-[4px] rounded-full z-20 transition-all ease-out duration-500 ${animate}`}
                src={"/assets/client.jpg"}
                alt="client"
                width={90}
                height={90}
              />
              <p
                className={`bg-[#5DC022] text-center text-xs -mt-4 text-white rounded-3xl z-20 py-1 font-semibold px-6 transition-opacity duration-1000 ease-in ${
                  loaded ? "opacity-100" : "opacity-0"
                }`}
              >
                Client
              </p>
            </div>
            <div className="hidden md:flex flex-col justify-center items-center absolute bottom-0 right-0 -mr-10 mb-14">
              <Image
                className={`border border-black border-b-[4px] rounded-full z-20 transition-all ease-out duration-500 ${animate}`}
                src={"/assets/sales-manager.jpg"}
                alt="sales-manager"
                width={123}
                height={123}
              />
              <p
                className={`bg-[#ED8B14] text-center -mt-4 text-white rounded-3xl z-20 py-1 font-semibold px-6 transition-opacity duration-1000 ease-in ${
                  loaded ? "opacity-100" : "opacity-0"
                }`}
              >
                Sales manager
              </p>
            </div>

            <Image
              className={`z-0 inset-0 border border-black rounded-lg`}
              src={"/assets/screen.jpg"}
              alt="screen"
              width={970}
              height={699}
            />
          </div>
          <div className="flex flex-col items-start" dir="rtl">
            <div className="rounded-s-xl w-4 h-16 mt-36 md:h-44 md:w-20 bg-[#E7FBFF] md:mt-56"></div>
          </div>
          <div className="hidden md:flex md:w-6"></div>
        </div>
      </div>
    </>
  );
}
