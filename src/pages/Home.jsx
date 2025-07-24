// File: src/pages/Home.jsx
import React from 'react';
import { motion } from 'framer-motion';
import 'bootstrap/dist/css/bootstrap.min.css';

function Home() {
  return (
    <section className="min-vh-100 bg-black d-flex flex-column align-items-center justify-content-center py-5 position-relative">
      <div className="position-absolute top-0 start-0 w-100 h-100" style={{background: 'linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0.8) 100%)', zIndex: 0}}></div>
      <div className="container position-relative z-1 text-center">
        <motion.h1
          className="display-3 fw-bold text-warning mb-3"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Welcome to <span className="text-warning">16 Ways</span>
        </motion.h1>
        <motion.p
          className="lead text-light mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Excellence in Import & Export Solutions
        </motion.p>
      </div>
    </section>
  );
}

export default Home;