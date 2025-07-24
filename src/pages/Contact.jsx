import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

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
    <section className="min-vh-100 bg-black d-flex flex-column align-items-center justify-content-center py-5">
      <div className="container" style={{maxWidth: '500px'}}>
        <div className="card shadow-lg border-0 p-4" style={{borderRadius: '1.5rem', background: 'rgba(20,20,20,0.7)'}}>
          <h2 className="h3 fw-bold text-warning mb-3 text-center" style={{fontFamily: 'Playfair Display'}}>Contact Our Team</h2>
          <p className="mb-4 text-light text-center" style={{fontFamily: 'Inter'}}>Have a question or want to start a partnership? Fill out the form below and our global team will get back to you promptly.</p>
          <form onSubmit={handleSubmit} className="row g-3">
            <div className="col-12">
              <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Your Name" className="form-control form-control-lg rounded-pill" required />
            </div>
            <div className="col-12">
              <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Your Email" className="form-control form-control-lg rounded-pill" required />
            </div>
            <div className="col-12">
              <input type="text" name="number" value={formData.number} onChange={handleChange} placeholder="Phone Number" className="form-control form-control-lg rounded-pill" required />
            </div>
            <div className="col-12">
              <input type="text" name="nationality" value={formData.nationality} onChange={handleChange} placeholder="Nationality" className="form-control form-control-lg rounded-pill" required />
            </div>
            <div className="col-12">
              <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Your Message" className="form-control form-control-lg rounded-4" rows={4} required></textarea>
            </div>
            <div className="col-12">
              <button type="submit" className="btn btn-outline-warning btn-lg w-100 rounded-pill shadow-sm">Submit Inquiry</button>
            </div>
          </form>
          {status && <p className="mt-3 text-success fw-semibold text-center">{status}</p>}
        </div>
      </div>
    </section>
  );
}

export default Contact;
