import React from 'react';

const About = () => {
  return (
    <div className='about-container-main'>
    <div className="about-container">
      <h1>About Fitverse</h1>
      <p>
        Fitverse is a web application that helps you track your fitness journey, set goals, and stay motivated.
        Whether you're a beginner or an experienced fitness enthusiast, Fitverse provides the tools you need to
        achieve your fitness goals.
      </p>

      <h2>Features</h2>
      <ul>
        <li>User registration and authentication</li>
        <li>Personalized dashboard to track fitness progress</li>
        <li>Goal setting and progress tracking</li>
        <li>Exercise library with instructional videos and descriptions</li>
        <li>Workout planner and scheduler</li>
        <li>Nutrition tracker and meal planner</li>
        <li>Community forum for sharing tips, motivation, and success stories</li>
      </ul>

      <h2>Technologies Used</h2>
      <ul>
        <li>React.js: JavaScript library for building the user interface</li>
        <li>Node.js: JavaScript runtime environment for server-side development</li>
        <li>Express.js: Web application framework for Node.js</li>
        <li>MongoDB: NoSQL database for storing user data</li>
        <li>Mongoose: Object Data Modeling (ODM) library for MongoDB</li>
        <li>Material-UI: React UI component library for designing responsive and visually appealing interfaces</li>
      </ul>

      <h2>Getting Started</h2>
      <h3>Prerequisites</h3>
      <p>
        Node.js: Ensure that Node.js is installed on your system. You can download it from the official website: 
        <a href="https://nodejs.org" target="_blank" rel="noopener noreferrer">https://nodejs.org</a>
      </p>

      <h3>Installation</h3>
      <ol>
        <li>Clone the repository:</li>
        <pre>
          git clone https://github.com/your-username/fitverse.git
        </pre>
        <li>Navigate to the project directory:</li>
        <pre>
          cd fitverse
        </pre>
        <li>Install the dependencies:</li>
        <pre>
          npm install
        </pre>
        <li>Start the development server:</li>
        <pre>
          npm start
        </pre>
        <li>
          Open your browser and visit <a href="http://localhost:3000" target="_blank" rel="noopener noreferrer">http://localhost:3000</a> to access the Fitverse application.
        </li>
      </ol>

      <h2>Contributing</h2>
      <p>
        Contributions are welcome! If you'd like to contribute to Fitverse, please follow these steps:
      </p>
      <ol>
        <li>Fork the repository.</li>
        <li>Create a new branch for your feature/bug fix.</li>
        <li>Make your changes and commit them.</li>
        <li>Push your changes to your forked repository.</li>
        <li>Submit a pull request to the main repository.</li>
      </ol>

      <h2>License</h2>
      <p>
        This project is licensed under the <a href="/LICENSE">MIT License</a>.
      </p>

      <h2>Acknowledgements</h2>
      <p>
        The Fitverse team would like to thank all the contributors and open-source projects that made this application possible.
        Special thanks to the creators of React, Node.js, Express.js, MongoDB, and Material-UI for their amazing tools and frameworks.
      </p>

      <h2>Contact</h2>
      <p>
        For any inquiries or support, please email us at rajiv21_ug@cse.nits.ac.in.
      </p>
    </div>
    </div>
  );
};

export default About;
