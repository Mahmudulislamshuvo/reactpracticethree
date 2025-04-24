import { useState } from "react";
import DicegameHome from "./Components/DicegameHome";
import GameStart from "./Components/GameStart";
import { ToastContainer } from "react-toastify";

function App() {
  const [IsStart, setIsStart] = useState(false);

  const GameStarted = () => {
    setIsStart(!IsStart);
  };

  return (
    <div>
      {IsStart ? <GameStart /> : <DicegameHome HandlegameStart={GameStarted} />}
      <ToastContainer />
    </div>
  );
}

export default App;
