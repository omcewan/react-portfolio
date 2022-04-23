import React from 'react';

function Footer({currentNavElement}) {
  return (
    <footer className={currentNavElement === 'portfolio' ? 'portfolio-footer' : 'footer'}>
      <a href="https://github.com/omcewan" target="_blank" rel="noreferrer">
        <i className="fa-brands fa-github-square fa-3x"></i>
      </a>
      <a
        href="https://www.linkedin.com/in/orlando-mcewan-17088ba9/"
        target="_blank"
        rel="noreferrer"
      >
        <i className="fa-brands fa-linkedin fa-3x"></i>
      </a>
      <a
        href="https://stackoverflow.com/users/17111259/omcewan"
        target="_blank"
        rel="noreferrer"
      >
        <i className="fa-brands fa-stack-overflow fa-3x"></i>
      </a>
    </footer>
  );
}

export default Footer;
