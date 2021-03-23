import React from 'react';
import styled from 'styled-components';

const LogoWrapper = styled.div`
  img {
    width: 50px;
    margin: 7px 15px;
  }

  @media (min-width: 991px) {
    img {
      margin: 15px;
    }
  }
`;

const Logo = ({ src }) => (
  <LogoWrapper>
    <img src={src} />
  </LogoWrapper>
);

export default Logo;
