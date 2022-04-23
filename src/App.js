import React, {useState} from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <>
      <Header />
      <main>
        <About />
        {/* <Contact /> */}
      </main>
      <Footer />
    </>
  );
}

export default App;
