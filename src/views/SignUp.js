import FooterBackground from 'components/Backgrounds/FooterBackground';
import HeaderBackground from 'components/Backgrounds/HeaderBackground';
import Countdown from 'components/Countdown/Countdown';
import HeaderDivider from 'components/Header/HeaderDivider';
import SignUpForm from 'components/SignUpForm/SignUpForm';
import { useMediaPredicate } from 'react-media-hook';
import styled from 'styled-components';
import { sharedWrapper } from 'theme/GlobalStyles';

const MainWrapper = styled.main`
  position: relative;
`;

const ContentWrapper = styled.div`
  ${sharedWrapper}
  display: flex;
  justify-content: space-between;
`;

const IntroWrapper = styled.section`
  ${sharedWrapper}
`;

const IntroContent = styled.div`
  margin-bottom: 6.4rem;
  display: grid;
  gap: 1.6rem;
  text-align: center;

  @media (min-width: ${({ theme }) => theme.mediaSize.md}) {
    gap: 2.4rem;
    margin-bottom: 4rem;
  }

  @media (min-width: ${({ theme }) => theme.mediaSize.lg}) {
    max-width: 52rem;
    text-align: left;
  }
`;

const Heading = styled.h1`
  font-size: clamp(4rem, 5vw, 5.6rem);
  line-height: clamp(4.8rem, 6vw, 6.4rem);
  color: ${({ theme }) => theme.colorSecondary};
`;

const Text = styled.p`
  margin: 0 auto;
  font-size: clamp(1.6rem, 2vw, 1.8rem);
  line-height: clamp(2.6rem, 2vw, 2.8rem);
  max-width: 57.2rem;
`;

const CountdownWrapper = styled.section`
  ${sharedWrapper}
  margin-bottom: 6.4rem;

  @media (min-width: ${({ theme }) => theme.mediaSize.md}) {
    margin-bottom: 10.4rem;
  }
`;

const SignUpWrapper = styled.section`
  ${sharedWrapper}
  padding-bottom: 8.7rem;
  display: grid;
  justify-items: center;

  @media (min-width: ${({ theme }) => theme.mediaSize.md}) {
    padding-bottom: 12.3rem;
  }

  @media (min-width: ${({ theme }) => theme.mediaSize.lg}) {
    grid-area: header;
  }
`;

const FooterNewBackground = styled(FooterBackground)`
  height: 32rem;
  background-position: 50% -47.4rem;
  transform: rotate(180deg);

  @media (min-width: ${({ theme }) => theme.mediaSize.md}) {
    height: 38rem;
    background-size: 145.4rem;
    background-position: 50% -54rem;
  }
`;

const DarkBackground = styled(FooterBackground)`
  width: clamp(42rem, 100%, 25vw);
  top: 0;
  right: 0;
  height: 100vh;
  background-size: 203.6rem;
  background-position: -85.3rem calc(100% + 78.1rem);
  transform: rotate(180deg);
`;

const Intro = () => (
  <IntroContent>
    <Heading>Work smarter. Save time.</Heading>
    <Text>
      Easily manage your projects. Get on the list and receive in-app perks
      available only to early subscribers. We are moving into final development
      and getting ready for official launch soon.
    </Text>
  </IntroContent>
);

const SignUp = () => {
  const mediaLg = useMediaPredicate('(min-width: 992px)');

  const mediaAndTablet = (
    <>
      <HeaderBackground />
      <IntroWrapper>
        <Intro />
      </IntroWrapper>
      <CountdownWrapper>
        <Countdown light />
      </CountdownWrapper>
      <SignUpWrapper>
        <SignUpForm />
      </SignUpWrapper>
      <FooterNewBackground />
    </>
  );

  const desktop = (
    <>
      <ContentWrapper>
        <div>
          <Intro />
          <Countdown light />
        </div>
        <SignUpForm />
      </ContentWrapper>
      <DarkBackground />
    </>
  );

  return (
    <MainWrapper>
      <HeaderDivider />
      {mediaLg ? desktop : mediaAndTablet}
    </MainWrapper>
  );
};

export default SignUp;
