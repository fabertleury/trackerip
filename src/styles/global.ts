  import { createGlobalStyle } from 'styled-components'


  export const GlobalStyle = createGlobalStyle`
    :root {
      --gray900: hsl(0, 0%, 17%);
      --gray700: hsl(0, 0%, 59%);
    }
    
    
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;

      font-family: 'Rubik', sans-serif;

      outline: none;
    }

    body {
      background: var(--gray700);
      -webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button {
      font-family: 'Rubik', sans-serif;
      font-weight: 400;
    }

    h1, h2, h3, h4, h5, h6, strong {
      font-weight: 700;
    }

    button {
      cursor: pointer;
    }

    [disabled] {
      opacity: 0.6;
      cursor: not-allowed;
    }


  
  `;