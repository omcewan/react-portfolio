import React from 'react';

function Projects() {
  const projects = [
    {
      id: 1,
      name: 'Family Fit',
      description:
        'Family Fit is an application developed to promote an active lifestyles for families. With Family Fit individuals can sign up individually and join a family and then track their workouts. When logged in you will be able to see your stats for your previous workouts and also the workout minutes for other members of the family.The deployed application can be viewed by clicking on the display symbol, while the repository can be viewed by clicking on the github symbol.',
      repo: 'https://github.com/omcewan/family-fit',
      deployed: 'https://evening-fjord-78812.herokuapp.com/',
    },
    {
      id: 2,
      name: 'MOTAR',
      description:
        'Motar is a cryptocurrecny converter, created so that a user, who is interested in cryptocurrency can covert the cryptocurrency of their choice to a desired currency. MOTAR also allows a user to look up End of Day (EoD) data of a desired stock. MOTAR was made to be simple and easy to use. The deployed application can be viewed by clicking on the display symbol, while the repository can be viewed by clicking on the github symbol.',
      repo: 'https://github.com/RickyLovesCode/MOTAR',
      deployed: 'https://rickylovescode.github.io/MOTAR/',
    },
    {
      id: 3,
      name: "Let's Connect",
      description:
        "Let's Connect is a Social Media API where one can create users and thoughts. Users can have others users as friends to make a friends list and also thier thoughts. One is also able to add a reactions to thoughts. This app was designed to demonstrate the functionality of Mongo as a NoSQL database. A short video description can be viewed by clicking on the display symbol, while the repository can be viewed by clicking on the github symbol.",
      repo: 'https://github.com/omcewan/lets-connect',
      deployed:
        ' https://drive.google.com/file/d/1qULajQbOWfkir3oJNhZ2NmGTGwH-tBmD/view',
    },
    {
      id: 4,
      name: 'Tech Blog',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. The deployed application can be viewed by clicking on the display symbol, while the repository can be viewed by clicking on the github symbol.',
      repo: 'https://github.com/omcewan/mcewans-tech-blog',
      deployed: '',
    },
    {
      id: 5,
      name: 'Employee Tracker',
      description:
        'This application is am employee tracker that was develop to keep a database for a company. With this tracker you can view all your employees, departments and roles. You can also add employees, departments and roles to your company. There are other options available at your disposal. A short video description can be viewed by clicking on the display symbol, while the repository can be viewed by clicking on the github symbol.',
      repo: 'https://github.com/omcewan/mcewans-employee-tracker',
      deployed:
        'https://drive.google.com/file/d/1eG2qf7Z6ZCN_bKO-Nb5zFkzJnipO62lh/view',
    },
    {
      id: 6,
      name: 'Weather Dashboard',
      description:
        'Weather dashboard is a web application which allows users to look up a city in the United States and view current and future weather forcast. The deployed application can be seen viewed by clicking on the display symbol, while the repository can be viewed by clicking on the github symbol.',
      repo: 'https://github.com/omcewan/omcewan-weather-dashboard',
      deployed: 'https://omcewan.github.io/omcewan-weather-dashboard/',
    },
  ];
  return (
    <>
      {projects.map(({ id, name, description, repo, deployed }) => (
        <div key={id} className='project-head'>
          <div className={`project-${id}`}>
            <div className="projects">
              <h2>{name}</h2>
              <p>{description}</p>
              <a href={repo} target="_blank" rel="noreferrer">
                <i className="fa-brands fa-github fa-2x"></i>
              </a>
              <a href={deployed} target="_blank" rel="noreferrer">
                <i className="fa-solid fa-display fa-2x"></i>
              </a>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default Projects;
