import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Projects from './components/Projects';

function App() {
  const navElements = [
    { name: 'about', icon: <i className="fa-solid fa-user-tie fa-sm"></i> },
    { name: 'portfolio', icon: <i className="fa-solid fa-laptop-code fa-sm"></i> },
    { name: 'contact', icon: <i className="fa-solid fa-envelope fa-sm"></i>},
    { name: 'resume', icon: <i className="fa-solid fa-file-pdf fa-sm"></i> },
  ];
  const [currentNavElement, setCurrentNavElement] = useState(
    navElements[0].name
  );
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
