import styled from 'styled-components';
import PriceCard from './PriceCard';

const CardListWrapper = styled.ul`
  display: grid;
  gap: 3.2rem;

  @media (min-width: ${({ theme }) => theme.mediaSize.lg}) {
    grid-template-columns: repeat(3, 1fr);
    gap: 3rem;
  }
`;

const priceCardData = [
  {
    id: 1,
    name: 'Basic',
    price: 'Free',
    conditions: 'Up to 5 users for free',
    features: [
      'Basic document collaboration',
      '2 gb storage',
      'Great security and support',
    ],
  },

  {
    id: 2,
    name: 'Pro',
    price: '$9.99',
    conditions: 'Per user, billed monthly',
    features: [
      'All essential integrations',
      '50 gb storage',
      'More control and insights',
    ],
    accent: true,
  },
  {
    id: 3,
    name: 'Ultimate',
    price: '$19.99',
    conditions: 'Per user, billed monthly',
    features: ['Robust work management', '100 gb storage', 'VIP support'],
  },
];

const PriceCardList = () => {
  const cardList = priceCardData.map(({ id, accent, ...props }) => (
    <PriceCard key={id} accent={accent} {...props} />
  ));

  return <CardListWrapper>{cardList}</CardListWrapper>;
};

export default PriceCardList;
