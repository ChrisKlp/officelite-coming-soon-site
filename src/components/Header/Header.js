import styled from 'styled-components';
import logo from 'assets/shared/logo.svg';
import { Link } from 'react-router-dom';

const Wrapper = styled.div`
  position: absolute;
  padding-top: 4.6rem;
  z-index: 9999;

  @media (min-width: ${({ theme }) => theme.mediaSize.md}) {
    padding-top: 7.2rem;
  }

  @media (min-width: ${({ theme }) => theme.mediaSize.lg}) {
    padding-top: 8.1rem;
  }
`;

const Logo = styled.img`
  display: block;
  width: 15.5rem;
  height: 3rem;
`;

const Header = () => (
  <Wrapper>
    <Link to="/">
      <Logo src={logo} alt="officelite" />
    </Link>
  </Wrapper>
);

export default Header;
