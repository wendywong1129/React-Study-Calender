import "./MyDate.css";

const MyDate = ({ date }) => {
  const month = date.toLocaleString("en-AU", { month: "short" });
  const day = date.getDate();
  console.log(date);

  return (
    <div className="date">
      <div className="month">{month}</div>
      <div className="day">{day}</div>
    </div>
  );
};

export default MyDate;
