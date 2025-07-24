
import Hero from './pages/Home';
import About from './pages/About';
import Catalogue from './pages/Catalogue';
import Inquiry from './pages/Contact';
import ProductDetails from './pages/ProductDetails';
import CategoryDetails from './pages/CategoryDetails';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <div className="scroll-smooth" style={{background: '#111', minHeight: '100vh', width: '100vw'}}>
        {/* Navigation Bar - now global */}
        <nav className="navbar navbar-expand-lg navbar-dark bg-black shadow-sm" style={{backdropFilter: 'blur(12px)', background: '#111'}}>
          <div className="container-fluid px-4">
            <a className="navbar-brand fw-bold text-warning" href="#home" style={{fontFamily: 'Playfair Display'}}>16 Ways</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active text-warning" aria-current="page" href="#products">Products</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-warning" href="#about">About</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-warning" href="#contact">Get in Touch</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <Routes>
          <Route path="/" element={
            <>
              <section id="home" className="min-h-screen bg-black text-light">
                <Hero />
              </section>
              <div className="w-full flex justify-center">
                <div className="h-1 w-32 bg-gradient-to-r from-warning via-black to-black rounded-full my-8 shadow-lg"></div>
              </div>
              <section id="about" className="min-h-screen bg-black text-light">
                <About />
              </section>
              <div className="w-full flex justify-center">
                <div className="h-1 w-32 bg-gradient-to-r from-black via-warning to-black rounded-full my-8 shadow-lg"></div>
              </div>
              <section id="products" className="min-h-screen bg-black text-light">
                <Catalogue />
              </section>
              <div className="w-full flex justify-center">
                <div className="h-1 w-32 bg-gradient-to-r from-black via-warning to-black rounded-full my-8 shadow-lg"></div>
              </div>
              <section id="contact" className="min-h-screen bg-black text-light">
                <Inquiry />
              </section>
            </>
          } />
          <Route path="/category/:title" element={<CategoryDetails />} />
          <Route path="/product/:title" element={<ProductDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
