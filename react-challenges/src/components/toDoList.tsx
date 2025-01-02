import { useState } from "react";

function ToDoList() {
  const [cityList, setCityList] = useState<string[]>([]);
  const [userInput, setUserInput] = useState("");
  //By adding the ! it tells typescript that it does indeed exists not matter what.
  const city = document.getElementById("cityInput")!;

  const addCities = () => {
    var cityInput: string = (city as HTMLInputElement).value;

    if (userInput !== null || userInput !== "") {
      var localList = cityList;
      localList.push(userInput);
      cityInput = "";
      setCityList(localList);
    }
  };

  return (
    <>
      <form>
        <input
          id="cityInput"
          type="text"
          placeholder="Add a City"
          onInput={(e) => {
            setUserInput((e.target as HTMLTextAreaElement).value);
          }}
        ></input>
        <button type="button" onClick={addCities}>
          Add
        </button>
      </form>
      <ul>
        {cityList.length !== 0 &&
          cityList.map((cityName: string) => {
            return <li>{cityName}</li>;
          })}
      </ul>
    </>
  );
}

export default ToDoList;
