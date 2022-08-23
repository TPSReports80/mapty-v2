import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
:root {
  --color-brand--1: #ffb545;
  --color-brand--2: #00c46a;

  --color-dark--1: #2d3439;
  --color-dark--2: #42484d;
  --color-light--1: #aaa;
  --color-light--2: #ececec;
  --color-light--3: rgb(214, 222, 224);
}

* {
  margin: 0;
  padding: 0;

}
body {
  font-family: 'Manrope', sans-serif;
  color: var(--color-light--2);
  font-weight: 400;
  line-height: 1.6;
  height: 100vh;
  overscroll-behavior-y: none;

  background-color: #fff;
  
}
.App {
  padding: 2.5rem;

  display: flex;
}
/* GENERAL */
a:link,
a:visited {
  color: var(--color-brand--1);
}
.hidden {
    display: none;
}
`;
