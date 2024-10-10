import React, { useState } from "react";

const GameStart = () => {
  const SelectArray = [1, 2, 3, 4, 5, 6];
  const [Isselect, setIsselect] = useState("");

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
                  className="text-[24px] font-bold font-Popins py-[13px] px-[25px] border-2 border-solid border-black flex text-center items-center justify-center"
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
      </div>
    </>
  );
};

export default GameStart;
