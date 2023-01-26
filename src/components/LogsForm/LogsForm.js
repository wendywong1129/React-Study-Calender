import { useState } from "react";
import Card from "../UI/Card/Card";
import "./LogsForm.css";

const LogsForm = ({ onSaveLog }) => {
  /*
    const [inputDate, setInputDate] = useState("");
    const [inputDesc, setInputDesc] = useState("");
    const [inputTime, setInputTime] = useState("");
  */
  const [formData, setFormData] = useState({
    inputDate: "",
    inputDesc: "",
    inputTime: "",
  });

  const dateChangeHandler = (e) => {
    // setInputDate(e.target.value);
    setFormData({
      ...formData,
      inputDate: e.target.value,
    });
  };

  const descChangeHandler = (e) => {
    // setInputDesc(e.target.value);
    setFormData({
      ...formData,
      inputDesc: e.target.value,
    });
  };

  const timeChangeHandler = (e) => {
    // setInputTime(e.target.value);
    setFormData({
      ...formData,
      inputTime: e.target.value,
    });
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();

    /*
    const newLog = {
      date: new Date(inputDate),
      desc: inputDesc,
      time: +inputTime,
    };
    */
    const newLog = {
      date: new Date(formData.inputDate),
      desc: formData.inputDesc,
      time: +formData.inputTime,
    };

    onSaveLog(newLog);

    /*
    setInputDate("");
    setInputDesc("");
    setInputTime("");
    */
    setFormData({
      inputDate: "",
      inputDesc: "",
      inputTime: "",
    });
  };

  return (
    <Card className="logs-form">
      <form onSubmit={formSubmitHandler}>
        <div className="form-item">
          <label htmlFor="date">Date</label>
          <input
            id="date"
            type="date"
            value={formData.inputDate}
            onChange={dateChangeHandler}
          />
        </div>
        <div className="form-item">
          <label htmlFor="desc">Content</label>
          <input
            id="desc"
            type="text"
            value={formData.inputDesc}
            onChange={descChangeHandler}
          />
        </div>
        <div className="form-item">
          <label htmlFor="time">Time Length</label>
          <input
            id="time"
            type="number"
            value={formData.inputTime}
            onChange={timeChangeHandler}
          />
        </div>
        <div className="form-btn">
          <button>ADD</button>
        </div>
      </form>
    </Card>
  );
};

export default LogsForm;
