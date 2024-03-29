import { useState } from "react";
const PracButton = () => {
  const [num, setNum] = useState(0);
  const changeNum = () => setNum(num + 1);

  return (
    <>
      <button onClick={changeNum} className="test_two">
        Press me and the number goes up
        <span className="badge text-bg-secondary test_three">{num}</span>
      </button>
    </>
  );
};

export default PracButton;
