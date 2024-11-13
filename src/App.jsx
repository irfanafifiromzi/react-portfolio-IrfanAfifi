import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';

const App = () => {
  const circleRef1 = useRef(null);
  const circleRef2 = useRef(null);

  useEffect(() => {
    // GSAP animation for the first circle
    gsap.to(circleRef1.current, {
      x: 500,
      y: 300,
      duration: 5,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    // GSAP animation for the second circle
    gsap.to(circleRef2.current, {
      x: -500,
      y: -100,
      duration: 5,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });
  }, []);

  return (
    <div className="relative">
      {/* Background Layer */}
      <div className="fixed top-0 -z-10 h-full w-full bg-white"> {/* Changed to fixed */}
        {/* First Blurred Circle */}
        <div
          ref={circleRef1}
          className="absolute h-[1200px] w-[1200px] left-10 top-20 rounded-full bg-[rgba(141,69,223,0.63)] opacity-50 blur-[80px]"
        ></div>
        {/* Second Blurred Circle */}
        <div
          ref={circleRef2}
          className="absolute h-[1200px] w-[1200px] right-10 bottom-20 rounded-full bg-red-300 opacity-50 blur-[80px]"
        ></div>
      </div>
      <div className='container mx-auto px-8'>
        <Navbar />
        <Home />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </div>
    </div>
  );
};

export default App;