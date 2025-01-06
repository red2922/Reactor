import { useState } from "react";

function Timer() {
  //Note thhis is copied + pasted code to learn from
  const [timer, setTimer] = useState(0);
  const [timerId, setTimerId] = useState(0);

  const startTimer = () => {
    //Note setInterval runs the specific function every 1000ms or every blank seconds that is set
    if (timerId == 0) {
      setTimerId(
        setInterval(() => {
          setTimer((timer) => timer + 1);
        }, 1000)
      );
    }
  };

  const stopTimer = () => {
    clearInterval(timerId);
    setTimerId(0);
  };

  const resetTimer = () => {
    clearInterval(timerId);
    setTimerId(0);
    setTimer(0);
  };

  return (
    <div className="container">
      <h1>Timer</h1>
      <span>{Math.trunc(timer / 60)} mins </span>
      <span> {timer % 60} secs</span>
      <div>
        <button onClick={startTimer}>Start</button>
        <button onClick={stopTimer}>Stop</button>
        <button onClick={resetTimer}>Reset</button>
      </div>
    </div>
  );
}

export default Timer;
