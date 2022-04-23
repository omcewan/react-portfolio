import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  const navElements = ['about', 'portfolio', 'contact', 'resume'];
  const [currentNavElement, setCurrentNavElement] = useState(navElements[0]);
  return (
    <>
      <Header
        navElements={navElements}
        currentNavElement={currentNavElement}
        setCurrentNavElement={setCurrentNavElement}
      />
      <main>
        {currentNavElement === 'about' ? (
          <About />
        ) : currentNavElement === 'contact' ? (
          <Contact />
        ) : (
          ''
        )}
      </main>
      <Footer />
    </>
  );
}

export default App;
