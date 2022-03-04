import React from 'react'
import styled from "styled-components";
import { ethereum, interop, scalability, security, socialSecurity, userFriendly } from '../constants/icons';
import { primaryColor, black } from '../constants/theme';
import { breakpoint, device } from '../constants/breakpoints';
import blockchainBg from '../assets/blockchain-bg.jpg';

const Home = () => {
  return (
    <>
      <SectionA>
        <ContentWrapper>
          <h2>A wallet that protects U.</h2>
          <p>
            By ensuring the initiation of treatment for the patient on time, saving a life, avoiding the cumbersome process
            of record creation, accessibility and authorization.
          </p>
        </ContentWrapper>
      </SectionA>

      <SectionB>
        <ContentWrapper>
          <h3>How does it work?</h3>
          <p>
            Health records are the most important documents which are maintained by the health care facilities of an Individual. 
            It contains all Doctor's proceedings, Diagnostics and lab reports, etc. In response to this EHR was introduced; EHR 
            stands for Electronic Health Records, which are electronic patient data/records maintained by hospitals for easy 
            diagnostics and treatments to improve and streamline data entered into each patient's permanent healthcare file.
          </p>
        </ContentWrapper>
      </SectionB>

      <SectionA>
        <ContentWrapper>
          <h3>Features</h3>
          <FeaturesWrapper>
            <div>
              <div>
                <img src={ethereum} alt="Ethereum" />
              </div>
              <p>The Wallet is built on Ethereum's wallet standards and technology, thus allowing ethereum compatibilty among chains.</p>
            </div>
            <div>
              <div>
                <img src={interop} alt="Interop" />
              </div>
              <p>The Wallet is built on Ethereum's wallet standards and technology, thus allowing ethereum compatibilty among chains.</p>
            </div>
            <div>
              <div>
                <img src={scalability} alt="Scalability" />
              </div>
              <p>The Wallet is built on Ethereum's wallet standards and technology, thus allowing ethereum compatibilty among chains.</p>
            </div>
            <div>
              <div>
                <img src={security} alt="Security" />
              </div>
              <p>The Wallet is built on Ethereum's wallet standards and technology, thus allowing ethereum compatibilty among chains.</p>
            </div>
            <div>
              <div>
                <img src={socialSecurity} alt="Social security" />
              </div>
              <p>The Wallet is built on Ethereum's wallet standards and technology, thus allowing ethereum compatibilty among chains.</p>
            </div>
            <div>
              <div>
                <img src={userFriendly} alt="User-friendly" />
              </div>
              <p>The Wallet is built on Ethereum's wallet standards and technology, thus allowing ethereum compatibilty among chains.</p>
            </div>
          </FeaturesWrapper>
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

const FeaturesWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: 0 -20px;
    justify-content: center;
  
    & > div {
      max-width: 240px;
      margin: 20px;

      div {
        display: flex;
        justify-content: center;
        margin: 20px;

        img {
          width: 40px;
          color: ${primaryColor};
        }
      }

      p {
        margin-top: 8px;
      }
    }
`;

const SectionA = styled.div`
  min-height: 100px;
  padding: 40px 40px 70px 40px;
  color: #51c1e3;
  background: 
    linear-gradient(45deg, rgb(0 94 175 / 78%), rgb(165 74 221 / 52%)), 
    linear-gradient(318deg, #f1558a, transparent), 
    black;
    position: relative;

    &::after {
      content: '';
      position: absolute;
      height: 100%;
      width: 100%;
      top: 0;
      left: 0;
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='93' height='93'%3E%3Cpath stroke='none' fill='%23ffffff08' d='M41.5 8.3867513459481a10 10 0 0 1 10 0l25.507041555162 14.726497308104a10 10 0 0 1 5 8.6602540378444l0 29.452994616207a10 10 0 0 1 -5 8.6602540378444l-25.507041555162 14.726497308104a10 10 0 0 1 -10 0l-25.507041555162 -14.726497308104a10 10 0 0 1 -5 -8.6602540378444l0 -29.452994616207a10 10 0 0 1 5 -8.6602540378444'%3E%3C/path%3E%3C/svg%3E");
      background-image: url(${blockchainBg});
      opacity: 0.05;
      pointer-events: none;
    }
`;

const SectionB = styled.div`
  background: linear-gradient(79deg, #020d26, #370438);
    padding: 40px 40px 70px 40px;
    position: relative;

    &::after {
      content: '';
      position: absolute;
      height: 100%;
      width: 100%;
      top: 0;
      left: 0;
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='93' height='93'%3E%3Cpath stroke='none' fill='%23ffffff08' d='M41.5 8.3867513459481a10 10 0 0 1 10 0l25.507041555162 14.726497308104a10 10 0 0 1 5 8.6602540378444l0 29.452994616207a10 10 0 0 1 -5 8.6602540378444l-25.507041555162 14.726497308104a10 10 0 0 1 -10 0l-25.507041555162 -14.726497308104a10 10 0 0 1 -5 -8.6602540378444l0 -29.452994616207a10 10 0 0 1 5 -8.6602540378444'%3E%3C/path%3E%3C/svg%3E");
      background-image: url(${blockchainBg});
      opacity: 0.05;
      pointer-events: none;
    }

  h3 {
    background: -webkit-linear-gradient(11deg,#c546bad9,#ab9fff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  p { 
    color: #c365c0;
  }
`;


export default Home;