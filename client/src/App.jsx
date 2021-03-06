import React from 'react';
import {Container, MainNavigation, NavigationLinks, NavigationLink, Logo} from './shared'
import { Homepage } from './pages';

const  App = () => {
  return <>
    <MainNavigation>
    <NavigationLinks>
        <Logo>Logo</Logo>
    </NavigationLinks>
      <NavigationLinks>
        <NavigationLink>About</NavigationLink>
        <NavigationLink>Contact</NavigationLink>
      </NavigationLinks>
    </MainNavigation>
    <Container>
     <Homepage />
    </Container>
  </>
}

export default App;
