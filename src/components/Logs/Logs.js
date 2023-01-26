import { useState } from "react";
import LogFilter from "./LogFilter/LogFilter";
import LogItem from "./LogItem/LogItem";
import Card from "../UI/Card/Card";
import "./Logs.css";

const Logs = ({ logsData, onDelLog }) => {
  const [year, setYear] = useState(2022);

  const filterData = logsData.filter(
    (item) => item.date.getFullYear() === year
  );

  const changeYearHandler = (year) => {
    setYear(year);
  };

  let logItemData = filterData.map((item) => (
    // onDelLog利用匿名函数将item.id的值闭包到函数里面，在LogItem组件中不需要传递item.id的值，直接调用函数
    <LogItem key={item.id} {...item} onDelLog={() => onDelLog(item.id)} />
  ));

  if (logItemData.length === 0) {
    logItemData = <p className="no-logs">No logs!</p>;
  }

  return (
    <Card className="logs">
      <LogFilter year={year} onYearChange={changeYearHandler} />
      {logItemData}
    </Card>
  );
};

export default Logs;
