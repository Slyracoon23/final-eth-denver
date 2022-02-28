import React from 'react';
import styled from "styled-components";
import { breakpoint, device } from '../constants/breakpoints';

const Team = () => {
  return (
    <>
      <SectionA>
        <ContentWrapper>
          <h2>Marketplace</h2>
          <p>Coming soon...</p>
        </ContentWrapper>
      </SectionA>
    </>
    
  )
}

const ContentWrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;

  ${breakpoint(device.lg)} {
    max-width: 665px;
  }
`;

const SectionA = styled.div`
  min-height: 100px;
  padding: 40px 40px 70px 40px;
  color: black;
`;

const SectionB = styled.div`
  background: #111518;
  padding: 40px 40px 70px 40px;
`;


export default Team;