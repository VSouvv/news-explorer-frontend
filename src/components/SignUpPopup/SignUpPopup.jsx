import "./SignUpPopup.css";
import PopupWithForm from "../PopupWithForm/PopupWithForm";

export default function SignUpPopup(props) {
  return (
    <PopupWithForm
      activeModal={props.activeModal}
      modalType="sign-up"
      title="Sign up"
      submitText="Sign up"
      alternateButton={
        <p className="modal__form-swap-text">
          or{" "}
          <button
            className="modal__text-button"
            type="button"
            onClick={props.swapModal}
          >
            Sign in
          </button>
        </p>
      }
    >
      <label className="modal__input-label modal__input-label_first">
        Email
        <input
          className="modal__form-input"
          type="email"
          placeHolder="Enter Email"
        ></input>
      </label>
      <label className="modal__input-label">
        Password
        <input
          className="modal__form-input"
          type="password"
          placeHolder="Enter Password"
        ></input>
      </label>
      <label className="modal__input-label modal__input-label_last">
        Username
        <input
          className="modal__form-input"
          type="text"
          placeHolder="Enter your username"
        ></input>
      </label>
    </PopupWithForm>
  );
}
