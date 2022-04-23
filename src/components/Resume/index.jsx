import React from 'react';
import resume from '../../assets/Resume.pdf';

function Resume() {
  const frontEndSkills = [
    'HTML5',
    'CSS3',
    'JavaScript',
    'jQuery',
    'BootStrap',
    'React',
  ];
  const backEndSkills = [
    'MySQL',
    'MongoDB',
    'Express',
    'Node',
    'Handlebars',
    'Insomnia',
  ];
  return (
    <>
      {/* <iframe src={resume} frameBorder="0" title="my-resume" seamless></iframe> */}
      <div className="resume">
        <h2>
          Download resume!
          <a href={resume} download>
            {' '}
            <i class="fa-solid fa-download"></i>
          </a>
        </h2>
        <h2>Front End Technical Skills</h2>
        <ul>
          {frontEndSkills.map((element) => (
            <li key={element}>{element}</li>
          ))}
        </ul>
        <h2>Back End Technical Skills</h2>
        <ul>
          {backEndSkills.map((element) => (
            <li key={element}>{element}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Resume;
