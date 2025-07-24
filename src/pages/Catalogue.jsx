import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const productCategories = [
  {
    title: 'Engine Parts',
    image: '/images/Engine part.png',
    products: [
      { name: 'Cylinder liners & sleeves', image: '/images/cylinder-liners.png' },
      { name: 'Pistons & piston rings', image: '/images/Pistons & Pistons Rings.png' },
      { name: 'Engine valves & valve guides', image: '/images/Engine Valves.png' },
      { name: 'Crankshafts & camshafts', image: '/images/Crankshaft & camshafts.png' },
      { name: 'Timing gears', image: '/images/Timing Gears.png' },
      { name: 'Rocker arms', image: '/images/Rocker arms.png' },
    ],
  },
  {
    title: 'Transmission & Drivetrain Parts',
    image: '/images/Transmission & Drivetrain Parts.png',
    products: [
      { name: 'Clutch plates', image: '/images/Clutch plate.png' },
      { name: 'Pressure plates', image: '/images/Pressure plates.png' },
      { name: 'Flywheels', image: '/images/Flywheels.png' },
      { name: 'Gear shafts', image: '/images/Gear Shafts.png' },
      { name: 'Differential components', image: '/images/Differential components.png' },
    ],
  },
  {
    title: 'Brake System Components',
    image: '/images/Brake System Components.png',
    products: [
      { name: 'Brake drums & brake discs', image: '/images/Brake drums & brake discs.png' },
      { name: 'Brake linings & pads', image: '/images/Break linings & pads.png' },
      { name: 'Brake shoes', image: '/images/Brake shoes.png' },
    ],
  },
  {
    title: 'Suspension & Steering Parts',
    image: '/images/Suspension & Steering Parts.png',
    products: [
      { name: 'Tie rods & tie rod ends', image: '/images/Tie rods & tie rod ends.png' },
      { name: 'Ball joints', image: '/images/Ball joints.png' },
      { name: 'Suspension arms', image: '/images/Suspension arms.png' },
      { name: 'Leaf springs & U-bolts', image: '/images/Leaf spring & U Bolt.png' },
    ],
  },
  {
    title: 'Fasteners & Forgings',
    image: '/images/Fasteners & Forgings.png',
    products: [
      { name: 'High-tensile nuts & bolts', image: '/images/High-tensile nuts & bolts.png' },
      { name: 'Washers, rivets', image: '/images/Washers, rivets.png' },
      { name: 'Forged components for suspension and engine', image: '/images/Forged components for suspension and engine.png' },
    ],
  },
  {
    title: 'Bearings & Bushings',
    image: '/images/Bearings & Bushings.png',
    products: [
      { name: 'Taper roller bearings', image: '/images/Taper roller bearings.png' },
      { name: 'Bushes (bronze, metal-polymer)', image: '/images/Bushes (bronze, metal-polymer).png' },
      { name: 'Thrust washers', image: '/images/Thrust washers.png' },
    ],
  },
  {
    title: 'Fuel System & Filters',
    image: '/images/Fuel System & Filters.png',
    products: [
      { name: 'Diesel engine nozzles', image: '/images/Diesel engine nozzles.png' },
      { name: 'Fuel injection components', image: '/images/Fuel injection components.png' },
      { name: 'Fuel filters', image: '/images/Fuel filters.png' },
    ],
  },
  {
    title: 'Casting & Machining Components',
    image: '/images/Casting & Machining Components.png',
    products: [
      { name: 'Cast iron and SG iron parts', image: '/images/Cast iron and SG iron parts.png' },
      { name: 'Aluminum die-cast components', image: '/images/Aluminum die-cast components.png' },
      { name: 'CNC-machined auto components', image: '/images/CNC-machined auto components.png' },
    ],
  },
  {
    title: 'Sheet Metal Parts',
    image: '/images/Sheet Metal Parts.png',
    products: [
      { name: 'Stamping parts', image: '/images/Stamping parts.png' },
      { name: 'Pressed auto parts', image: '/images/Pressed auto parts.png' },
    ],
  },
];

function Catalogue() {
  return (
    <>

      {/* Main Catalogue Section */}
      <section id="products" className="min-vh-100 bg-black d-flex flex-column align-items-center justify-content-center py-5" style={{paddingTop: '80px'}}>
        <div className="container-fluid px-0 px-md-5">
          <motion.h1
            className="display-4 fw-bold text-center text-warning mb-3"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Product Catalogue
          </motion.h1>
          <motion.p
            className="lead text-center text-light mb-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            Explore our range of premium automotive parts and components.
          </motion.p>
          <div className="row g-4 justify-content-center">
            {productCategories.map((cat, idx) => (
              <div key={cat.title} className="col-12 col-md-6 col-lg-4">
                <div className="card shadow-lg border-0 h-100" style={{
                  background: 'rgba(20,20,20,0.7)',
                  borderRadius: '1.5rem',
                  backdropFilter: 'blur(16px)',
                  WebkitBackdropFilter: 'blur(16px)',
                  boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
                  border: '1px solid rgba(255,255,255,0.18)'
                }}>
                  <div className="card-body d-flex flex-column align-items-center">
                    <img src={cat.image} alt={cat.title} className="img-fluid mb-3" style={{height: '120px', objectFit: 'contain', filter: 'drop-shadow(0 2px 8px #0008)'}} />
                    <h3 className="card-title text-warning fw-bold mb-2 text-center" style={{fontFamily: 'Playfair Display'}}>{cat.title}</h3>
                    <Link
                      to={`/category/${encodeURIComponent(cat.title)}`}
                      state={{
                        title: cat.title,
                        products: cat.products
                      }}
                      className="btn btn-outline-warning mt-auto rounded-pill shadow-sm text-decoration-none text-center"
                    >
                      View Products
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Catalogue;
