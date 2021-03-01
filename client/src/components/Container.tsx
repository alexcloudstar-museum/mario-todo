import React from 'react';
import styled from 'styled-components';

interface ContainerProps {
  display?: string;
  justifyContent?: string;
  alignContent?: string;
  children: React.ReactNode;
}

const ContainerWrapper = styled.div<ContainerProps>`
  display: ${({ display }) => (display ? display : 'flex')};
  justify-content: ${({ justifyContent }) =>
    justifyContent ? justifyContent : 'center'};
  align-content: ${({ alignContent }) =>
    alignContent ? alignContent : 'center'};
`;

export const Container: React.FC<ContainerProps> = (
  { children, display, justifyContent, alignContent },
  props
) => {
  return (
    <ContainerWrapper
      display={display}
      justifyContent={justifyContent}
      alignContent={alignContent}
      {...props}
    >
      {children}
    </ContainerWrapper>
  );
};
