import React from 'react';
import styled from 'styled-components';

const SlidingText = () => {
  return (
    <TickerWrapper>
      <TickerContent>
        <span>Shop the latest collection NOW!</span>
      </TickerContent>  
    </TickerWrapper>
  );
};

const TickerWrapper = styled.div`
  overflow: hidden;
  background-color: #000; /* Or any other color */
  color: #fff;
  padding: 10px 0;
`;

const TickerContent = styled.div`
  display: flex;
  animation: ticker 30s linear infinite;

  @keyframes ticker {
    0% { transform: translate3d(100%, 0, 0); }
    100% { transform: translate3d(-100%, 0, 0); }
  }

  span {
    white-space: nowrap;
    padding: 0 2rem; /* Spacing between repetitions */
  }
`;

export default SlidingText;
