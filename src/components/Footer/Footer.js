import Button from 'components/Button/Button';
import Countdown from 'components/Countdown/Countdown';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: grid;
  justify-items: center;

  @media (min-width: ${({ theme }) => theme.mediaSize.lg}) {
    grid-template-columns: repeat(2, auto);
    justify-content: space-between;
    align-items: center;
  }
`;

const Footer = () => (
  <Wrapper>
    <Countdown />
    <Button to="/sign-up" as={Link}>
      Get Started
    </Button>
  </Wrapper>
);

export default Footer;
