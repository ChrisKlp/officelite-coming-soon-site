import styled from 'styled-components';
import bgFooter from 'assets/home/bg-pattern-footer.svg';

const FooterBackground = styled.div`
  position: absolute;
  width: 100%;
  bottom: 0;
  height: 124.8rem;
  background-color: ${({ theme }) => theme.colorSecondaryAlt};
  background-image: url(${bgFooter});
  background-repeat: no-repeat;
  background-position: 50% 15.6rem;
  background-size: 120.2rem;
  z-index: -9999;

  @media (min-width: ${({ theme }) => theme.mediaSize.lg}) {
    height: 60.3rem;
    background-size: 203.6rem; 
    background-position: -86.7rem -61.4rem; 
  }
`;

export default FooterBackground;
