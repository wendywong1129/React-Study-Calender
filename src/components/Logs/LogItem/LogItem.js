import { useState } from "react";
import MyDate from "./MyDate/MyDate";
import Card from "../../UI/Card/Card";
import ConfirmModal from "../../UI/ConfirmModal/ConfirmModal";
import "./LogItem.css";

const LogItem = ({ date, desc, time, onDelLog }) => {
  const [showConfirm, setShowConfirm] = useState(false);

  const deleteItemHandler = () => {
    setShowConfirm(true);
  };

  const cancelHandler = () => {
    setShowConfirm(false);
  };

  const okHandler = () => {
    onDelLog();
  };

  return (
    <Card className="item">
      {showConfirm && (
        <ConfirmModal
          confirmText="Are you sure to delete?"
          onOk={okHandler}
          onCancel={cancelHandler}
        />
      )}

      <MyDate date={date} />

      <div className="content">
        <h2 className="desc">{desc}</h2>
        <div className="time">{time} mins</div>
      </div>

      <div>
        <div className="delete" onClick={deleteItemHandler}>
          ×
        </div>
      </div>
    </Card>
  );
};

export default LogItem;
