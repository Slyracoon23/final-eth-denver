import React from 'react';
import styled from "styled-components";
import { ContentWrapper, SectionLight, SectionDark } from '../shared/Layout';
import { H2Light } from '../shared/Typography';
import { primaryColor, primaryColorDark, primaryColorHovered } from '../constants/theme';
import { defaultImages } from '../constants/mockup-data';

const Marketplace = () => {
  return (
    <>
      <SectionLight>
        <ContentWrapper>
          <H2Light>Marketplace</H2Light>
          <p>An overview of all NFTs and securities in the DeedsDAO ecosystem.</p>
          </ContentWrapper>
        </SectionLight>
        <SectionDark>
          <CardsWrapper>
          {defaultImages.map((s, idx) => (
            <div key={idx} className="card">
              <div><img src={s} alt="" /></div>
              <h4>The Graph</h4>
              <p>The Graph is an indexing protocol for querying networks like Ethereum and IPFS. Anyone can build and publish open APIs, called subgraphs, making data easily accessible.</p>
              <div className="button-wrapper"><button><span>99$</span></button></div>
            </div>
          ))}
          </CardsWrapper>
      </SectionDark>
    </>
    
  )
}

const CardsWrapper = styled.div`
  display: flex;
  margin: 0 auto;
  flex-wrap: wrap;
  justify-content: center;

  .card {
    padding: 24px;
    background: linear-gradient(0,#e55be15c,transparent);
    border-radius: 4px;
    border-bottom-left-radius: 12px;
    border-top-right-radius: 12px;
    margin: 12px;
    max-width: 240px;
    box-shadow: 0 0 0 2px ${primaryColor};

    div {
      display: flex;
      justify-content: center;
      
      img {
        width: 64px;
      }
    }

    h4 {
      margin-top: 16px;
    }

    p {
      margin: 8px 0 24px 0;
      font-size: 14px;
      line-height: 1.25em;
      color: #9864c9db;
    }

    .button-wrapper {
      display: flex;
      align-items: center;
      margin-top: 16px;

      button {
        border-radius: 4px;
        color: white;
        height: 32px;
        width: 120px;
        background: ${primaryColor};
        cursor: pointer;
        position: relative;

        &::before {
          position: absolute;
          top: 0;
          left: 0;
          width: 0;
          border-radius: 2px;
          height: 100%;
          content: '';
          background: transparent;
          transition: all 0.3s ease;
        }

        span {
          position: relative;
        }

        &:hover {
          &::before {
            width: 100%;
            background: ${primaryColorHovered};
          }
        }
      }
    }
  }
`;

export default Marketplace;