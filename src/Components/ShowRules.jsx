import React from "react";

const ShowRules = () => {
  return (
    <div>
      <div className="bg-[#FBF1F1] p-[20px] rounded-md">
        <h5 className="font-Popins font-bold text-[24px]">
          How to play dice game
        </h5>
        <p className="font-Popins font-medium text-[16px]">Select any number</p>
        <p className="font-Popins font-medium text-[16px]">
          Click on dice image
        </p>
        <p className="font-Popins font-medium text-[16px]">
          after click on dice if selected number is equal to dice number you
          will get same point as dice
        </p>
        <p className="font-Popins font-medium text-[16px]">
          if you get wrong guess then 1 point will be dedcuted
        </p>
      </div>
    </div>
  );
};

export default ShowRules;
