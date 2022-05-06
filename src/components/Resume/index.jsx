import React from 'react';
import resume from '../../assets/Orlando_McEwan_Resume.pdf';

function Resume() {
  const frontEndSkills = [
    'Ajax',
    'BootStrap',
    'CSS3',
    'HTML5',
    'Javascript',
    'JQuery',
  ];
  const backEndSkills = [
    'Express',
    'GraphQl',
    'Handlebars',
    'Insomnia',
    'MongoDB',
    'MySQL',
    'Node',
    'React',
  ];
  return (
    <>
      {/* <iframe src={resume} frameBorder="0" title="my-resume" seamless></iframe> */}
      <div className="resume">
        <h2>
          Download resume!
          <a href={resume} download>
            {' '}
            <i className="fa-solid fa-download"></i>
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
