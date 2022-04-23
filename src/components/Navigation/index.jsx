import React from 'react';

function Nav() {
  const capFirstLetter = (str) => {
    const strArr = str.split('');
    strArr[0] = strArr[0].toUpperCase();
    return strArr.join('');
  };

  const navElements = ['about', 'portfolio', 'contact', 'resume'];

  return (
    <nav>
      <ul>
        {navElements.map((element) => (
          <li>
            <a key={element} href={`#${element}`}>
              {capFirstLetter(element)}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Nav;
