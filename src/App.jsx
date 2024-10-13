import { useState } from "react";
import DicegameHome from "./Components/DicegameHome";
import GameStart from "./Components/GameStart";

function App() {
  const [IsStart, setIsStart] = useState(false);

  const GameStarted = () => {
    setIsStart(!IsStart);
  };

  return (
    <div>
      {IsStart ? <GameStart /> : <DicegameHome HandlegameStart={GameStarted} />}
    </div>
  );
}

export default App;
