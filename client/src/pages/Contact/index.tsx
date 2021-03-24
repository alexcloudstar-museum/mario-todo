import React from 'react';
import { ContactWrapper } from './style';

const Contact = () => (
  <ContactWrapper>
    <h1>Contact Methods</h1>
    <h2>Feel free to use any 📧</h2>

    <ul>
      <li>
        <i className='fas fa-globe-americas'></i>
        <span>
          <a href='https://alexcloudstar.com/' target='_blank'>
            www.alexcloudstar.com
          </a>
        </span>
      </li>
      <li>
        <i className='far fa-envelope'></i>
        <span>
          <a href='mailto: contact@alexcloudstar.com'>
            contact@alexcloudstar.com
          </a>
        </span>
      </li>
      <li>
        <i className='fab fa-github'></i>
        <span>
          <a href='https://github.com/alexcloudstar/' target='_blank'>
            @alexcloudstar
          </a>
        </span>
      </li>
      <li>
        <i className='fab fa-twitter'></i>
        <span>
          <a href='https://twitter.com/AlexCloudstar' target='_blank'>
            @alexcloudstar
          </a>
        </span>
      </li>
      <li>
        <i className='fab fa-youtube'></i>
        <span>
          <a
            href='https://www.youtube.com/channel/UCueb-hU0uhdqpTfo1w1ZZ_Q'
            target='_blank'
          >
            alexcloudstar
          </a>
        </span>
      </li>
      <li>
        <i className='fab fa-instagram'></i>
        <span>
          <a href='https://instagram.com/alexcloudstar' target='_blank'>
            @alexcloudstar
          </a>
        </span>
      </li>
    </ul>
  </ContactWrapper>
);

export default Contact;
