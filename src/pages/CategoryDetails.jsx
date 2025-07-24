import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function CategoryDetails() {
  const location = useLocation();
  const navigate = useNavigate();
  const { title, products } = location.state || {};

  return (
    <section className="min-vh-100 bg-black d-flex flex-column align-items-center justify-content-center py-5">
      <div className="container">
        <button className="btn btn-link text-warning mb-4" onClick={() => navigate(-1)}>&larr; Back</button>
        <h1 className="display-4 fw-bold text-warning mb-5 text-center" style={{fontFamily: 'Playfair Display'}}>{title}</h1>
        <div className="row g-4 justify-content-center">
          {products && products.map((product, i) => (
            <div key={product.name} className="col-12 col-md-6 col-lg-4">
              <div className="card shadow-lg border-0 h-100" style={{
                background: 'rgba(20,20,20,0.7)',
                borderRadius: '1.5rem',
                backdropFilter: 'blur(16px)',
                WebkitBackdropFilter: 'blur(16px)',
                boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
                border: '1px solid rgba(255,255,255,0.18)'
              }}>
                <div className="card-body d-flex flex-column align-items-center">
                  <img src={product.image} alt={product.name} className="img-fluid mb-3" style={{height: '100px', objectFit: 'contain', filter: 'drop-shadow(0 2px 8px #0008)'}} />
                  <h3 className="card-title text-warning fw-bold mb-2 text-center" style={{fontFamily: 'Playfair Display'}}>{product.name}</h3>
                  <button
                    className="btn btn-outline-warning mt-auto rounded-pill shadow-sm text-decoration-none text-center"
                    onClick={() => navigate(`/product/${encodeURIComponent(product.name)}`, { state: { ...product, category: title } })}
                  >
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CategoryDetails;
