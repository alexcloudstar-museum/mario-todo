import React, {useState} from 'react';
import {Container, MainNavigation, NavigationLinks, NavigationLink, Logo} from './shared'
import { Homepage } from './pages';
import { TodoContext } from './shared/Todos/data/context/TodoContext';
import { ButtonContext } from './shared/FormElements/data/context/ButtonContext';
import LogoImg from './assets/img/logo.png'


import {checkLocalStorage} from './utils/localStorage'

const  App = () => {
  const [todo, setTodo] = useState({_id: null, todo: null});
  const [tempTodo, setTempTodo] = useState({_id: null, todo: null});
  const [disabled, setDisabled] = useState(true);

  checkLocalStorage("id");

  return <>
    <MainNavigation>
    <NavigationLinks>
        <Logo src={LogoImg} />
        <h2>Todo</h2>
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
