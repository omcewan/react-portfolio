import React from 'react';
import Nav from '../Navigation';

function Header({ navElements, currentNavElement, setCurrentNavElement }) {
  return (
    <header>
      <a href="/">
        <h1>Orlando</h1>
      </a>
      {/* <h1>Orlando</h1> */}
      <Nav
        navElements={navElements}
        currentNavElement={currentNavElement}
        setCurrentNavElement={setCurrentNavElement}
      />
    </header>
  );
}

export default Header;
