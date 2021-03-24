import React from 'react';
import { AboutWrapper } from './style';

const About = () => (
  <AboutWrapper>
    <h1>Hope you enjoyed my MERN Application, here are some details:</h1>
    <ul>
      <li>
        It was created with{' '}
        <span>
          <a href='https://www.snowpack.dev/'>Snowpack</a>
        </span>
        instead of NPX/Webpack
      </li>
      <li>Using MONGODB on the backend</li>
      <li>
        Maybe you'll find some bugs, but keep in mind i created this app just to
        sharpen my fullstack skills
      </li>
      <li>
        I really enjoyed building this app, got a lot of challenges and thing
        that i didn't face it before
      </li>
      <li>
        This is the repo (in case you want to see the code) - feel free to fork,
        start it & follow me on github
        <a href='https://github.com/alexcloudstar/mario-todo'>
          https://github.com/alexcloudstar/mario-todo
        </a>
      </li>
      <li>Have a great rest of day!</li>
    </ul>
  </AboutWrapper>
);

export default About;
