import { useState } from "react";
import "./App.css";
import data from "./data/data";
import StarRating from "./components/Star";

function App() {
  const noOfStar = 7;
  const [Selection, setSelection] = useState(null);
  const [enablemultiselection, setMultiSelection] = useState(false);
  const [multiple, setMultiple] = useState([]);
  const handelSingleSelection = (getcurrentId) => {
    setSelection(getcurrentId === Selection ? null : getcurrentId);
  };
  const handelMultiselection = (getcurrentId) => {
    let copyMultiple = [...multiple];
    const findexIndex = copyMultiple.indexOf(getcurrentId);
    if (findexIndex == -1) {
      copyMultiple.push(getcurrentId);
    } else {
      copyMultiple.splice(findexIndex, 1);
    }

    setMultiple(copyMultiple);
  };

  return (
    <>
      <div className="container">
        <button
          style={{
            background: `${enablemultiselection ? "#bf840e" : "#614101"}`,
          }}
          onClick={() => setMultiSelection(!enablemultiselection)}
        >
          Multiple Selection Enabled
        </button>
        <div className="content">
          {data.map((item) => (
            <div className="items" key={item.id}>
              <div
                className="title"
                onClick={
                  enablemultiselection
                    ? () => handelMultiselection(item.id)
                    : () => handelSingleSelection(item.id)
                }
              >
                <h2>{item.question}</h2>
                <span>+</span>
              </div>
              {enablemultiselection ? (
                multiple.indexOf(item.id) >= 0 && (
                  <div className="answer">{item.answer}</div>
                )
              ) : Selection === item.id ? (
                <div className="answer">{item.answer}</div>
              ) : null}
            </div>
          ))}
        </div>
        <StarRating noOfStar={noOfStar} />
      </div>
    </>
  );
}

export default App;
