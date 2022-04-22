import React from 'react';
import portraitImage from '../../assets/images/omcewan.jpg';

function About() {
  return (
    <>
      <div className="about-portrait">
        <img src={portraitImage} alt="Orlando's Portrait"></img>
      </div>
      <div className="about-text">
        <h2> Hi! Im Orlando! </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </>
  );
}

export default About;
