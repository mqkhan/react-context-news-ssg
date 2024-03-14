import React from "react";
import Link from "next/link";
import { FaRegBookmark } from "react-icons/fa6";

function Navbar() {
  return (
    <header>
      <div className="flex items-center  mx-auto">
        <Link href="/" className="no-underline">
          <h2 className="uppercase text-[#4C64FF] tracking-tighter font-bold text-2xl italic py-2 xl:mx-0  mx-2 sm:mx-6">
            Chas News
          </h2>
        </Link>
      </div>
      <div className="flex flex-row bg-[#4C64FF] items-center justify-between">
        <nav className="bg-[#4C64FF] flex flex-row h-10 items-center w-full">
          <ul className="list-none  ">
            <li className="flex justify-start gap-2">
              <Link className=" text-slate-50 no-underline" href="/">
                Home
              </Link>
              <Link className=" text-slate-50 no-underline" href="/news">
                News
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
