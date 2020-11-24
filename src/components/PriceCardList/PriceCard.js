import bgPatternPricing from 'assets/home/bg-pattern-pricing.svg';
import Button from 'components/Button/Button';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

const mediaTablet = '@media (min-width: 768px) and (max-width: 991px)';

const Wrapper = styled.li`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 4rem;
  width: 100%;
  background-color: ${({ theme }) => theme.colorWhite};
  color: ${({ theme }) => theme.colorSecondary};
  text-align: center;
  border-radius: 1.3rem;
  box-shadow: 0 5rem 5rem -2.5rem hsla(227, 35%, 45%, 0.25);

  ${mediaTablet} {
    align-items: flex-start;
  }

  @media (min-width: ${({ theme }) => theme.mediaSize.lg}) {
    max-width: 35rem;
  }

  ${({ accent }) =>
    accent &&
    css`
      background-color: ${({ theme }) => theme.colorPrimary};
      background-image: url(${bgPatternPricing});
      background-position: bottom center;
      background-repeat: no-repeat;
      color: ${({ theme }) => theme.colorWhite};

      & ${FeaturesWrapper} {
        color: ${({ theme }) => theme.colorWhite};
      }

      ${mediaTablet} {
        background-position: -31.9rem center;
      }
    `};

  ${mediaTablet} {
    justify-items: flex-start;
    padding: 4.8rem;
    text-align: left;
  }
`;

const CardName = styled.h2`
  margin-bottom: 4rem;
  color: inherit;

  @media ${mediaTablet} {
    margin-bottom: 1.6rem;
  }
`;

const CardBody = styled.div`
  display: grid;
  gap: 0.8rem;
  width: 100%;

  ${mediaTablet} {
    grid-template-columns: repeat(2, 1fr);
    gap: 0;
  }
`;

const CardBodyHeader = styled.div`
  margin-bottom: 5.6rem;

  ${mediaTablet} {
    margin-bottom: 0.4rem;
  }
`;

const CardPrice = styled.p`
  color: inherit;
  font-size: ${({ theme }) => theme.fontSize.xxl};
  line-height: 6.4rem;
  font-weight: 700;
`;

const CardConditions = styled.p`
  color: inherit;
`;

const FeaturesWrapper = styled.ul`
  margin-bottom: 3.2rem;
  display: grid;
  gap: 1.6rem;
  justify-content: center;
  color: ${({ theme }) => theme.colorText};

  ${mediaTablet} {
    margin-bottom: 0;
    margin-left: 5.6rem;
  }
`;

const ButtonWhite = styled(Button).attrs({ white: true })``;
const ButtonSecondary = styled(Button).attrs({ secondary: true })``;

const PriceCard = ({ name, price, conditions, features, accent }) => {
  const buttonType = accent ? (
    <Link to="/sign-up" component={ButtonWhite}>
      Try for Free
    </Link>
  ) : (
    <Link to="/sign-up" component={ButtonSecondary}>
      Try for Free
    </Link>
  );

  return (
    <Wrapper accent={accent}>
      <CardName>{name}</CardName>
      <CardBody>
        <CardBodyHeader>
          <CardPrice as="p">{price}</CardPrice>
          <CardConditions>{conditions}</CardConditions>
        </CardBodyHeader>
        <FeaturesWrapper>
          {features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </FeaturesWrapper>
      </CardBody>
      {buttonType}
    </Wrapper>
  );
};

export default PriceCard;
