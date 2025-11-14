import { CustomCursor } from './components/CustomCursor';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Education } from './components/Education';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Certifications } from './components/Certifications';
import { SoftSkillsAndLanguages } from './components/SoftSkillsAndLanguages';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <CustomCursor />
      <Header />
      <Hero />
      <Education />
      <Skills />
      <Projects />
      <Certifications />
      <SoftSkillsAndLanguages />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
