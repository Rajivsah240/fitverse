import React from 'react';
// import './Contact.css';

const Contact = () => {
  return (
    <div className='contact-container-main'>
      <div className="contact-container">
        <div className="contact-left">
          <h2>Get In Touch</h2>
          <p>
            Have a question or comment? Fill out the form below and we'll get back to you as soon as possible.
          </p>
        </div>
        <div className="contact-right">
          <form>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" required style={{ color: 'white' }} />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" required style={{ color: 'white' }} />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message:</label>
              <textarea id="message" name="message" rows="4" required style={{ color: 'white' }}></textarea>
            </div>
            <div className='btn-container'><button type="submit">Send</button></div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
