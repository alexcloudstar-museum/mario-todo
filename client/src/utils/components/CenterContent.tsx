import React, { FC } from 'react';
import styled from 'styled-components';

const CenterContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CenterContent: FC = ({ children }) => (
  <CenterContentWrapper>{children}</CenterContentWrapper>
);

export default CenterContent;
