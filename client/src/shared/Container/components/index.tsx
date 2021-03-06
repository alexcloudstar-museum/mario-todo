import React from 'react';
import { ContainerProps } from '../types/type';

import { ContainerWrapper } from './style';

//@ts-ignore
import MarioBg from '../../../assets/img/marioBg.png';

const Container: React.FC<ContainerProps> = (
  { children, display, justifyContent, alignContent },
  props
) => {
  return (
    <ContainerWrapper
      bgImg={MarioBg}
      display={display}
      justifyContent={justifyContent}
      alignContent={alignContent}
      {...props}
    >
      {children}
    </ContainerWrapper>
  );
};

export default Container;
