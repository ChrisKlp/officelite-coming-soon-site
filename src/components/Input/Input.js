import styled, { css } from 'styled-components';
import { rgba } from 'polished';
import iconCross from 'assets/sign-up/icon-cross.svg';

const InputWrapper = styled.div`
  position: relative;
`;

const InputField = styled.input`
  padding: 1.6rem 1.6rem;
  width: 100%;
  border: 0;
  border-bottom: 1px solid ${({ theme }) => rgba(theme.colorText, 0.5)};
  color: ${({ theme }) => theme.colorSecondary};

  :focus {
    outline: none;
    border-bottom: 1px solid ${({ theme }) => theme.colorPrimary};
  }

  ::placeholder {
    color: ${({ theme }) => rgba(theme.colorText, 0.5)};
  }

  ${({ error }) =>
    error &&
    css`
      padding-right: 6rem;
      border-bottom: 1px solid ${({ theme }) => theme.colorError};
      color: ${({ theme }) => theme.colorError};
    `};
`;

const ErrorIcon = styled.div`
  display: ${({ error }) => (error ? 'block' : 'none')};
  position: absolute;
  right: 2rem;
  bottom: 2.1rem;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colorError};
  background-image: url(${iconCross});
  background-repeat: no-repeat;
  background-position: center;
`;

const Input = ({ error, ...props }) => (
  <InputWrapper>
    <InputField error={error} {...props} />
    <ErrorIcon error={error} {...props} />
  </InputWrapper>
);

export default Input;
