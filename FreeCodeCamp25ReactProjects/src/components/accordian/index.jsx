//Two types of accordian
//Single selection - open once at a time
//Multiple selection - open all at once

import { useState } from "react";
import data from "./data";
import "./styles.css";

export default function Accordian() {
  const [selected, setSelected] = useState(null);
  const [enableMulti, setMultiSelect] = useState(false);
  const [getMulti, setMulti] = useState([]);

  const handleSingleSelection = (getCurrentId) => {
    setSelected(getCurrentId === selected ? null : getCurrentId);
  };

  const handleMultiSelection = (getCurrentId) => {
    let copyMulti = [...getMulti];
    const findIndex = copyMulti.indexOf(getCurrentId);

    if (findIndex === -1) copyMulti.push(getCurrentId);
    else copyMulti.splice(getCurrentId, 1);

    setMulti(copyMulti);
  };

  return (
    <div className="wrapper">
      {/* !enableMulti is a great + quick way to toggle something */}
      <button onClick={() => setMultiSelect(!enableMulti)}>
        Enable Multi Selection
      </button>
      <div className="accordian">
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div className="item">
              <div
                onClick={
                  enableMulti
                    ? () => handleMultiSelection(dataItem.id)
                    : () => handleSingleSelection(dataItem.id)
                }
                className="title"
              >
                <h3>{dataItem.question}</h3>
                <span>+</span>
              </div>
              {selected === dataItem.id ||
              getMulti.indexOf(dataItem.id) !== -1 ? (
                <div className="content">{dataItem.answer}</div>
              ) : null}
            </div>
          ))
        ) : (
          <div>No data found!!!!</div>
        )}
      </div>
    </div>
  );
}
