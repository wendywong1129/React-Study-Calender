import { useState } from "react";
import Logs from "./components/Logs/Logs";
import LogsForm from "./components/LogsForm/LogsForm";
import "./App.css";

const App = () => {
  const [logsData, setLogsData] = useState([
    {
      id: "001",
      date: new Date(2021, 1, 20, 18, 30),
      desc: "Learn HTML",
      time: 30,
    },
    {
      id: "002",
      date: new Date(2022, 2, 10, 12, 30),
      desc: "Learn CSS",
      time: 20,
    },
    {
      id: "003",
      date: new Date(2022, 2, 11, 11, 30),
      desc: "Learn JavaScript",
      time: 40,
    },
    {
      id: "004",
      date: new Date(2022, 2, 15, 10, 30),
      desc: "Learn React",
      time: 80,
    },
  ]);

  const saveLogHandler = (newLog) => {
    newLog.id = Date.now() + "";
    setLogsData([newLog, ...logsData]);
  };

  const delLogById = (id) => {
    const newLog = logsData.filter((item) => item.id !== id);
    setLogsData(newLog);
  };

  return (
    <div className="app">
      <LogsForm onSaveLog={saveLogHandler} />
      <Logs logsData={logsData} onDelLog={delLogById}/>
    </div>
  );
};

export default App;
