import Card from "../Card/Card";
import Backdrop from "../Backdrop/Backdrop";
import "./ConfirmModal.css";

const ConfirmModal = ({ confirmText, onOk, onCancel }) => {
  return (
    <Backdrop>
      <Card className="confirmModal">
        <div className="confirmText">
          <p>{confirmText}</p>
        </div>
        <div className="confirmButton">
          <button className="okButton" onClick={onOk}>
            Confirm
          </button>
          <button className="noButton" onClick={onCancel}>
            Cancel
          </button>
        </div>
      </Card>
    </Backdrop>
  );
};

export default ConfirmModal;
