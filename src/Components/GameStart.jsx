import React, { useState } from "react";
import diceone from "../assets/dice_1.png";

const GameStart = () => {
  const SelectArray = [1, 2, 3, 4, 5, 6];
  const [Isselect, setIsselect] = useState(null);

  // handle selection
  const handleSelection = (i) => {
    setIsselect(i);
    console.log(i);
  };

  return (
    <>
      <div className="mt-[50px] mx-[90px]">
        <div className="flex justify-between items-center text-center">
          <div className="text-center max-w-[200px]">
            <p className="font-Popins font-medium text-[100px] leading-none">
              0
            </p>
            <p className="font-Popins font-medium text-[24px] leading-none">
              Total Score
            </p>
          </div>
          <div className="text-center">
            <div className="flex gap-x-5">
              {SelectArray.map((value, i) => (
                <div
                  key={i}
                  className={`cursor-pointer text-[24px] font-bold font-Popins flex text-center items-center justify-center border-2 border-solid border-black h-[70px] w-[70px] rounded-xl
                    ${Isselect === i ? "bg-black text-white" : ""}`}
                  onClick={() => handleSelection(i)}
                >
                  {value}
                </div>
              ))}
            </div>
            <p className="text-[24px] font-bold font-Popins text-end mt-3">
              Select Number
            </p>
          </div>
        </div>
        <div>
          <div className="flex flex-col items-center justify-center">
            <picture>
              <img src={diceone} alt={diceone} />
            </picture>
            <h5 className="font-Popins font-medium text-[24px] mt-2">
              Click on Dice to roll
            </h5>
            {/* <button className="px-[60px] py-[10px] border border-solid border-black rounded-md">
              Reset Score
            </button> */}
            <div class="group relative inline-block rounded-md mt-6">
              <button class="relative z-10 px-[60px] py-[10px] font-semibold font-Popins text-[16px] border border-solid border-black bg-transparent text-black transition-colors duration-300 rounded-md">
                Reset Score
              </button>
              <div class="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-400 to-transparent transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 rounded-md"></div>
            </div>
            <button className="mt-6 px-[62px] py-[10px] font-semibold font-Popins text-[16px] bg-black text-white rounded-md">
              Show Rules
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default GameStart;
