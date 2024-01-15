import "./styles/box.css";

const HelloWorld = () => {
  return (
    <>
      <p className="card text-center" onClick={HelloAlert}>
        Hello World
      </p>
    </>
  );
};

const HelloAlert = () => {
  alert("Hello There");
};

export default HelloWorld;
