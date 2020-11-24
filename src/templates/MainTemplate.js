import Header from 'components/Header/Header';
import styled, { ThemeProvider } from 'styled-components';
import GlobalStyles, { sharedWrapper } from 'theme/GlobalStyles';
import { theme } from 'theme/mainTheme';

const HeaderWrapper = styled.header`
  ${sharedWrapper}
  position: relative;
  display: flex;
  justify-content: center;

  @media (min-width: ${({ theme }) => theme.mediaSize.md}) {
    justify-content: flex-start;
  }
`;

const MainTemplate = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <HeaderWrapper>
        <Header />
      </HeaderWrapper>
      {children}
    </ThemeProvider>
  );
};

export default MainTemplate;
