import React from "react";
import "./SignupSuccessPopup.css"; 
  if (!isOpen) return null; 

  return (
    <div className="popup-overlay">
      <div className="popup">
        <button className="popup__close-btn" onClick={onClose}>
          &times;
        </button>
        <h2 className="popup__title">Signup Successful!</h2>
        <p className="popup__message">You have successfully signed up.</p>
        <button className="popup__button" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
}

export default SignupSuccessPopup;
