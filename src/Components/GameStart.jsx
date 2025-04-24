import React, { useEffect, useState } from "react";
import ShowRules from "./ShowRules";
import { ErrorToast, SuccessToast } from "../utils/Toastify";

const GameStart = () => {
  const SelectArray = [1, 2, 3, 4, 5, 6];
  const [Isselect, setIsselect] = useState(null);
  const [randomnumber, setrandomnumber] = useState(1);
  const [diceValue, setdiceValue] = useState("");
  const [score, setscore] = useState(1);
  const [error, seterror] = useState("");
  const [ShowRulesss, setShowRulesss] = useState(false);

  // handle selection
  const handleSelection = (i, value) => {
    setIsselect(i);
    setdiceValue(value);
    seterror("");
  };

  // handle dice roll

  const RandomNmber = (min, max) => {
    if (Isselect === null) {
      seterror(true);
      return;
    }

    const newRandom = Math.floor(Math.random() * (max - min) + min);
    setrandomnumber(newRandom);

    if (diceValue === newRandom) {
      setscore((prev) => prev + 4);
      SuccessToast("Yaa! you are win +4");
    } else {
      setscore((prev) => prev - 1);
      ErrorToast("Opps! you guess the wrong number -1");
    }
  };

  // handle reset btn
  const HandleResetBtn = () => {
    setscore(0);
  };

  // Handle show rules
  const HandleShowRules = () => {
    setShowRulesss(!ShowRulesss);
  };

  return (
    <>
      <div className="mt-[50px] mx-[90px]">
        <div className="flex justify-between items-center text-center">
          <div className="text-center w-[200px]">
            <p className="font-Popins font-medium text-[100px] leading-none">
              {score}
            </p>
            <p className="font-Popins font-medium text-[24px] leading-none">
              Total Score
            </p>
          </div>
          <div className="text-center flex justify-end items-end flex-col w-full">
            <div className="text-red-500 pb-2">
              {error ? "You have to select one to play game" : ""}
            </div>
            <div className="flex gap-x-5">
              {SelectArray.map((value, i) => (
                <div
                  key={i}
                  className={`cursor-pointer text-[24px] font-bold font-Popins flex text-center items-center justify-center border-2 border-solid border-black h-[70px] w-[70px] rounded-xl
                    ${Isselect === i ? "bg-black text-white" : ""}`}
                  onClick={() => handleSelection(i, value)}
                >
                  {value}
                </div>
              ))}
            </div>
            <p className="text-[24px] font-bold font-Popins text-end mt-3">
              Select Number
            </p>
          </div>
          <div></div>
        </div>
        <div>
          <div className="flex flex-col items-center justify-center">
            <div
              className="flex flex-col justify-center items-center cursor-pointer"
              onClick={() => RandomNmber(1, 7)}
            >
              <picture>
                <img
                  // src={diceImages[randomnumber]}
                  src={`/public/Dice/dice_${randomnumber}.png`}
                  alt={`diceone_${randomnumber}`}
                />
              </picture>
              <h5 className="font-Popins font-medium text-[24px] mt-2">
                Click on Dice to roll
              </h5>
            </div>
            <div className="group relative inline-block rounded-md mt-6">
              <button
                className="relative z-10 px-[60px] py-[10px] font-semibold font-Popins text-[16px] border border-solid border-black bg-transparent text-black transition-colors duration-300 rounded-md"
                onClick={HandleResetBtn}
              >
                Reset Score
              </button>
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-400 to-transparent transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 rounded-md"></div>
            </div>
            <button
              className="mt-6 px-[62px] py-[10px] font-semibold font-Popins text-[16px] bg-black text-white rounded-md"
              onClick={HandleShowRules}
            >
              Show Rules
            </button>
          </div>
        </div>
        <div className="flex justify-center mt-[56px] mb-5">
          {ShowRulesss ? <ShowRules /> : ""}
        </div>
      </div>
    </>
  );
};

export default GameStart;
