// import React from 'react';
// import Header from './components/Header';
// import Hero from './components/Hero';
// import Contact from './components/Contact';
// import NewsSection from './components/NewsSection';
// import CyberAwareness from './components/CyberAwareness';
// import PoemSection from './components/PoemSection';
// import VolunteersSection from './components/VolunteersSection';
// // Import other components as you create them, e.g.:
// // import Hero from './components/Hero';
// // import Contact from './components/Contact';

// function App() {
//   return (
//     <div>
//       <Header />
//       <Hero />
//       <Contact />
//       <NewsSection />
//       <CyberAwareness />
//       <PoemSection />
//       <VolunteersSection />

//       {/* <Hero /> */}
//       {/* <Contact /> */}
//       {/* Add other components here as you build them */}
//     </div>
//   );
// }

// export default App;



import { useRef } from 'react'; 
import Header from './components/Header';
import Hero from './components/Hero';
import Contact from './components/Contact';
import NewsSection from './components/NewsSection';
import CyberAwareness from './components/CyberAwareness';
import PoemSection from './components/PoemSection';
import VolunteersSection from './components/VolunteersSection';

function App() {
  // Create refs for each section
  const contactRef = useRef<HTMLDivElement>(null);
  const newsRef = useRef<HTMLDivElement>(null);
  const awarenessRef = useRef<HTMLDivElement>(null);
  const volunteerRef = useRef<HTMLDivElement>(null);

  return (
    <div>
      <Header
        onContactClick={() => contactRef.current?.scrollIntoView({ behavior: 'smooth' })}
        onNewsClick={() => newsRef.current?.scrollIntoView({ behavior: 'smooth' })}
        onAwarenessClick={() => awarenessRef.current?.scrollIntoView({ behavior: 'smooth' })}
        onVolunteerClick={() => volunteerRef.current?.scrollIntoView({ behavior: 'smooth' })}
      />
      <Hero />
      <div ref={contactRef}><Contact /></div>
      <div ref={newsRef}><NewsSection /></div>
      <div ref={awarenessRef}><CyberAwareness /></div>
      <PoemSection />
      <div ref={volunteerRef}><VolunteersSection /></div>
    </div>
  );
}

export default App;
