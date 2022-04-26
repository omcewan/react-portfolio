import React from 'react';
import Nav from '../Navigation';

function Header({ navElements, currentNavElement, setCurrentNavElement }) {
  return (
    <header>
      <h1>Orlando McEwan</h1>
      <Nav
        navElements={navElements}
        currentNavElement={currentNavElement}
        setCurrentNavElement={setCurrentNavElement}
      />
    </header>
  );
}

export default Header;
