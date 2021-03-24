import React, {useState} from 'react';
import {Container, MainNavigation, NavigationLinks, NavigationLink, Logo} from './shared'
import { Homepage, About } from './pages';
import { TodoContext } from './shared/Todos/data/context/TodoContext';
import { ButtonContext } from './shared/FormElements/data/context/ButtonContext';
import LogoImg from './assets/img/logo.png'


import {checkLocalStorage, CenterContent} from './utils'

import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
  Link,
} from 'react-router-dom';

const  App = () => {
  const [todo, setTodo] = useState({_id: null, todo: null});
  const [tempTodo, setTempTodo] = useState({_id: null, todo: null});
  const [disabled, setDisabled] = useState(true);

  checkLocalStorage("id");

  const routes = (
    <Switch>
        <Route path='/' exact>
          <Homepage />
        </Route>
        <Route path='/about' exact>
          <About />
        </Route>
        <Redirect to='/' />
      </Switch>
  );

  return <>
  <Router>
    <MainNavigation>
    <NavigationLinks>
        <Logo src={LogoImg} />
        <Link to="/">
          <h2>Todo</h2>
        </Link>
    </NavigationLinks>
      <NavigationLinks>
        <NavigationLink to={'/about'}>About</NavigationLink>
        <NavigationLink to={'/contact'}>Contact</NavigationLink>
      </NavigationLinks>
    </MainNavigation>
    <TodoContext.Provider value={{ todo, setTodo, tempTodo, setTempTodo }}>
      <ButtonContext.Provider value={{disabled, setDisabled}}>
        <Container>
        <CenterContent>
        {routes}
        </CenterContent>
        </Container>
      </ButtonContext.Provider>
    </TodoContext.Provider>
    </Router>
  </>
}

export default App;
