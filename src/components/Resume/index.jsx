import React from 'react';
import resume from '../../assets/Resume.pdf';

function Resume() {
  return (
    <>
      <iframe src={resume} frameBorder="0" title="my-resume"></iframe>
    </>
  );
}

export default Resume;
