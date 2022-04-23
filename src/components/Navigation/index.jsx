import React, { useState } from 'react';

function Nav() {
  const capitalizeFirstLetter = (str) => {
    const strArr = str.split('');
    strArr[0] = strArr[0].toUpperCase();
    return strArr.join('');
  };

  const navElements = ['about', 'portfolio', 'contact', 'resume'];

  const [currentNavElement, setCurrentNavElement] = useState(navElements[0]);

  return (
    <nav>
      <ul>
        {navElements.map((element) => (
          <li key={element}>
            <a
              href={`#${element}`}
              className={element === currentNavElement ? 'navActive' : ''}
              onClick={() => {
                setCurrentNavElement(element);
              }}
            >
              {capitalizeFirstLetter(element)}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Nav;
