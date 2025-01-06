import { useState, useEffect } from "react";

function MaxCount() {
  const [count, setCount] = useState(0);
  const [timerId, setTimerId] = useState(0);
  const [time, setTime] = useState(10);

  //This is getting called twice per second??? Look into it. Bug
  useEffect(() => {
    startTimer();
  }, []);

  const addCount = () => {
    var newNum = count;
    newNum++;
    setCount(newNum);
  };

  const startTimer = () => {
    //Note setInterval runs the specific function every 1000ms or every blank seconds that is set
    if (timerId == 0) {
      setTimerId(
        setInterval(() => {
          setTime((time) => time - 1);
        }, 1000)
      );
    }
  };

  return (
    <>
      <div>{count}</div>
      <div>Time Left: {time} seconds</div>
      {time > 0 && (
        <button
          onClick={() => {
            addCount();
          }}
        >
          +
        </button>
      )}
    </>
  );
}

export default MaxCount;
