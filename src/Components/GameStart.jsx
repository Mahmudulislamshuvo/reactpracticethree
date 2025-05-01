import React, { useState } from "react";
import ShowRules from "./ShowRules";
import { ErrorToast, SuccessToast } from "../utils/Toastify";
import dice1 from "../assets/Dice/dice_1.png";
import dice2 from "../assets/Dice/dice_2.png";
import dice3 from "../assets/Dice/dice_3.png";
import dice4 from "../assets/Dice/dice_4.png";
import dice5 from "../assets/Dice/dice_5.png";
import dice6 from "../assets/Dice/dice_6.png";

const GameStart = () => {
  const options = [1, 2, 3, 4, 5, 6];
  const diceImages = [dice1, dice2, dice3, dice4, dice5, dice6];

  const [selectedNumber, setSelectedNumber] = useState(null);
  const [diceRoll, setDiceRoll] = useState(1);
  const [score, setScore] = useState(0);
  const [showRules, setShowRules] = useState(false);

  const handleSelection = (num) => {
    setSelectedNumber(num);
  };

  const rollDice = () => {
    if (selectedNumber === null) {
      ErrorToast("প্রথমে একটি সংখ্যা সিলেক্ট করুন");
      return;
    }
    const roll = Math.floor(Math.random() * 6) + 1;
    setDiceRoll(roll);

    if (roll === selectedNumber) {
      setScore((s) => s + 4);
      SuccessToast("অভিনন্দন! +4 পয়েন্ট");
    } else {
      setScore((s) => s - 1);
      ErrorToast("ভুল! -1 পয়েন্ট");
    }
  };

  const resetScore = () => setScore(0);
  const toggleRules = () => setShowRules((r) => !r);

  return (
    <div className="mt-12 mx-24">
      <div className="flex justify-between">
        {/* Score Display */}
        <div className="w-48 text-center">
          <p className="text-6xl font-bold">{score}</p>
          <p className="text-xl">Total Score</p>
        </div>
        {/* Number Options */}
        <div className="text-center">
          <div className="flex gap-4">
            {options.map((num) => (
              <div
                key={num}
                onClick={() => handleSelection(num)}
                className={`w-16 h-16 flex items-center justify-center border-2 rounded-xl cursor-pointer 
                  ${selectedNumber === num ? "bg-black text-white" : ""}`}
              >
                {num}
              </div>
            ))}
          </div>
          <p className="mt-2 font-semibold">Select Number</p>
        </div>
        <div className="w-48" /> {/* spacer */}
      </div>

      {/* Dice & Actions */}
      <div className="flex flex-col items-center mt-8">
        <div onClick={rollDice} className="cursor-pointer">
          <img
            src={diceImages[diceRoll - 1]}
            alt={`dice-${diceRoll}`}
            className="w-[300px] h-[250px]"
          />
          <p className="mt-2">Click on Dice to roll</p>
        </div>

        <button
          onClick={resetScore}
          className="mt-6 px-6 py-2 border rounded-md"
        >
          Reset Score
        </button>
        <button
          onClick={toggleRules}
          className="mt-4 px-6 py-2 bg-black text-white rounded-md"
        >
          {showRules ? "Hide Rules" : "Show Rules"}
        </button>
      </div>

      {/* Rules */}
      {showRules && (
        <div className="mt-8">
          <ShowRules />
        </div>
      )}
    </div>
  );
};

export default GameStart;
