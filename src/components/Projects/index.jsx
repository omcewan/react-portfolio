import React from 'react';

function Projects() {
  const projects = [
    {
      id: 1,
      name: 'Family Fit',
      description:
        'Family Fit is an application developed to promote an active lifestyle for families. With Family Fit users can sign up individually and join a family and then track their workouts. When logged in the user will be able to see their stats for their previous workouts and also the workout minutes for other members of the family. This was a group project in which I focused mainly on backend development. I developed the API with express to connect the mySQL database to the front end of the application. The deployed application can be viewed by clicking on the display symbol, while the repository can be viewed by clicking on the github symbol.',
      repo: 'https://github.com/omcewan/family-fit',
      deployed: 'https://evening-fjord-78812.herokuapp.com/',
    },
    {
      id: 2,
      name: 'MOTAR',
      description:
        'Motar is a cryptocurrecny converter created so that a user who is interested in cryptocurrency can covert the cryptocurrency of their choice to a desired currency. MOTAR also allows a user to look up End of Day (EoD) data of a desired stock. MOTAR was made to be simple and easy to use. MOTAR was a group project in which I focused on writing the javascript, conecting the two APIs used to the client, so that the page can function as intended. The deployed application can be viewed by clicking on the display symbol, while the repository can be viewed by clicking on the github symbol.',
      repo: 'https://github.com/RickyLovesCode/MOTAR',
      deployed: 'https://rickylovescode.github.io/MOTAR/',
    },
    {
      id: 3,
      name: 'Professional README',
      description:
        'Professional README is a readme generator aimed at helping developers quickly and efficiently create a README file. This application is easy to use and users can keep a record of past README files that they have created.The deployed application can be viewed by clicking on the display symbol, while the repository can be viewed by clicking on the github symbol.',
      repo: 'https://github.com/SabaMahd/Professional-ReadMEAPP',
      deployed: 'https://stark-fjord-23181.herokuapp.com/',
    },
    {
      id: 4,
      name: 'Google Book Search',
      description:
        'Google Book Search is an engine that uses the google API to search for different books that as a user might be intested in. Users can log in and then be able save books they want to read and then delete these books from their saved list whenever they need. The application is also powered by the graphql api. This application was developed to show my knowledge and understanding of graphql. I took an existing code base that used RESTful API and refactor it to use apollo/graphql. The deployed application can be viewed by clicking on the display symbol, while the repository can be viewed by clicking on the github symbol.',
      repo: 'https://github.com/omcewan/mcewan-booksearch',
      deployed: 'https://thawing-ocean-78972.herokuapp.com/',
    },
    {
      id: 5,
      name: 'Employee Tracker',
      description:
        'This application is an employee tracker that was developed to keep a database for your company. With this tracker, you can view all your employees, departments, and roles. You will also be able to add each to your company. Other options will also be available at your disposal. This application was developed to enhance my technical abilities to use mySQL as a database to store and serve data. A short video description can be viewed by clicking on the display symbol, while the repository can be viewed by clicking on the github symbol.',
      repo: 'https://github.com/omcewan/mcewans-employee-tracker',
      deployed:
        'https://drive.google.com/file/d/1eG2qf7Z6ZCN_bKO-Nb5zFkzJnipO62lh/view',
    },
    {
      id: 6,
      name: 'Weather Dashboard',
      description:
        'Weather dashboard is a web application which allows users to look up a city in the United States, and view current and future weather forcast. This application was developed to demonstrate my understanding and use of APIs to carry out different functions of a web application. The deployed application can be viewed by clicking on the display symbol, while the repository can be viewed by clicking on the github symbol.',
      repo: 'https://github.com/omcewan/omcewan-weather-dashboard',
      deployed: 'https://omcewan.github.io/omcewan-weather-dashboard/',
    },
  ];
  return (
    <>
      {projects.map(({ id, name, description, repo, deployed }) => (
        <div key={id} className="project-head">
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
