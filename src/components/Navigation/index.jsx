import React from 'react';

function Nav({ navElements, currentNavElement, setCurrentNavElement }) {
  const capitalizeFirstLetter = (str) => {
    const strArr = str.split('');
    strArr[0] = strArr[0].toUpperCase();
    return strArr.join('');
  };
  return (
    <nav>
      <ul className="nav-bar">
        {navElements.map((element) => (
          <li key={element.name}>
            <a
              href={`#${element.name}`}
              className={element.name === currentNavElement ? 'navActive' : ''}
              onClick={() => {
                setCurrentNavElement(element.name);
              }}
            >
              {capitalizeFirstLetter(element.name)}
              {element.icon}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Nav;
