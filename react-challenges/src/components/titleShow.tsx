import { useState } from "react";
function TitleShow() {
  const [show, setShow] = useState(true);

  return (
    <>
      {show === true && <h1>Hello CodeSandbox</h1>}
      <h2>Start editing to see some magic happen!</h2>
      <button
        onClick={() => {
          setShow(!show);
        }}
      >
        {" "}
        Hide Title
      </button>
    </>
  );
}

export default TitleShow;
