import React from 'react';
import { motion } from 'framer-motion';

const productCategories = [
  {
    title: 'Engine Parts',
    items: [
      'Cylinder liners & sleeves',
      'Pistons & piston rings',
      'Engine valves & valve guides',
      'Crankshafts & camshafts',
      'Timing gears',
      'Rocker arms',
    ],
  },
  {
    title: 'Transmission & Drivetrain Parts',
    items: [
      'Clutch plates',
      'Pressure plates',
      'Flywheels',
      'Gear shafts',
      'Differential components',
    ],
  },
  {
    title: 'Brake System Components',
    items: [
      'Brake drums & brake discs',
      'Brake linings & pads',
      'Brake shoes',
    ],
  },
  {
    title: 'Suspension & Steering Parts',
    items: [
      'Tie rods & tie rod ends',
      'Ball joints',
      'Suspension arms',
      'Leaf springs & U-bolts',
    ],
  },
  {
    title: 'Fasteners & Forgings',
    items: [
      'High-tensile nuts & bolts',
      'Washers, rivets',
      'Forged components for suspension and engine',
    ],
  },
  {
    title: 'Bearings & Bushings',
    items: [
      'Taper roller bearings',
      'Bushes (bronze, metal-polymer)',
      'Thrust washers',
    ],
  },
  {
    title: 'Fuel System & Filters',
    items: [
      'Diesel engine nozzles',
      'Fuel injection components',
      'Fuel filters',
    ],
  },
  {
    title: 'Casting & Machining Components',
    items: [
      'Cast iron and SG iron parts',
      'Aluminum die-cast components',
      'CNC-machined auto components',
    ],
  },
  {
    title: 'Sheet Metal Parts',
    items: [
      'Stamping parts',
      'Pressed auto parts',
    ],
  },
];

function Hero() {
  return (
    <section className="relative min-h-screen bg-black text-white flex flex-col items-center justify-center py-8 sm:py-12">
      <div className="absolute inset-0 bg-gradient-to-b from-black/90 to-black/60 z-0" />
      <div className="relative z-10 w-full max-w-4xl mx-auto text-center px-4 sm:px-6">
        <motion.h1
          className="text-3xl sm:text-5xl md:text-7xl font-bold text-gold mb-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Welcome to <span className="text-gold">16 Ways</span>
        </motion.h1>
        <motion.p
          className="text-base sm:text-lg md:text-2xl mb-6 sm:mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Excellence in Import & Export Solutions
        </motion.p>
        <motion.a
          href="#catalogue"
          className="inline-block bg-gold hover:bg-yellow-500 text-black font-semibold px-4 sm:px-6 py-2 sm:py-3 rounded-xl transition mb-8"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Explore Catalogue
        </motion.a>
        {/* Product Categories */}
        <div className="mt-4 sm:mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {productCategories.map((cat, idx) => (
            <div key={cat.title} className="bg-white/20 backdrop-blur-lg rounded-2xl shadow-lg p-4 sm:p-6 border border-gold-100">
              <h3 className="font-playfair text-lg sm:text-xl text-gold mb-2 font-bold">{cat.title}</h3>
              <ul className="text-left text-sm sm:text-base text-white/90 list-disc list-inside">
                {cat.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hero;
