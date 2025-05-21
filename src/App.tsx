import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Contact from './components/Contact';
import NewsSection from './components/NewsSection';
import CyberAwareness from './components/CyberAwareness';
import PoemSection from './components/PoemSection';
import VolunteersSection from './components/VolunteersSection';
// Import other components as you create them, e.g.:
// import Hero from './components/Hero';
// import Contact from './components/Contact';

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Contact />
      <NewsSection />
      <CyberAwareness />
      <PoemSection />
      <VolunteersSection />

      {/* <Hero /> */}
      {/* <Contact /> */}
      {/* Add other components here as you build them */}
    </div>
  );
}

export default App;
