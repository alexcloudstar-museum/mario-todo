import { createGlobalStyle } from 'styled-components';

const GlobalStyling = createGlobalStyle`
html,
body {
  margin: 0;
  padding: 0;

}

body {
  font-family: 'Lato', sans-serif;
  font-weight: 400;
}

html,
body,
#root {
  width: 100%;
  height: 100%;
}


`;

export default GlobalStyling;
