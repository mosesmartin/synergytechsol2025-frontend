import React, { useState } from 'react';
import './contact.css';
import Header from '../../component/Header/Header';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import contact from '../../assets/contact_synergytech.avif';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Helmet } from 'react-helmet';
const API_BASE_URL = 'https://synergytechsol2025.onrender.com';

const Contactus = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!name.trim()) newErrors.name = 'A name is required.';
    if (!email.trim()) newErrors.email = 'An email is required.';
    else if (!/^\S+@\S+\.\S+$/.test(email)) newErrors.email = 'Email is not valid.';
    if (!phone.trim()) newErrors.phone = 'A phone number is required.';
    else if (!/^\d{10}$/.test(phone)) newErrors.phone = 'Phone number should be 10 digits long.';
    if (!message.trim()) newErrors.message = 'A message is required.';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      const response = await axios.post(`${API_BASE_URL}/api/send-email`, { name, email, phone, message });
      if (response.status === 200) {
        toast.success('Inquiry Submitted Successfully!');
        setName('');
        setEmail('');
        setPhone('');
        setMessage('');
        setErrors({});
      }
    } catch (error) {
      toast.error('Failed to submit inquiry. Please try again later.');
      console.error('Error sending email:', error);
    }
  };

  return (
    <>

    <Helmet>
        <title>Contact Us | Synergy Tech Solutions</title>
        <meta
          name="description"
          content="Contact Synergy Tech Solutions for innovative web app development, digital services, and expert business solutions. Get in touch today!"
        />
        <meta
          name="keywords"
          content="Contact Synergy Tech Solutions, Business Inquiry, Web App Development, Digital Marketing Services, Custom Software Solutions"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.synergytechsol.com/ContactUs" />
      </Helmet>


      <Header backgroundImage={contact} typeText={'Synergy Tech Solutions'} typeText1={'Contact Us'} />
      <Container>
        <Row>
          <Col md={12} xs={12} className="mt-5 text-center">
            <h2>Ready to take your business to new heights?</h2>
            <p style={{ fontSize: '18px' }}>
              Get in touch with our team of experts to discuss your project requirements...
            </p>
          </Col>
        </Row>
      </Container>

      <div className="container">
        <div className="row gx-4 justify-content-center mb-5 mt-5">
          <div className="col-lg-6">
            <form onSubmit={handleSubmit}>
              {['name', 'email', 'phone', 'message'].map((field) => (
                <div className="form-floating mb-3" key={field}>
                  {field !== 'message' ? (
                    <input
                      className={`form-control ${errors[field] ? 'is-invalid' : ''}`}
                      id={field}
                      type={field === 'email' ? 'email' : field === 'phone' ? 'tel' : 'text'}
                      placeholder={`Enter your ${field}...`}
                      value={field === 'name' ? name : field === 'email' ? email : phone}
                      onChange={(e) =>
                        field === 'name'
                          ? setName(e.target.value)
                          : field === 'email'
                          ? setEmail(e.target.value)
                          : setPhone(e.target.value)
                      }
                    />
                  ) : (
                    <textarea
                      className={`form-control ${errors[field] ? 'is-invalid' : ''}`}
                      id={field}
                      placeholder="Enter your message here..."
                      style={{ height: '10rem' }}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                    ></textarea>
                  )}
                  <label htmlFor={field}>{field.charAt(0).toUpperCase() + field.slice(1)}</label>
                  {errors[field] && <div className="invalid-feedback">{errors[field]}</div>}
                </div>
              ))}

              <div className="d-grid">
                <button className="btn btn-primary btn-xl" type="submit">
                  Submit
                </button>
              </div>
            </form>
          </div>

          <div className="col-lg-4 text-center">
            <h3>Phone Number:</h3>
            <p>+1 815 219 1969</p>
            <h3>Email Address:</h3>
            <p>inquiry@synergytechsol.com</p>
          </div>
        </div>
      </div>
      <ToastContainer position="top-center" />
    </>
  );
};

export default Contactus;
