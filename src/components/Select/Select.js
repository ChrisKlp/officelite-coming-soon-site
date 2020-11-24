import iconArrowDown from 'assets/sign-up/icon-arrow-down.svg';
import Option, { OptionText as Label } from 'components/Select/Option';
import { rgba } from 'polished';
import { useState } from 'react';
import styled, { keyframes } from 'styled-components';

const appear = keyframes`
0% {
  transform: translateY(-0.8rem);
  opacity: 0;
}
`;

const SelectWrapper = styled.div`
  position: relative;
`;

const Trigger = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.6rem 2.4rem 1.6rem 1.6rem;
  border-bottom: 1px solid ${({ theme }) => rgba(theme.colorText, 0.5)};
  cursor: pointer;
`;

const Arrow = styled.div`
  width: 1.2rem;
  height: 0.7rem;
  background: url(${iconArrowDown}) no-repeat center / contain;
  transform: ${({ isOpen }) => isOpen && 'rotate(180deg)'};
  transition: transform 0.2s;
`;

const OptionsWrapper = styled.ul`
  position: absolute;
  margin-top: 0.8rem;
  padding: 0.7rem 3.2rem;
  width: 100%;
  background-color: ${({ theme }) => theme.colorWhite};
  border: 1px solid rgba(51, 57, 80, 0.153273);
  border-radius: 0.8rem;
  box-shadow: 0 5rem 5rem -2.5rem rgba(75, 92, 154, 0.747077);
  overflow: hidden;
  z-index: 9999;
  animation: ${appear} 0.2s ease-out;
`;

const Select = ({ options, values, changeFn }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleTriggerClick = () => setIsOpen(prevState => !prevState);

  const optionsList = options.map(({ label, price }, index) => {
    const handleClick = () => {
      handleTriggerClick();
      return changeFn(label, price);
    };
    return (
      <Option key={index} price={price} onClick={handleClick}>
        {label}
      </Option>
    );
  });

  return (
    <SelectWrapper>
      <Trigger onClick={handleTriggerClick}>
        <Label>
          {values.label}
          <span>{values.price}</span>
        </Label>
        <Arrow isOpen={isOpen} />
      </Trigger>
      {isOpen && <OptionsWrapper>{optionsList}</OptionsWrapper>}
    </SelectWrapper>
  );
};

export default Select;
