import Hero from './components/Hero'
import About from './components/About'
import Catalogue from './components/Catalogue'
import Inquiry from './components/Inquiry'


function App() {
  return (
    <div className="scroll-smooth">
      <section id="home" className="min-h-screen bg-black text-white">
        <Hero />
      </section>

      <div className="w-full flex justify-center">
        <div className="h-1 w-32 bg-gradient-to-r from-gold-400 via-navy-700 to-black rounded-full my-8 shadow-lg"></div>
      </div>

      <section id="about" className="min-h-screen bg-white text-black">
        <About />
      </section>

      <div className="w-full flex justify-center">
        <div className="h-1 w-32 bg-gradient-to-r from-navy-700 via-gold-400 to-black rounded-full my-8 shadow-lg"></div>
      </div>

      <section id="catalogue" className="min-h-screen bg-gray-100 text-black">
        <Catalogue />
      </section>

      <div className="w-full flex justify-center">
        <div className="h-1 w-32 bg-gradient-to-r from-black via-navy-700 to-gold-400 rounded-full my-8 shadow-lg"></div>
      </div>

      <section id="inquiry" className="min-h-screen bg-white text-black">
        <Inquiry />
      </section>
    </div>
  );
}

export default App;
