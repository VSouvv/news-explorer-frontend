import "./Popup.css";
import closeButton from "../../assets/close.svg";

export default function Popup(props) {
  return (
    <div
      className={`modal modal_type_${props.modalType} ${
        props.activeModal === props.modalType && "modal_active"
      }`}
    >
      <div className="modal__container">
        <img className="modal__close" src={closeButton} />
        <h3 className="modal__title">{props.title}</h3>
        {props.children}
      </div>
    </div>
  );
}
