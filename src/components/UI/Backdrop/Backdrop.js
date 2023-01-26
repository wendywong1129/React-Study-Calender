import "./Backdrop.css";
import ReactDOM from "react-dom";

// 获取backdrop的根元素
const backdropRoot = document.getElementById("backdrop-root");

const Backdrop = ({ children }) => {
  return ReactDOM.createPortal(
    <div className="backdrop">{children}</div>,
    backdropRoot
  );
};

export default Backdrop;
