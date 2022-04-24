import React from 'react';
import ProjectModal from '../Modal';

function Projects() {
  const photoKey = [1, 2, 3, 4, 5, 6];
  return (
    <>
    <div>Modal Div</div>
      {photoKey.map((photo) => (
        <div key={photo} className={`project-${photo}`}>
          <p></p>
        </div>
      ))}
    </>
  );
}

export default Projects;
