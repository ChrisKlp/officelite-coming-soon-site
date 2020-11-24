import FooterContent from 'components/Footer/Footer';
import Intro from 'components/Intro/Intro';
import PriceCardList from 'components/PriceCardList/PriceCardList';
import styled from 'styled-components';
import HeaderBackground from 'components/Backgrounds/HeaderBackground';
import FooterBackground from 'components/Backgrounds/FooterBackground';
import { sharedWrapper} from 'theme/GlobalStyles';
import HeaderDivider from 'components/Header/HeaderDivider';

const Main = styled.main`
  position: relative;
`;

const IntroWrapper = styled.section`
  ${sharedWrapper}
`;

const PriceCardListWrapper = styled.section`
  ${sharedWrapper}
  padding-top: 10rem;
  padding-bottom: 10rem;

  @media (min-width: ${({ theme }) => theme.mediaSize.md}) {
    padding-top: 14rem;
    padding-bottom: 10rem;
  }

  @media (min-width: ${({ theme }) => theme.mediaSize.lg}) {
    padding-top: 18.4rem;
    padding-bottom: 8.2rem;
  }
`;

const Footer = styled.footer`
  position: relative;
`;

const FooterWrapper = styled.div`
  ${sharedWrapper}
  padding-bottom: 10rem;

  @media (min-width: ${({ theme }) => theme.mediaSize.md}) {
    padding-bottom: 10rem;
  }

  @media (min-width: ${({ theme }) => theme.mediaSize.lg}) {
    padding-bottom: 9.1rem;
  }
`;

const Home = () => (
  <>
    <Main>
      <HeaderDivider/>
      <HeaderBackground />
      <IntroWrapper>
        <Intro />
      </IntroWrapper>
      <PriceCardListWrapper>
        <PriceCardList />
      </PriceCardListWrapper>
    </Main>
    <Footer>
      <FooterBackground />
      <FooterWrapper>
        <FooterContent />
      </FooterWrapper>
    </Footer>
  </>
);

export default Home;
