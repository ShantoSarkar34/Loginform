

import React from "react";
import Link from "next/link";



function Signup() {
  return (
    <section className="h-[54.25rem] w-full bg1">
      <div className="flex items-center justify-center">
        <div className="h-[45rem] w-[36rem] bg-white rounded-[15px] mt-10">
          <div className="p-12">
            <h1 className="text-[35px] font-extrabold tracking-tight text-[#323E48] ">
              Login
            </h1>
            <p className="text-[#a3aeb8]">
              Anda perlu login untuk mangakses konten sensitif
            </p>
            <div className="mt-10">
              <h3 className="text-[20px] font-bold text-[#5f6c77] ">
                Username
              </h3>
              <div>
                <input
                  type="text"
                  className="h-[75px] w-full text-[18px] text-[#5f6c77] 
                    py-5 px-4 bg-[#ece7f3] rounded-[10px] focus:outline-none"
                />
              </div>
              <div className="mt-10">
                <div className="flex justify-between ">
                  <div>
                    <h3 className="text-[20px] font-bold text-[#5f6c77]">
                      Password
                    </h3>
                  </div>
                  <div>
                    <Link href={"#"} className="text-[17px] text-blue-600">
                      {" "}
                      Lupa Password?
                    </Link>
                  </div>
                </div>
                <div>
                  <input
                    type="password"
                    className="h-[75px] w-full text-[18px] text-[#5f6c77] 
                    py-5 px-4 bg-[#ece7f3] rounded-[10px] focus:outline-none"
                  />
                </div>
                <div className="mt-5">
                  <div className="flex gap-2 items-center">
                    <input type="checkbox" className="h-[30px] w-[30px]" />
                    <p className="text-[20px] font-bold text-[#96a3ad]">
                      Show password !
                    </p>
                  </div>
                  <div className="mt-5">
                    <button className="text-[30px] font-bold text-white bg-[#643eec] py-5 px-[200px] rounded-[10px]">
                      Login
                    </button>
                    <div className="mt-10 flex gap-1 items-center">
                      <div>
                        <h4 className="text-[20px] font-bold text-[#96a3ad] tracking-[1px]">
                          Don't have account?
                        </h4>
                      </div>
                      <div>
                        <Link
                          href={"#"}
                          className="text-[22px] font-bold tracking-[1px] text-red-500"
                        >
                          {" "}
                          Create Now
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className=" mt-10 text-[19px] text-[#96a3ad] text-center">
        Copyright © 2020
      </p>
    </section>
  );
}

export default Signup;
