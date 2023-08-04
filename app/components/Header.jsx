import React from "react";
import Link from "next/link";

import {DiCodeigniter} from "react-icons/di"

function Header() {
  return (
    <section className="h-[4.5rem] w-full bg-slate-500">
      <div className="mx-[15rem]">
        <div className="flex justify-between">
          <div className="mt-2">
            <DiCodeigniter className="text-[50px] text-[#e97b31]"/>
          </div>
          <div className="mt-[24px]">
            <ul className="flex gap-10">
              <li>
                <Link
                  href={"#"}
                  className="text-[15px] font-semibold text-orange-500 uppercase hover:text-white
                 transition duration-300
                  "
                >
                  home
                </Link>
              </li>
              <li>
                <Link
                  href={"#"}
                  className="text-[15px] font-semibold text-orange-500 uppercase hover:text-white
                 transition duration-300  "
                >
                  about
                </Link>
              </li>
              <li>
                <Link
                  href={"#"}
                  className="text-[15px] font-semibold text-orange-500 uppercase hover:text-white
                 transition duration-300  "
                >
                  design
                </Link>
              </li>
              <li>
                <Link
                  href={"#"}
                  className="text-[15px] font-semibold text-orange-500 uppercase hover:text-white
                 transition duration-300  "
                >
                  work
                </Link>
              </li>
              <li>
                <Link
                  href={"#"}
                  className="text-[15px] font-semibold text-orange-500 uppercase hover:text-white
                 transition duration-300  "
                >
                  skills
                </Link>
              </li>
              <li>
                <Link
                  href={"#"}
                  className="text-[15px] font-semibold text-orange-500 uppercase hover:text-white
                 transition duration-300  "
                >
                  contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Header;
