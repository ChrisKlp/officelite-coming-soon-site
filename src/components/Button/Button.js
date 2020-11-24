import styled from 'styled-components';
import { rgba } from 'polished';

const Button = styled.button.attrs(({ size }) => ({
  size: size || '17.1rem',
}))`
  padding: 1.4rem 0;
  width: ${({ size }) => size};
  height: 5.6rem;
  border: 0;
  border-radius: 5em;
  text-align: center;
  font-weight: 700;
  color: ${({ theme }) => theme.colorWhite};
  background-color: ${({ theme }) => theme.colorPrimary};
  transition: background-color 0.3s;

  :focus {
    outline: none;
    background-color: ${({ theme }) => rgba(theme.colorPrimary, 0.9)};
  }

  :hover {
    background-color: ${({ theme }) => theme.colorPrimaryAlt};
  }
`;

export const ButtonSecondary = styled(Button)`
  color: ${({ theme }) => theme.colorPrimary};
  background-color: ${({ theme }) => rgba(theme.colorPrimary, 0.15)};

  :hover {
    background-color: ${({ theme }) => rgba(theme.colorPrimary, 0.25)};
  }

  :focus {
    background-color: ${({ theme }) => rgba(theme.colorPrimary, 0.2)};
  }
`;

export const ButtonWhite = styled(Button)`
  color: ${({ theme }) => theme.colorPrimary};
  background-color: ${({ theme }) => theme.colorWhite};

  :hover {
    color: ${({ theme }) => theme.colorPrimaryAlt};
    background-color: ${({ theme }) => theme.colorWhite};
  }

  :focus {
    background-color: ${({ theme }) => rgba(theme.colorPrimary, 0.05)};
  }
`;

export default Button;
