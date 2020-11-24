import { createGlobalStyle, css } from 'styled-components';
import reset from 'styled-reset-advanced';
import 'theme/fonts.css';

export const sharedWrapper = css`
  padding: 0 2.4rem;
  max-width: 111rem;

  @media (min-width: ${({ theme }) => theme.mediaSize.md}) {
    padding: 0 4rem;
  }

  @media (min-width: ${({ theme }) => theme.mediaSize.lg}) {
    padding: 0;
    margin: 0 auto;
    width: 90%;
  }
`;

const GlobalStyles = createGlobalStyle`
${reset}

html {
  font-size: 62.5%;
}

body {
  min-width: 32rem;
  font-family: 'Kumbh Sans', sans-serif;
  font-size: ${({ theme }) => theme.fontSize.s};
  line-height: 2.8rem;
  background-color: ${({ theme }) => theme.colorBackground};
}

h1, h2, h3, p {
  color: ${({ theme }) => theme.colorText};
}

h1 {
  font-size: ${({ theme }) => theme.fontSize.xxl};
  line-height: 6.4rem;
  font-weight: 700;
}

h2 {
  font-size: ${({ theme }) => theme.fontSize.l};
  line-height: 2.8rem;
  font-weight: 700;
}

h3 {
  font-size: ${({ theme }) => theme.fontSize.s};
  line-height: 4.8rem;
  letter-spacing: 0.5rem;
  font-weight: 700;
  text-transform: uppercase;
}

p {
  font-size: ${({ theme }) => theme.fontSize.s};
  line-height: 2.8rem;
}

button {
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: 700;
  line-height: 2.8rem;
  cursor: pointer;
}

input {
  font-family: inherit;
  font-size: inherit;
  line-height: 2.8rem;
}

select {
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
  cursor: pointer;

  ::-ms-expand {
    display: none;
  }
}

`;

export default GlobalStyles;
