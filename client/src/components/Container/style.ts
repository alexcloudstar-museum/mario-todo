import styled from 'styled-components';

export const ContainerWrapper = styled.div<ContainerProps>`
  display: ${({ display }) => (display ? display : 'flex')};
  justify-content: ${({ justifyContent }) =>
    justifyContent ? justifyContent : 'center'};
  align-content: ${({ alignContent }) =>
    alignContent ? alignContent : 'center'};
`;
