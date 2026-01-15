import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Education from './components/Education';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Education />
      <Contact />
    </div>
  );
}

export default App;
