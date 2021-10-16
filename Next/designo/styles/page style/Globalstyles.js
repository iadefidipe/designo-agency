import {createGlobalStyle} from "styled-components";

const GlobalStyles = createGlobalStyle`
@import url("https://fonts.googleapis.com/css2?family=Jost:wght@400;500&display=swap");

html,
body {
  padding: 0;
  margin: 0;
}

a {
  color: inherit;
  text-decoration: none;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

:root {
  /* color */
  --clr-pry-peach: hsl(11, 73%, 66%);
  --clr-pry-black: hsl(270, 3%, 11%);
  --clr-pry-white: hsl(0, 0%, 100%);

  --clr-sec-peach: hsl(11, 100%, 80%);
  --clr-sec-dark-grey: hsl(264, 5%, 20%);
  --clr-sec-light-grey: hsl(210, 17%, 95%);

  

  /* media quries */
  --mobile: 375px;
  --tablet: 768px;
}

body {
  font-size: 1rem;
  font-family: "Jost", sans-serif;
  font-size: 1 rem;
  line-height: 1.625rem;
}

/* typography */
h1 {
  font-size: 3rem;
  line-height: 3rem;
  font-weight: var(--weight-med);
}

h2 {
  font-size: 2.5rem;
  line-height: 3rem;
  font-weight: var(--weight-med);
  letter-spacing: 2px;
}

h3 {
  font-size: 1.25rem;
  line-height: 1.625rem;
  font-weight: var(--weight-med);
  letter-spacing: 5px;
}

p {
  font-size: 1 rem;
  line-height: 1.625rem;
}

/* page padding */
.page-container {
  /* padding: 0 10.3125rem; */
  max-width: 1111px;
  margin: 0 auto;
}

@media (max-width: 990px) {
  .page-container {
    padding: 0 3rem;
  }
}

@media (max-width: 768px) {
  .page-container {
    padding: 0 2.5rem;
  }
}

@media (max-width: 680px) {
  h1 {
    font-size: 2rem;
    line-height: 2.25rem;
    font-weight: var(--weight-med);
  }
}

@media (max-width: 375px) {
  .page-container {
    padding: 0 1.5rem;
  }
}


`