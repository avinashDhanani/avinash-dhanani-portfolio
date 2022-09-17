import React from "react";
import { useState } from "react";
import emailjs from "emailjs-com";
import "./Contact.scss";

function Contact() {
  const [message, setMessage] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
    emailjs.sendForm(
      "service_hl90l59",
      "template_3zev95a",
      e.target,
      "tpJbNAYCdyO2ubn_4"
    ).then(res => {
      console.log(res)
    }).catch(err => {
      console.log(err)
    });
  };

  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="assets/shake.svg" alt="" />
      </div>
      <div className="right">
        <h2>Contact</h2>
        <form onSubmit={handleSubmit}>
          <input type="email" placeholder="Email" name="user_email" />
          <input type="text" placeholder="enter your name" name="name"></input>
          <textarea placeholder="Message" name="message"></textarea>
          <button type="submit">Send</button>
          {message && <span>Thanks, I`ll reply ASAP :)</span>}
        </form>
      </div>
    </div>
  );
}

export default Contact;
