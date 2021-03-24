import React from 'react';
import styled from 'styled-components';

const LogoWrapper = styled.div`
  img {
    width: 40px;
    margin: 7px 15px;
  }
`;

const Logo = ({ src }) => (
  <LogoWrapper>
    <img src={src} />
  </LogoWrapper>
);

export default Logo;
