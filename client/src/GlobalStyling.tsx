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

a {
  text-decoration: none;
}

::-webkit-scrollbar-track
{
  box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
	-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
	background-color: #F5F5F5;
}

::-webkit-scrollbar
{
	width: 10px;
	background-color: #F5F5F5;
}

::-webkit-scrollbar-thumb
{
  border-radius: 10px;
	background-color: #0ae;
	background-image: -webkit-gradient(linear, 0 0, 0 100%,
	                  color-stop(.5, rgba(255, 255, 255, .2)),
					          color-stop(.5, transparent), to(transparent));
}



`;

export default GlobalStyling;
