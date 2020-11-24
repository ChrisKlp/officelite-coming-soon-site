import styled from 'styled-components';

const HeaderDivider = styled.div`
  padding-top: 16.6rem;

  @media (min-width: ${({ theme }) => theme.mediaSize.md}) {
    padding-top: 20.6rem;
  }

  @media (min-width: ${({ theme }) => theme.mediaSize.lg}) {
    padding-top: 21.3rem;
  }
`;

export default HeaderDivider;
