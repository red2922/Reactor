import { useState } from "react";
//{items: [], heading: string}
interface Props {
  items: string[];
  heading: string;
}

function ListGroup({ items, heading }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(-1);
  //arr[0]; Variable (selectedIndex)
  //arr[1]; Updater Function
  //Event handler

  //Both names.length conditional functiosn do the same thing within the code
  //Works as true and true == true
  //Otherwise it is false and true which is equal to false
  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 ? <p>No Character Found</p> : null}
      {items.length === 0 && <p>No Character Found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
