// File: src/pages/Contact.jsx
import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    number: '',
    nationality: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('http://localhost/16ways-backend/submitInquiry.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const data = await res.json();
      setStatus(data.message);
      if (res.ok) {
        setFormData({ name: '', email: '', number: '', nationality: '', message: '' });
      }
    } catch (err) {
      console.error(err);
      setStatus('❌ Error submitting inquiry.');
    }
  };

  return (
    <div className="contact-form">
      <h2>Inquiry / Contact</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Your Name" required value={formData.name} onChange={handleChange} />
        <input type="email" name="email" placeholder="Your Email" required value={formData.email} onChange={handleChange} />
        <input type="text" name="number" placeholder="Phone Number" required value={formData.number} onChange={handleChange} />
        <input type="text" name="nationality" placeholder="Nationality" required value={formData.nationality} onChange={handleChange} />
        <textarea name="message" placeholder="Your Message" required value={formData.message} onChange={handleChange}></textarea>
        <button type="submit">Submit</button>
      </form>
      {status && <p>{status}</p>}
    </div>
  );
}

export default Contact;
