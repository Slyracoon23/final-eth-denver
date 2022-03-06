import React from 'react'
import styled from "styled-components";
import { ethereum, interop, scalability, security, socialSecurity, userFriendly } from '../constants/icons';
import { primaryColor } from '../constants/theme';
import { ContentWrapper, SectionLight, SectionDark } from '../shared/Layout';
import { H2Light, H3Light, H3Dark } from '../shared/Typography';

const Home = () => {
  return (
    <>
      <SectionLight>
        <ContentWrapper>
          <H2Light>A wallet that protects U.</H2Light>
          <p>
            By ensuring the initiation of treatment for the patient on time, saving a life, avoiding the cumbersome process
            of record creation, accessibility and authorization.
          </p>
        </ContentWrapper>
      </SectionLight>

      <SectionDark>
        <ContentWrapper>
          <H3Dark>How does it work?</H3Dark>
          <p>
            Health records are the most important documents which are maintained by the health care facilities of an Individual. 
            It contains all Doctor's proceedings, Diagnostics and lab reports, etc. In response to this EHR was introduced; EHR 
            stands for Electronic Health Records, which are electronic patient data/records maintained by hospitals for easy 
            diagnostics and treatments to improve and streamline data entered into each patient's permanent healthcare file.
          </p>
        </ContentWrapper>
      </SectionDark>

      <SectionLight>
        <ContentWrapper>
          <H3Light>Features</H3Light>
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
      </SectionLight>
    </>
    
  )
}

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

export default Home;