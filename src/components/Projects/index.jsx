import React from 'react';
import ProjectModal from '../Modal';

function Projects() {
  const photoKey = [1, 2, 3, 4, 5, 6];
  const photos = [
    'calculator-img.jpeg',
    'family_fit.png',
    'hero-bg.jpeg',
    'motar.jpg',
    'pastel-puzzle-img.jpeg',
    'surf-img.jpeg',
  ];
  return (
    <>
      {/* <div>Modal Div</div> */}
      {photoKey.map((photo) => (
        <div key={photo} className={`project-${photo}`}>
          <div className="projects">
            <h2>Project Description</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <a
              href="https://github.com/omcewan"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-github fa-2x"></i>
              <i className="fa-solid fa-display fa-2x"></i>
            </a>
          </div>
        </div>
        // <div className='projects' key={photo}>
        //   <img src={require(`../../assets/images/project-images/${photo}`)} alt="" />
        //   <div>
        //     {/* <h2>Project</h2> */}
        //   </div>
        // </div>
      ))}
    </>
  );
}

export default Projects;
