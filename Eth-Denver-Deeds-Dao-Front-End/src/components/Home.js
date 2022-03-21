import React from 'react'
import styled from "styled-components";
import { ethereum, interop, scalability, security, socialSecurity, userFriendly } from '../constants/icons';
import { primaryColor, secondaryColor } from '../constants/theme';
import { ContentWrapper, SectionLight, SectionDark } from '../shared/Layout';
import { H2Light, H3Light, H3Dark } from '../shared/Typography';

const Home = () => {
  return (
    <main>
      <SectionLight>
        <ContentWrapper>
          <H2Light>Fractionalized debt portfolios for NFTs.</H2Light>
          <p>powered by Balancer's V2 liquidity pools</p>
        </ContentWrapper>
      </SectionLight>

      <SectionDark>
        <ContentWrapper>
          <H3Dark>How does it work?</H3Dark>
          <StyledUl>
            <li>
              <p>DeedsDAO is a decentralized protocol that enables lenders of P2P NFT markets to unlock their liquidity!</p>
            </li>
            <li>
              <p>Lender of P2P NFT markets will be able to supply their "Debt NFT Portfolio" a.k.a. Debt Pool to the DeedsDAO 
              Protocol. The protocol will take their "Debt NFT Portfolio" and create a Balancer pool that will put the P2P 
              debt NFT position on the secondary market.</p>
            </li>
            <li>
              <p>Lenders creating pools get liquidity and investors get accessiblity to the P2P NFT lending/borrowing market.</p>
            </li>
          </StyledUl>
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
    </main>
    
  )
}

const StyledUl = styled.ul`
  margin-left: 24px;

  li {
    list-style-type: disc;
    color: ${secondaryColor};
  
    &:not(:last-child) p {
      margin-bottom: 12px;
    }
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

export default Home;