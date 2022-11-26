import React from "react";
import { BsFillTelephoneFill, BsArrowRight } from "react-icons/bs";
import { HiSupport } from "react-icons/hi";
import { BiChip } from "react-icons/bi";
import img from "../assets/support.jpg";

const Support = () => {
  return (
    <div name="support" className="w-full mt-24">
      <div className="w-full h-[700px] bg-gray-900/90 absolute">
        <img
          className="w-full h-full object-cover mix-blend-overlay"
          src={img}
          alt="pic"
        />
      </div>
      <div className="max-w-[1240px] mx-auto text-white relative">
        <div className="px-4 py-12">
          <h2 className="text-3xl pt-8 text-slate-300 uppercase text-center">
            Support
          </h2>
          <h3 className="text-5xl font-bold py-6 text-center">
            Finding the right team
          </h3>
          <p className="py-4 text-3xl text-slate-300">
            {" "}
            Lorem ipsum dolor sit amet consectetur adipiscing elit. Cumque
            asperiores earum placeat veritatis dignissimos itaque
          </p>
        </div>
        <div className="mx-8 grid grid-cols-1 lg:grid-cols-3 relative gap-x-8 gap-y-16 sm:pt-20 text-black">
          <div className="bg-white rounded-xl shadow-2xl">
            <div className="p-8">
              <BsFillTelephoneFill className="w-16 h-16 p-4 text-white bg-indigo-600 rounded-lg mt-[-4rem]" />
              <h3 className="font-bold text-2xl my-6">Sales</h3>
              <p className="text-gray-600 text-xl">
                {" "}
                Lorem ipsum dolor sit amet consectetur adipiscing elit. Cumque
                asperiores earum placeat veritatis dignissimos itaque
              </p>
            </div>
            <div className="bg-slate-100 pl-8 py-4">
              <p className="flex items-center text-indigo-600 content-center">
                Contact Us <BsArrowRight className="ml-2" />
              </p>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-2xl">
            <div className="p-8">
              <HiSupport className="w-16 h-16 p-4 text-white bg-indigo-600 rounded-lg mt-[-4rem]" />
              <h3 className="font-bold text-2xl my-6">Technical Support</h3>
              <p className="text-gray-600 text-xl">
                {" "}
                Lorem ipsum dolor sit amet consectetur adipiscing elit. Cumque
                asperiores earum placeat veritatis dignissimos itaque
              </p>
            </div>
            <div className="bg-slate-100 pl-8 py-4">
              <p className="flex items-center text-indigo-600 content-center">
                Contact Us <BsArrowRight className="ml-2" />
              </p>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-2xl">
            <div className="p-8">
              <BiChip className="w-16 h-16 p-4 text-white bg-indigo-600 rounded-lg mt-[-4rem]" />
              <h3 className="font-bold text-2xl my-6">Media Inquiries</h3>
              <p className="text-gray-600 text-xl">
                {" "}
                Lorem ipsum dolor sit amet consectetur adipiscing elit. Cumque
                asperiores earum placeat veritatis dignissimos itaque
              </p>
            </div>
            <div className="bg-slate-100 pl-8 py-4">
              <p className="flex items-center text-indigo-600 content-center">
                Contact Us <BsArrowRight className="ml-2" />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;