import {createGlobalStyle} from "styled-components";

const GlobalStyles = createGlobalStyle`


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



body {
  font-size: 1rem;
  font-family: "Jost", sans-serif;
  font-size: 1 rem;
  line-height: 1.625rem;
  color: ${ ({theme}) => theme.colors.pryWhite };
  height: 100vh;
}

/* typography */
h1 {
  font-size: 3rem;
  line-height: 3rem;
  font-weight: ${ ({theme}) => theme.weight.mid }  ;
}

h2 {
  font-size: 2.5rem;
  line-height: 3rem;
  font-weight: ${ ({theme}) => theme.weight.mid };
  letter-spacing: 2px;
}

h3 {
  font-size: 1.25rem;
  line-height: 1.625rem;
  font-weight: ${ ({theme}) => theme.weight.mid };
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
    font-weight:  ${ ({theme}) => theme.weight.mid };
  }
}

@media (max-width: 375px) {
  .page-container {
    padding: 0 1.5rem;
  }
}

`
 export default GlobalStyles



