import { useState } from "react";

function ToDoList() {
  const [cityList, setCityList] = useState<string[]>([]);
  //By adding the ! it tells typescript that it does indeed exists not matter what.
  const city = document.getElementById("cityInput")!;

  const addCities = () => {
    var cityInput: string = (city as HTMLInputElement).value;

    if (cityInput !== null || cityInput !== "") {
      var localList = cityList;
      localList.push(cityInput);

      setCityList(localList);
    }
    console.log(cityList);
  };

  return (
    <>
      <form>
        <input id="cityInput" type="text" placeholder="Add a City"></input>
        <button type="button" onClick={addCities}>
          Add
        </button>
      </form>
    </>
  );
}

export default ToDoList;
