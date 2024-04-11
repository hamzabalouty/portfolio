import React, { useEffect } from "react";
import "../styles/Contact.css";
import { BiLogoTelegram } from "react-icons/bi";
import { AiOutlineMail } from "react-icons/ai";
import { BsTelephoneFill, BsFillClockFill } from "react-icons/bs";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="contact">
      <div className="contact-form">
        <div className="contact-title">
            <h4>SEND US A MESSAGE</h4>
        </div>
        
        <div className="contact-form-container">
          <div className="contact-form-inputs">
            <div className="contact-form-input">
              <input type="text" placeholder="Name" />
            </div>
            <div className="contact-form-input">
              <input type="text" placeholder="Email" />
            </div>
            <div className="contact-form-input">
              <input type="text" placeholder="Phone" />
            </div>
          </div>
          <div className="contact-form-right">
            <div className="contact-form-textarea">
              <textarea placeholder="Message"></textarea>
            </div>
            <button>Send</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;