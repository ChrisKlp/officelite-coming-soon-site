import illustration from 'assets/home/illustration-charts.svg';
import Button from 'components/Button/Button';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6.4rem;

  @media (min-width: ${({ theme }) => theme.mediaSize.md}) {
    flex-direction: row;
    gap: 0;
    justify-content: space-between;
  }
`;

const HeroImg = styled.img`
  width: clamp(17.1rem, 50%, 52.5rem);

  @media (min-width: ${({ theme }) => theme.mediaSize.md}) {
    order: 1;
  }

  @media (min-width: ${({ theme }) => theme.mediaSize.lg}) {
    margin-bottom: -7.5rem;
    margin-right: -2.4rem;
  }
`;

const Content = styled.div`
  display: grid;
  justify-items: center;
  align-content: center;
  gap: 2.4rem;
  max-width: 54rem;
  text-align: center;

  @media (min-width: ${({ theme }) => theme.mediaSize.md}) {
    justify-items: start;
    text-align: left;
  }
`;

const Heading = styled.h1`
  font-size: clamp(4rem, 5vw, 5.6rem);
  line-height: clamp(4.8rem, 6vw, 6.4rem);
  color: ${({ theme }) => theme.colorSecondary};
`;

const Text = styled.p`
  font-size: clamp(1.6rem, 2vw, 1.8rem);
  line-height: clamp(2.6rem, 2vw, 2.8rem);
`;

const StyledButton = styled(Button)`
  box-shadow: 0px 25px 25px -10px rgba(63, 91, 194, 0.247159);

  @media (min-width: ${({ theme }) => theme.mediaSize.lg}) {
    margin-top: 0.6rem;
  }
`;

const Intro = () => (
  <Wrapper>
    <HeroImg src={illustration} alt="Illutration charts" />
    <Content>
      <Heading>A simple solution to complex tasks is coming soon</Heading>
      <Text>
        Say goodbye to inefficient juggling of multiple apps, teams, and
        projects. Officelite is the new collaboration platform built with an
        intuitive interface to improve productivity.
      </Text>
      <StyledButton to="/sign-up" as={Link}>
        Get Started
      </StyledButton>
    </Content>
  </Wrapper>
);

export default Intro;
