import React from 'react';
import { TrackHistory } from '@components';
import { Header, BalanceCard } from '@theme';
import colors from '@theme/colors';
import styled from 'styled-components/native';

const StyledView = styled.View`
  display: flex;
  background-color: ${colors.white};
  flex-direction: column;
  height: 100%;
`;

const LandingPage = (props) => {
  return (
    <StyledView>
      <Header />
      <BalanceCard />
      <TrackHistory {...props} />
    </StyledView>
  );
};

export default LandingPage;
