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
          Full stack web developer with an extensive background in biological
          sciences and business administration, who recently earned a
          certificate from Michigan State University, with a focus on the MERN
          (MongoDB, Express, React and Node) stack, while also developing and
          sharpening my skills in JavaScript, CSS, HTML and other technologies
          relevant to today's industry. Known as a passionate and
          detail-oriented individual, I approach each programming challenge from
          different angles, in an attempt to find the most suitable solution.
          With each project, my aim is to develop an application that is
          responsive and user friendly, that targets specific user needs. I am
          excited to leverage and develop my skills as part of a quality-driven
          team, to solve various problems, while enhancing user experience.
        </p>
      </div>
    </>
  );
}

export default About;