import React from 'react'
import Header from './Header';
import styled from "styled-components";
import { ethereum, interop, scalability, security, socialSecurity, userFriendly } from '../constants/icons';
import { primaryColor } from '../constants/theme';

const Home = () => {
  return (
    <>
      <Header />
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
            <div class="row">
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
            </div>
            <div class="row">
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
`;

const FeaturesWrapper = styled.div`
  .row {
    display: flex;
    margin-bottom: 40px;

    & > div {
      max-width: 250px;
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


export default Home;