import { MouseEvent } from "react";
function ListGroup() {
  let names = ["Rose", "Red", "Lily", "Violet", "Rikki", "Eclipse", "Zero"];

  //Event handler
  const handleClick = (event: MouseEvent) => console.log(event);

  //Both names.length conditional functiosn do the same thing within the code
  //Works as true and true == true
  //Otherwise it is false and true which is equal to false
  return (
    <>
      <h1>Character Names</h1>
      {names.length === 0 ? <p>No Character Found</p> : null}
      {names.length === 0 && <p>No Character Found</p>}
      <ul className="list-group">
        {names.map((item) => (
          <li className="list-group-item" key={item} onClick={handleClick}>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
