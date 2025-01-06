import { useState, useEffect } from "react";

function ToDoList() {
  const [cityList, setCityList] = useState<string[]>([]);
  const [userInput, setUserInput] = useState("");
  //By adding the ! it tells typescript that it does indeed exists not matter what.

  useEffect(() => {
    () => {
      setCityList([...cityList]);
    };
  }, [cityList]);

  const addCities = () => {
    if (userInput !== null && userInput !== "") {
      setCityList([...cityList, userInput]);
      setUserInput("");
    }
  };
  //NOTE IN ORDER TO MAKE CHANGES TO ARRAYS MAKE COPIES WITH ...
  //DO NOT TRY TO create a new list and then mutating it. Instead make a direct copy to the original.
  const removeCities = (numIndex: number) => {
    var localList = [...cityList];
    localList.splice(numIndex, 1);
    setCityList(localList);
  };

  //When making changes to a specific item it is better to use {state} as a specific item change.
  return (
    <>
      <form>
        <input
          id="cityInput"
          type="text"
          placeholder="Add a City"
          value={userInput}
          onInput={(e) => {
            setUserInput((e.target as HTMLTextAreaElement).value);
          }}
        ></input>
        <button
          type="button"
          onClick={() => {
            addCities();
          }}
        >
          Add
        </button>
      </form>
      <ul>
        {cityList.map((cityName: string, index: number) => {
          return (
            <li>
              {cityName}
              <button
                type="button"
                onClick={() => {
                  removeCities(index);
                }}
              >
                X
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default ToDoList;
