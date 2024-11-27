import "./SignUpSuccessPopup.css";
import Popup from "../Popup/Popup";

export default function SignUpSuccessPopup(props) {
  return (
    <Popup
      modalType="signup-success"
      title="Registration successfully completed!"
      activeModal={props.activeModal}
    >
      <button className="modal__text-button signup-success__signin-button">
        Sign in
      </button>
    </Popup>
  );
}
