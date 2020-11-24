import { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import { rgba } from 'polished';

const Wrapper = styled.div`
  display: grid;
  justify-items: center;
  gap: 1.8rem;
  margin-bottom: 4rem;
  width: 100%;

  @media (min-width: ${({ theme }) => theme.mediaSize.md}) {
    gap: 0.8rem;
    margin-bottom: 4.8rem;
  }

  @media (min-width: ${({ theme }) => theme.mediaSize.lg}) {
    gap: 0;
    margin-bottom: 0;
    justify-items: left;
  }
`;

const Heading = styled.h3`
  color: ${({ theme }) => theme.colorWhite};

  ${({ light }) =>
    light &&
    css`
      color: ${({ theme }) => theme.colorSecondary};
    `};

  span {
    color: ${({ theme }) => theme.colorPrimary};
  }
`;

const CounterWrapper = styled.div`
  display: flex;
  gap: 1.3rem;
  justify-content: center;
  width: 100%;

  @media (min-width: ${({ theme }) => theme.mediaSize.md}) {
    gap: 1.6rem;
  }

  @media (min-width: ${({ theme }) => theme.mediaSize.lg}) {
    justify-content: flex-start;
  }
`;

const TimeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colorSecondary};
  border-radius: 0.4rem;
  max-width: 7.2rem;
  width: 100%;
  height: 9.2rem;

  ${({ light }) =>
    light &&
    css`
      background-color: ${({ theme }) => rgba(theme.colorPrimary, 0.1)};
    `};

  @media (min-width: ${({ theme }) => theme.mediaSize.md}) {
    border-radius: 1.3rem;
    max-width: unset;
    width: 10rem;
    height: 12.8rem;
  }
`;

const TimeValue = styled.p`
  font-weight: 700;
  font-size: ${({ theme }) => theme.fontSize.xl};
  line-height: 4.8rem;
  color: ${({ theme }) => theme.colorWhite};

  ${({ light }) =>
    light &&
    css`
      color: ${({ theme }) => theme.colorPrimary};
    `};

  @media (min-width: ${({ theme }) => theme.mediaSize.md}) {
    font-size: ${({ theme }) => theme.fontSize.xxl};
    margin-top: 1.6rem;
  }
`;

const TimeCaption = styled.p`
  margin-top: -0.6rem;
  font-weight: 700;
  font-size: ${({ theme }) => theme.fontSize.xs};
  color: ${({ theme }) => theme.colorWhite};
  opacity: 0.5;

  ${({ light }) =>
    light &&
    css`
      color: ${({ theme }) => theme.colorSecondary};
    `};

  @media (min-width: ${({ theme }) => theme.mediaSize.md}) {
    margin-top: 0;
    font-size: ${({ theme }) => theme.fontSize.s};
  }
`;

const Countdown = ({ light }) => {
  const calculateTime = () => {
    const currentTime = new Date();
    const eventDate = new Date('2021-02-04');
    const timeDifference = eventDate - currentTime;
    let timeLeft = {};

    if (timeDifference > 0) {
      timeLeft = {
        days: Math.floor(timeDifference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((timeDifference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((timeDifference / (1000 * 60)) % 60),
        seconds: Math.floor((timeDifference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTime());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTime());
    }, 1000);
    return () => clearTimeout(timer);
  }, [timeLeft]);

  const timeLeftArr = Object.entries(timeLeft);

  const timeLeftList = timeLeftArr.map(([caption, value], index) => (
    <TimeWrapper light={light} key={index}>
      <TimeValue light={light}>{value > 9 ? value : `0${value}`}</TimeValue>
      <TimeCaption light={light}>{caption}</TimeCaption>
    </TimeWrapper>
  ));

  return (
    <Wrapper>
      <Heading light={light}>
        Coming <span>4 Feb 2021</span>
      </Heading>
      <CounterWrapper>
        {timeLeftList.length ? timeLeftList : <TimeValue>Time's up!</TimeValue>}
      </CounterWrapper>
    </Wrapper>
  );
};

export default Countdown;
