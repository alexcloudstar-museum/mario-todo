import React, {useState} from 'react';
import {Container, MainNavigation, NavigationLinks, NavigationLink, Logo} from './shared'
import { Homepage } from './pages';
import { TodoContext } from './shared/Todos/data/context/TodoContext';
import { ButtonContext } from './shared/FormElements/data/context/ButtonContext';

const  App = () => {
  const [todo, setTodo] = useState({id: null, name: null});
  const [tempTodo, setTempTodo] = useState({id: null, name: null});
  const [disabled, setDisabled] = useState(true);


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
    <TodoContext.Provider value={{ todo, setTodo, tempTodo, setTempTodo }}>
      <ButtonContext.Provider value={{disabled, setDisabled}}>
        <Container>
        <Homepage />
        </Container>
      </ButtonContext.Provider>
    </TodoContext.Provider>
  </>
}

export default App;
