import React from 'react';
import portraitImage from '../../assets/images/omcewan.jpg';

function Contact() {
  return (
    <>
      <div className="about-portrait">
        <img src={portraitImage} alt="Orlando's Portrait"></img>
      </div>
      <form className="contact-me">
        <h2> Contact me </h2>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" name="name" />
        </div>

        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" name="email" />
        </div>

        <div>
          <label htmlFor="message">Message:</label>
          <textarea name="message" rows="5"></textarea>
          <button type="submit">Submit</button>
        </div>
      </form>
    </>
  );
}

export default Contact;
