import "./PopupWithForm.css";
import Popup from "../Popup/Popup";

export default function PopupWithForm(props) {
  return (
    <Popup
      title={props.title}
      modalType={props.modalType}
      activeModal={props.activeModal}
    >
      <form className="modal__form">
        {props.children}
        <button className="modal__form-submit" type="submit">
          {props.submitText}
        </button>
        {props.alternateButton}
      </form>
    </Popup>
  );
}
