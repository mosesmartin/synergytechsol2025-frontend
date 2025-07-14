import React, { useState } from 'react';
import './contact.css';
import Header from '../../component/Header/Header';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import contact from '../../assets/contact_synergytech.avif'

const Contactus = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [messageError, setMessageError] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Reset error messages
    setNameError('');
    setEmailError('');
    setPhoneError('');
    setMessageError('');

    // Perform form validation
    if (name.trim() === '') {
      setNameError('A name is required.');
      return;
    }

    if (email.trim() === '') {
      setEmailError('An email is required.');
      return;
    }

    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setEmailError('Email is not valid.');
      return;
    }

    if (phone.trim() === '') {
      setPhoneError('A phone number is required.');
      return;
    }

    if (!/^\d{10}$/.test(phone)) {
      setPhoneError('Phone number should be 10 digits long.');
      return;
    }

    if (message.trim() === '') {
      setMessageError('A message is required.');
      return;
    }

    // Log form data to the console
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Phone:', phone);
    console.log('Message:', message);

    // Clear form fields
    setName('');
    setEmail('');
    setPhone('');
    setMessage('');

    // If all validations pass, you can submit the form here
    // For demonstration, we'll just show a success message
    setIsSubmitted(true);

    // Prepare the form data
    const formData = {
      name: name,
      email: email,
      phone: phone,
      message: message
    };

    // Send the form data to the server
    fetch('/api/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
      .then(response => {
        if (response.ok) {
          setIsSubmitted(true);
        } else {
          // Handle error case
        }
      })
      .catch(error => {
        // Handle error case
      });
  };

  return (
    <>
      <Header
        backgroundImage={contact}
        typeText={'Synergy Tech Solutions'}
        typeText1={'Contact Us'}
      />
      <Container>
        <Row>
          <Col md={12} xs={12} className="mt-5 text-center">
            <h2>Ready to take your business to new heights?</h2>

            <p style={{fontSize:'18px'}}>
              Get in touch with our team of experts to discuss your project requirements. We are here to answer your
              questions, provide insights, and offer solutions tailored to your specific needs. Reach out to us through
              the contact form below, or give us a call at +1 815 219 1969. Let's embark on a journey of digital
              transformation together!
            </p>
          </Col>
        </Row>
      </Container>

      <div className="container">
        <div className="row md-3 gx-4 gx-lg-5 justify-content-center mb-5 mt-5">
          <div className="col-lg-6">
            <form onSubmit={handleSubmit}>
              <div className={`form-floating mb-3 ${nameError ? 'has-error' : ''}`}>
                <input
                  className={`form-control ${nameError ? 'is-invalid' : ''}`}
                  id="name"
                  type="text"
                  placeholder="Enter your name..."
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <label htmlFor="name">Full name</label>
                {nameError && <div className="invalid-feedback">{nameError}</div>}
              </div>

              <div className={`form-floating mb-3 ${emailError ? 'has-error' : ''}`}>
                <input
                  className={`form-control ${emailError ? 'is-invalid' : ''}`}
                  id="email"
                  type="email"
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <label htmlFor="email">Email address</label>
                {emailError && <div className="invalid-feedback">{emailError}</div>}
              </div>

              <div className={`form-floating mb-3 ${phoneError ? 'has-error' : ''}`}>
                <input
                  className={`form-control ${phoneError ? 'is-invalid' : ''}`}
                  id="phone"
                  type="tel"
                  placeholder="(123) 456-7890"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
                <label htmlFor="phone">Phone number</label>
                {phoneError && <div className="invalid-feedback">{phoneError}</div>}
              </div>

              <div className={`form-floating mb-3 ${messageError ? 'has-error' : ''}`}>
                <textarea
                  className={`form-control ${messageError ? 'is-invalid' : ''}`}
                  id="message"
                  placeholder="Enter your message here..."
                  style={{ height: '10rem' }}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
                <label htmlFor="message">Message</label>
                {messageError && <div className="invalid-feedback">{messageError}</div>}
              </div>

              {isSubmitted ? (
                <div className="text-center mb-3">
                  <div className="fw-bolder">Form submission successful!</div>
                </div>
              ) : null}

              <div className="d-grid">
                <button className="btn btn-primary btn-xl" type="submit">
                  Submit
                </button>
              </div>
            </form>
          </div>
          <div className="col-lg-4 justify-content-center">
            <div className="phone-number text-center">
              <h3>Phone Number:</h3>
              <i className="bi-phone fs-2 mb-3 text-muted"></i>
              <p>+1 815 219 1969</p>
            </div>
            <div className="phone-number text-center">
              <h3>Email Address:</h3>
              <i className="bi bi-envelope" style={{ fontSize: '33px' }}></i>
              <p>sales@synergytechsol.com</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contactus;
