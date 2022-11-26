import React from "react";
import { AiOutlineCheck } from "react-icons/ai";

const One = () => {
  return (
    <div className="flex">
      <div>
        <AiOutlineCheck className="w-8 mr-4 mt-2 text-green-700" />
      </div>
      <div>
        <h3 className="font-bold text-lg">Notifications</h3>
        <p className="text-lg pt-2 pb-4">
          Lorem ipsum dolor sit amet consectetur adipiscing elit. Cumque
          asperiores earum placeat veritatis dignissimos itaque
        </p>
      </div>
    </div>
  );
};

export default One;
