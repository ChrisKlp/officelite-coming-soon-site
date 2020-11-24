import styled from 'styled-components';
import bgHeader from 'assets/home/bg-pattern-header.svg';

const HeaderBackground = styled.div`
  position: absolute;
  top: 0;
  width: 100%; 
  height: 45.8rem;
  background-image: url(${bgHeader});
  background-repeat: no-repeat;
  background-position: 50% -17rem;
  background-size: 45.8rem;
  z-index: -9999;

  @media (min-width: ${({ theme }) => theme.mediaSize.md}) {
    height: 66.6rem;
    background-position: calc(100% + 29.3rem) -16.4rem;
    background-size: 66.6rem;
  }

  @media (min-width: ${({ theme }) => theme.mediaSize.lg}) {
    background-size: 113.4rem;
    background-position: calc(100% + 35rem) -41.9rem;
    background-size: 113.4rem;
  }
`;

export default HeaderBackground;
