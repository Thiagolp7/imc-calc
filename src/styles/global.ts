import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --red: #a31621;
    --lavender: #e5eafa;
    --blue: #087ca7;
    --spaceCadet: #282a3e;
    --pink: #F26DF9;

    --bg-01: var(--spaceCadet);

    --text-title: var(--lavender);
    --text-paragraph: var(--pink);
    
    --bg-input: var(--spaceCadet);
    --input-color: var(--lavender);

    --table-bg: var(--pink);
    --table-color: var(--spaceCadet);

    font-size: 62.5%;
    font-family: 'Roboto Condensed', sans-serif;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  #root {
    width: 100%;
    height: 100%; 
    
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  body {
    color: var(--lavender);
    background: linear-gradient(180deg, rgba(16,16,25,1) 0%, rgba(24,24,37,1) 50%, rgba(48,48,74,1) 100%);

    width: 100vw;
    height: 100vh;

    display: flex;
    justify-content: center;
    align-items: center;

    overflow: auto;
  }

  h1, h2, h3{
    font-weight: 700;
  }
  
  input::placeholder{
    font-weight: 400;
    font-style: italic;
  }

  button {
    cursor: pointer;
  }
  
  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0,0,0,0);
    white-space: nowrap;
    border-width: 0;
  }

  @media (orientation: landscape) and (max-height: 650px){
    body {
      height: auto;
      margin: 3rem 0;
    }
  }
`