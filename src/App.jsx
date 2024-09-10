import Advice from "./components/Advice";
import Count from "./components/Count";
import Dotsloader from "./components/Dotsloader";
import LinePause from "./components/LinePause";
import DiceButton from "./components/DiceButton";

import { useEffect } from "react";
import { useState } from "react";

function App() {
  const [advice, setAdvice] = useState("");
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(true);

  async function GetAdvice() {
    setLoading(true);
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    setAdvice(data?.slip?.advice);
    setCount(data?.slip?.id);
    setLoading(false);
  }

  useEffect(function () {
    GetAdvice();
  }, []);

  return (
    <div className="flex items-center justify-center h-screen bg-darkBlue font-manrope font-extrabold px-4">
      {loading ? (
        <Dotsloader />
      ) : (
        <div className="flex flex-col justify-center  bg-darkGrayishBlue pt-[23px] px-[23px] pb-[34px] text-center rounded-xl gap-6 relative w-[272px] lg:w-[500px]">
          <Count count={count} />
          <Advice advice={advice} />
          <LinePause />
          <DiceButton GetAdvice={GetAdvice} />
        </div>
      )}
    </div>
  );
}

export default App;
