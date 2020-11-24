import styled from 'styled-components';
import { rgba } from 'polished';
import iconCheck from 'assets/sign-up/icon-check.svg';

const OptionWrapper = styled.li`
  display: flex;
  align-items: center;
  gap: 0.9rem;
  height: 6rem;
  border-bottom: 1px solid ${({ theme }) => rgba(theme.colorText, 0.25)};
  cursor: pointer;

  :last-child {
    border: 0;
  }
`;

export const OptionText = styled.p`
  color: ${({ theme }) => theme.colorSecondary};
  font-weight: 700;
  flex-grow: 1;

  span {
    margin-left: 0.8rem;
    opacity: 0.4;
  }
`;

const CheckIcon = styled.div`
  width: 1.25rem;
  height: 0.95rem;
  background: url(${iconCheck}) no-repeat center / contain;
  opacity: ${({ checked }) => checked ? '1' : '0'};;

  ${OptionWrapper}:hover & {
    opacity: 1;
  }
`;

const Option = ({ children, price, checked, ...props }) => {
  return (
    <OptionWrapper {...props}>
      <OptionText>
        {children}
        <span>{price}</span>
      </OptionText>

      <CheckIcon checked={checked} />
    </OptionWrapper>
  );
};

export default Option;
