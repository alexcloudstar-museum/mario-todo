import React from 'react';

import { ContainerWrapper } from './style';

const Container: React.FC<ContainerProps> = (
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

export default Container;
