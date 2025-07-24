
import React from 'react';
import { useLocation, useParams, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


function ProductDetails() {
  const location = useLocation();
  const navigate = useNavigate();
  const product = location.state || {};

  return (
    <section className="min-vh-100 bg-black d-flex flex-column align-items-center justify-content-center py-5">
      <div className="container" style={{maxWidth: '600px'}}>
        <div className="card shadow-lg border-0 p-4" style={{borderRadius: '1.5rem', background: 'rgba(20,20,20,0.7)'}}>
          <button className="btn btn-link text-warning mb-2" onClick={() => navigate(-1)}>&larr; Back</button>
          <h2 className="display-5 fw-bold text-warning mb-3 text-center" style={{fontFamily: 'Playfair Display'}}>{product.name}</h2>
          <h5 className="text-light text-center mb-3">Category: <span className="text-warning">{product.category}</span></h5>
          {product.image && (
            <div className="d-flex justify-content-center mb-4">
              <img src={product.image} alt={product.name} className="img-fluid" style={{height: '180px', objectFit: 'contain', filter: 'drop-shadow(0 2px 8px #0008)'}} />
            </div>
          )}
          {/* 3D Animation Placeholder: Replace below with a 3D viewer if needed */}
          <div className="d-flex justify-content-center align-items-center mb-4" style={{height: '220px', background: 'rgba(0,0,0,0.2)', borderRadius: '1rem'}}>
            <span className="text-secondary">[3D Model Animation Here]</span>
          </div>
          <button className="btn btn-warning w-100 rounded-pill fw-bold mb-2" data-bs-toggle="collapse" data-bs-target="#detailsCollapse">Show Details</button>
          <div className="collapse" id="detailsCollapse">
            <div className="card card-body bg-dark text-light mt-3" style={{borderRadius: '1rem'}}>
              <p className="mb-0">Here you can add more stylish and animated details about the product. You can also embed a 3D viewer here for interactive models.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductDetails;
