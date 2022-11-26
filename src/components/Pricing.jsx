import React from "react";
import Price from "./Price";

const Pricing = () => {
  return (
    <div name="pricing" className="w-full text-white my-24">
      <div className="w-full h-[800px] bg-slate-900 absolute mix-blend-overlay"></div>
      <div className="max-w-[1240px] mx-auto py-12">
        <div className="text-center py-8 text-slate-300">
          <h2 className="text-3xl uppercase">Pricing</h2>
          <h3 className="text-5xl font-bold text-white py-8">
            The right price for your research.
          </h3>
          <p className="text-3xl">
            {" "}
            Lorem ipsum dolor sit amet consectetur adipiscing elit. Cumque
            asperiores earum placeat veritatis dignissimos itaque
          </p>
        </div>
        <div className="grid md:grid-cols-2">
          <Price price="49" st="standard" />
          <Price price="99" st="premium" />
        </div>
      </div>
    </div>
  );
};

export default Pricing;
