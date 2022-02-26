import React from 'react'
import Header from './Header';
import styled from "styled-components";


function Home() {
  return (
    <>
      <Header />
      <SectionA>
        ds
      </SectionA>
      <SectionB>
        ds
      </SectionB>
    </>
    
  )
}

const SectionA = styled.div`
  min-height: 100px;
  padding: 40px;
  color: black;
`;

const SectionB = styled.div`
  background: #111518;
  padding: 40px;
`;


export default Home;