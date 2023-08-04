import React from "react";
import {BsTwitter,BsInstagram,BsYoutube} from "react-icons/bs"
import {FaFacebook,FaInstagram} from "react-icons/fa"

function Hero() {
  return (
    <section className="h-[94rem] w-full bg-slate-400">
      <div className="mx-[15rem] sm:mx-[2rem] md:mx-[2rem]">
        <div className="pt-10 text-center">
          <h1 className="text-[80px] font-serif text-[#452c8a]">
            A<span className="text-green-500">xz</span>ons
          </h1>
          <p className="text-[15px] font-semibold text-[#452c8a] -mt-[34px]">
            Homecare
          </p>
          <h2 className="text-[22px] mt-10 font-bold">
            Health Check Report For ......
          </h2>
          <p className="mt-4 text-[21px] font-bold font-serif italic text-gray-700">
            Name........ It was our pleasure to serve you at Axzons.Please
            revlew <br />
            your Health Check & follw the recommendaton by RN.If You need any
            assiatance <br />
            br place dont hasttate to contact us.
          </p>
          <h3 className="mt-10 text-[25px] font-bold text-[#452c8a] italic font-serif">
            Have a nice day.
          </h3>
        </div>
        <div className="mt-10 flex items-center justify-center">
          <table className=" border-collapse w-[75%]">
            <tr className=" border-2 border-black text-left bg-[#452c8a] text-green-400 font-bold text-[20px]">
              <th className="p-4">Name</th>
              <th>Date</th>
              <th className="border-l-2 border-black p-4">Name</th>
              <th>Date</th>
            </tr>
            <tr className="border-2 border-black text-[18px] font-semibold bg-slate-300">
              <td className="p-4">Height:</td>
              <td>4.2</td>
              <td className="border-l-2 border-black p-4">Weight:</td>
              <td>4.5</td>
            </tr>
            <tr className="border-2 border-black text-[18px] font-semibold bg-slate-300">
              <td className="p-4">Pules Rate:</td>
              <td>11</td>
              <td className="border-l-2 border-black p-4">Blood Pressure:</td>
              <td>11</td>
            </tr>
            <tr className="border-2 border-black text-[18px] font-semibold bg-slate-300">
              <td className="p-4">Urine Test (Dipstick):</td>
              <td>11</td>
              <td className="border-l-2 border-black p-4">
                Corrent Complaints:
              </td>
              <td>11</td>
            </tr>
            <tr className="border-2 border-black text-[18px] font-semibold bg-slate-300">
              <td className="p-4">Blood glucose (Dipstick):</td>
              <td>11</td>
              <td className="border-l-2 border-black p-4">
                Recommanded by RN:
              </td>
              <td>11</td>
            </tr>
            <tr className="border-2 border-black text-[18px] font-semibold bg-slate-300">
              <td className="p-4">Next follow update:</td>
              <td>11</td>
              <td className="border-l-2 border-black p-4">new name:</td>
              <td>11</td>
            </tr>
          </table>
        </div>
        <div className="mt-20 flex items-center justify-center">
          <div className=" h-[250px] w-[75%] bg-[#452c8a] rounded-[20px]">
            <div className="p-8 text-center">
                <p className="mt-3 text-[30px] font-semibold text-white">Corporate Headquarters:</p>
                <p className="mt-4 text-[30px] font-semibold text-white">Axzons Homecare - CDPAS, CDPAP</p>
                <p className="mt-4 text-[32px] text-white">570 East Suniere Hwy Suite 500, Valley  Stream, NY 11581</p>
            </div>
          </div>
        </div>
        <div className="mt-10 flex items-center justify-center">
          <div className="h-[200px] w-[75%] bg-[#c7c7c7] rounded-[20px] shadow-2xl">
            <div className=" p-10 flex justify-between">
              <div className="">
                <p className=" text-[20px] font-semibold">call: <span className="text-[16px]">1(886)429.9667</span></p>
                <p className="mt-2 text-[20px] font-semibold">Email: <span className="text-[16px]">info@axzonshonshomecare.com</span></p>
                <p className="mt-2 text-[20px] font-semibold">Website:<br/> <span className="text-[16px]">https://www.axzonshonshomecare.com</span></p>
              </div>
              <div className="flex flex-wrap gap-10 items-center">
                <div>
                  <BsTwitter className="text-[50px] bg-sky-500 p-2 rounded-full text-white"/>
                </div>
                <div>
                  <FaFacebook className="text-[50px] bg-blue-600 p-2 rounded-full text-white"/>
                </div>
                <div>
                  <FaInstagram className="text-[50px] bg-pink-500 p-2 rounded-full text-white"/>
                </div>
                <div>
                  <BsYoutube className="text-[50px] bg-red-600 p-2 rounded-full text-white"/>
                </div>
              </div>

            </div>

          </div>

        </div>
        
      </div>
    </section>
  );
}

export default Hero;
