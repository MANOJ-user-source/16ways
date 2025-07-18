// File: src/pages/Catalogue.jsx
import React from 'react';
import { motion } from 'framer-motion';


const categories = [
  {
    title: 'Engine Parts',
    items: [
      'Cylinder liners & sleeves',
      'Pistons & piston rings',
      'Engine valves & valve guides',
      'Crankshafts & camshafts',
      'Timing gears',
      'Rocker arms'
    ]
  },
  {
    title: 'Transmission & Drivetrain Parts',
    items: [
      'Clutch plates',
      'Pressure plates',
      'Flywheels',
      'Gear shafts',
      'Differential components'
    ]
  },
  {
    title: 'Brake System Components',
    items: [
      'Brake drums & brake discs',
      'Brake linings & pads',
      'Brake shoes'
    ]
  },
  {
    title: 'Suspension & Steering Parts',
    items: [
      'Tie rods & tie rod ends',
      'Ball joints',
      'Suspension arms',
      'Leaf springs & U-bolts'
    ]
  },
  {
    title: 'Fasteners & Forgings',
    items: [
      'High-tensile nuts & bolts',
      'Washers, rivets',
      'Forged components for suspension and engine'
    ]
  },
  {
    title: 'Bearings & Bushings',
    items: [
      'Taper roller bearings',
      'Bushes (bronze, metal-polymer)',
      'Thrust washers'
    ]
  },
  {
    title: 'Fuel System & Filters',
    items: [
      'Diesel engine nozzles',
      'Fuel injection components',
      'Fuel filters'
    ]
  },
  {
    title: 'Casting & Machining Components',
    items: [
      'Cast iron and SG iron parts',
      'Aluminum die-cast components',
      'CNC-machined auto components'
    ]
  },
  {
    title: 'Sheet Metal Parts',
    items: [
      'Stamping parts',
      'Pressed auto parts'
    ]
  }
];

function Catalogue() {
  return (
    <div className="catalogue">
      <h1>Product Catalogue</h1>
      <div className="catalogue-grid">
        {categories.map((cat, index) => (
          <motion.div
            className="catalogue-card"
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
          >
            <h3>{cat.title}</h3>
            <ul>
              {cat.items.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Catalogue;
