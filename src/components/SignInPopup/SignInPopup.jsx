import "./SignInPopup.css";
import PopupWithForm from "../PopupWithForm/PopupWithForm";

export default function SignInPopup(props) {
  return (
    <PopupWithForm
      activeModal={props.activeModal}
      modalType="sign-in"
      title="Sign in"
      submitText="Sign in"
      alternateButton={
        <p className="modal__form-swap-text">
          or{" "}
          <button
            className="modal__text-button"
            type="button"
            onClick={props.swapModal}
          >
            Sign up
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
      <label className="modal__input-label modal__input-label_last">
        Password
        <input
          className="modal__form-input"
          type="password"
          placeHolder="Enter Password"
        ></input>
      </label>
    </PopupWithForm>
  );
}
