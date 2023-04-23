import { MagnifyingGlassCircleIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import React from "react";
import Image from "next/image";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { FaVuejs } from "react-icons/fa";

function Widgets({ trendingResults, followResults }) {
    return (
        <div className="hidden lg:inline ml-8 xl:w-[450px] py-1 space-y-5">
            <div className="sticky top-0 py-1.5 bg-black z-50 w-11/12 xl:w-9/12">
                <div className="flex items-center bg-[#202327] p-3 rounded-full relative">
                    <MagnifyingGlassIcon className="text-gray-500 h-5 z-50" />
                    <input
                        type="text"
                        className="bg-transparent placeholder-gray-500 outline-none text-[#d9d9d9] absolute inset-0 pl-11 border border-transparent w-full focus:border-[#aa7242] rounded-full focus:bg-black focus:shadow-lg"
                        placeholder="Search Designs"
                    />
                </div>
            </div>

            <div className="text-[#d9d9d9] space-y-3 bg-[#15181c] pt-2 rounded-xl w-11/12 xl:w-9/12">
                <h4 className="font-bold text-xl px-4">What's happening</h4>

                <button className="hover:bg-white hover:bg-opacity-[0.03] px-4 py-3 cursor-pointer transition duration-200 ease-out flex items-center justify-between w-full text-[#ff7f11] font-light">
                    Show more
                </button>
            </div>

            <div className="text-[#d9d9d9] space-y-3 bg-[#15181c] pt-2 rounded-xl w-11/12 xl:w-9/12 ">
                <h4 className="font-bold text-xl px-4">Categories</h4>
                <div className="text-[#d9d9d9] space-y-3 bg-[#15181c] pt-2 rounded-xl w-11/12 xl:w-9/12 flex flex-col items-start mt-8 pl-5 gap-y-2  ">
                <div className="flex items-center text-[16px] font-semibold cursor-pointer ">
                    <FaHtml5 className="mx-3"/> HTML
                </div>
                <div className="flex items-center text-[16px] font-semibold cursor-pointer ">
                    <FaCss3Alt className="mx-3"/> CSS
                </div>
                <div className="flex items-center text-[16px] font-semibold cursor-pointer">
                    <FaBootstrap className="mx-3"/> Bootstrap
                </div>
                <div className="flex items-center text-[16px] font-semibold cursor-pointer">
                    <IoLogoJavascript className="mx-3"/> JAVASCRIPT
                </div>
                <div className="flex items-center text-[16px] font-semibold cursor-pointer">
                    <FaReact className="mx-3"/> Tailwind
                </div>
                <div className="flex items-center text-[16px] font-semibold cursor-pointer ">
                    <FaVuejs className="mx-3"/> Vue Js
                </div>
                </div>
                
                <button className="hover:bg-white hover:bg-opacity-[0.03] px-4 py-3 cursor-pointer transition duration-200 ease-out flex items-center justify-between w-full text-[#ff7f11] font-light">
                    Show more
                </button>
            </div>
        </div>
    );
}

export default Widgets;
