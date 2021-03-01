import styled from 'styled-components';
import { ContainerProps } from './types';

export const ContainerWrapper = styled.div<ContainerProps>`
  height: 100%;
  display: ${({ display }) => (display ? display : 'flex')};
  justify-content: ${({ justifyContent }) =>
    justifyContent ? justifyContent : 'center'};
  align-content: ${({ alignContent }) =>
    alignContent ? alignContent : 'center'};
  background: url(${({ bgImg }) => bgImg}) no-repeat center center;
`;
