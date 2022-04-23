import React from 'react';

function Nav({ navElements, currentNavElement, setCurrentNavElement }) {
  const capitalizeFirstLetter = (str) => {
    const strArr = str.split('');
    strArr[0] = strArr[0].toUpperCase();
    return strArr.join('');
  };
  return (
    <nav>
      <ul className='nav-bar'>
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
