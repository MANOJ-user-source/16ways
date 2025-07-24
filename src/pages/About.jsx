import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function About() {
  return (
    <section className="min-vh-100 bg-black d-flex flex-column align-items-center justify-content-center py-5">
      <div className="container text-center">
        <h1 className="display-4 fw-bold text-warning mb-3" style={{fontFamily: 'Playfair Display'}}>About Us</h1>
        <p className="lead text-light mb-4" style={{fontFamily: 'Inter'}}>
          <span className="fw-bold text-warning">16 Ways</span> is a global import/export business specializing in premium automotive parts. Our mission is to deliver excellence, reliability, and innovation to clients worldwide. With years of experience and a vast network, we ensure seamless logistics and top-quality products for every customer.
        </p>
        <div className="card shadow-lg border-0 mx-auto" style={{maxWidth: '500px', background: 'rgba(20,20,20,0.7)', borderRadius: '1.5rem'}}>
          <div className="card-body">
            <h2 className="h4 fw-bold text-warning mb-2" style={{fontFamily: 'Playfair Display'}}>Our Vision</h2>
            <p className="mb-0 text-light" style={{fontFamily: 'Inter'}}>
              To be the trusted partner for automotive solutions, connecting markets and driving progress through quality and service.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
