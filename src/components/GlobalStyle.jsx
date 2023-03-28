import { Global, css } from '@emotion/react';
import 'modern-normalize';

const reset = `
html {
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
}

*,
*::before,
*::after {
  box-sizing: inherit;
}

body {
  width: inherit;
  height: inherit;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#root {
  width: inherit;
  height: inherit;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

main {
  padding: 0 20px 20px;
  width: inherit;
  height: inherit;
}

p,
b,
h1,
h2,
h3,
h4,
h5,
h6 {
    margin: 0;
}

ul,
ol {
    margin: 0;
    padding-left: 0;
}

a,
label,
span,
b {
    text-decoration: none;
    display: block;
}

button {
    cursor: pointer;
    font-family: inherit;
    padding: 0;
}

img {
  display: block;
  max-width: 100%;
  height: auto;
}
`;

const customStyles = `
.visually-hidden {
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  border: 0;
  padding: 0;
  
  white-space: nowrap;
  clip-path: inset(100%);
  clip: rect(0 0 0 0);
  overflow: hidden;
}
`;

const GlobalStyle = () => {
  return (
    <Global
      styles={css`
        ${reset}
        ${customStyles}
      `}
    />
  );
};

export default GlobalStyle;
