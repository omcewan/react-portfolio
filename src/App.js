import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Projects from './components/Projects';

function App() {
  const navElements = ['about', 'portfolio', 'contact', 'resume'];
  const [currentNavElement, setCurrentNavElement] = useState(navElements[0]);
  function renderComponent() {
    switch (currentNavElement) {
      case 'portfolio':
        return <Projects />;
      case 'contact':
        return <Contact />;
      case 'resume':
        return <Resume />;
      default:
        return <About />;
    }
  }
  return (
    <>
      <Header
        navElements={navElements}
        currentNavElement={currentNavElement}
        setCurrentNavElement={setCurrentNavElement}
      />
      <main>{renderComponent()}</main>
      <Footer currentNavElement={currentNavElement} />
    </>
  );
}

export default App;
