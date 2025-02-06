import { useEffect } from "react";
import { useFormAndValidation } from "../../hooks/useFormAndValidation";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import "../ModalWithForm/ModalWithForm.css";

function SignUpPopup({ isOpen, onClose, onSignInClick, onSignUp }) {
  const { values, handleChange, errors, resetForm } = useFormAndValidation();

  useEffect(() => {
    if (isOpen) {
      resetForm();
    }
  }, [isOpen, resetForm]);

  const handleSignUpSubmit = (evt) => {
    evt.preventDefault();
    onSignUp(values);
  };

  return (
    <ModalWithForm
      isOpen={isOpen}
      onClose={onClose}
      onLinkClick={onSignInClick}
      title="Sign up"
      buttonText="Sign up"
      showLink={true}
      linkText="Sign in"
      onSubmit={handleSignUpSubmit}
    >
      <label
        htmlFor="email-signup"
        className="modal__label modal__label--email"
      >
        Email <span className="modal__error">{errors.email}</span>
        <input
          type="email"
          className="modal__input"
          id="email-signup"
          name="email"
          placeholder="Enter email"
          required
          value={values.email || ""}
          onChange={handleChange}
        />
      </label>

      <label
        htmlFor="password-signup"
        className="modal__label modal__label--password"
      >
        Password <span className="modal__error">{errors.password}</span>
        <input
          type="password"
          className="modal__input"
          id="password-signup"
          name="password"
          placeholder="Enter password"
          required
          value={values.password || ""}
          onChange={handleChange}
        />
      </label>

      <label
        htmlFor="username-signup"
        className="modal__label modal__label--username"
      >
        Username <span className="modal__error">{errors.username}</span>
        <input
          type="text"
          className="modal__input"
          id="username-signup"
          name="username"
          placeholder="Enter username"
          required
          value={values.username || ""}
          onChange={handleChange}
        />
      </label>
    </ModalWithForm>
  );
}

export default SignUpPopup;
