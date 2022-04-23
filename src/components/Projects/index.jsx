import React from 'react';

function Projects() {
  const photos = [1, 2, 3, 4, 5, 6];
  return (
    <>
      {photos.map((photo) => (
        <div key={photo} className={`project-${photo}`}>
          <p></p>
        </div>
      ))}
    </>
  );
}

export default Projects;
