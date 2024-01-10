import { useState } from "react";
const PracButton = () => {
  const [num, setNum] = useState(0);
  const changeNum = () => setNum(num + 1);

  return (
    <>
      <button onClick={changeNum}>Press me and the number goes up</button>
      <p>{num}</p>
    </>
  );
};

export default PracButton;
