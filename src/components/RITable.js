import react, { useState } from "react";
import "./RITable.css";

/**
 *
 * @param {*} data : the rows of data to render
 * @param {*} columnMapping : array of key/value for rendering the columns in order and data key names
 * @returns
 */

const RITable = ({ data, columnMapping }) => {
  const [sortedColumn, setSortedColum] = useState(null);
  const [sortedAsc, setSortedAsc] = useState(false);

  const handleColumnSort = (c) => {
    if (sortedColumn === c.key) {
      setSortedAsc(!sortedAsc);
    } else {
      setSortedColum(c.key);
      setSortedAsc(true);
    }
  };

  const makeHeaders = () => {
    return columnMapping.map((c) => {
      return <th onClick={() => handleColumnSort(c)}>{c.display}</th>;
    });
  };

  const makeRows = () => {
    // sort the data based on the sorted info

    return data.map((d, i) => {
      return (
        <tr key={`row_${i}`}>
          {columnMapping.map((c) => {
            return <td>{d[c.key]}</td>;
          })}
        </tr>
      );
    });
  };

  console.log("sortedColumn", sortedColumn);
  return (
    <table className="RITable">
      <thead>{makeHeaders()}</thead>
      <tbody>{makeRows()}</tbody>
    </table>
  );
};

export default RITable;
