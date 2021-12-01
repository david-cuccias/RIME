import logo from "./logo.svg";
import "./App.css";

import RITable from "./components/RITable";

import sampleData from "./testData/sample";

function App() {
  return (
    <div className="App">
      <h1>RITable</h1>
      <RITable
        data={sampleData}
        columnMapping={[
          { key: "category", display: "Category" },
          { key: "test_id", display: "Test ID" },
          { key: "name", display: "Name" },
          { key: "pass_num", display: "Passed" },
          { key: "total_num", display: "Total" },
        ]}
      />
    </div>
  );
}

export default App;
