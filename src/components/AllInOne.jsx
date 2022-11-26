import React from "react";
import One from "./One";

const AllInOne = () => {
  return (
    <div name="platforms" className="w-full my-32">
      <div className="max-w-[1240px] mx-auto px-2">
        <h2 className="text-5xl font-bold text-center">All-In-One Platform</h2>
        <p className="text-2xl py-8 text-gray-500 text-center">
          {" "}
          Lorem ipsum dolor sit amet consectetur adipiscing elit. Cumque
          asperiores earum placeat veritatis dignissimos itaque
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
          <One />
          <One />
          <One />
          <One />
          <One />
          <One />
          <One />
          <One />
        </div>
      </div>
    </div>
  );
};

export default AllInOne;
