import React, {useState} from 'react';
import {Container, MainNavigation, NavigationLinks, NavigationLink, Logo} from './shared'
import { Homepage } from './pages';
import { TodoContext } from './shared/Todos/data/context/TodoContext';
import { ButtonContext } from './shared/FormElements/data/context/ButtonContext';

import { v4 as uuidv4 } from 'uuid';

import {getLocalStorage, setLocalStorageItem} from './utils/localStorage'

const  App = () => {
  const [todo, setTodo] = useState({_id: null, todo: null});
  const [tempTodo, setTempTodo] = useState({_id: null, todo: null});
  const [disabled, setDisabled] = useState(true);

  const userId = getLocalStorage('id');

  if(!userId) {
    setLocalStorageItem("id", uuidv4())
  }

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
