import React from "react";
import DicePic from "../assets/dices.png";

const DicegameHome = () => {
  return (
    <div>
      <div className="my-[60px] mx-[100px] flex items-center">
        <div>
          <picture>
            <img src={DicePic} alt={DicePic} />
          </picture>
        </div>
        <div>
          <h1 className="font-Popins text-[98px] font-bold text-nowrap">
            DICE GAME
          </h1>
          <div className="flex flex-row-reverse">
            <button className="px-[70px] py-[10px] bg-black text-white font-Popins font-semibold rounded-md">
              Play Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DicegameHome;
