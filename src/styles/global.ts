import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  outline: 0;
  height: 100%;
}

body {
  -webkit-font-smoothing: antialiased;
}

button {
  cursor: pointer;
}

body, input, button {
  font-family: 'Source Sans Pro', sans-serif;
  font-size: 16;
}
`;
