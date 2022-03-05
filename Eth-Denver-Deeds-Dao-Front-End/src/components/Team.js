import React from 'react';
import styled from "styled-components";
import { ContentWrapper, SectionLight } from '../shared/Layout';
import { H2Light } from '../shared/Typography';
import pwe_eth from '../assets/members/pwe_eth.png';
import slyracoon23 from '../assets/members/slyracoon23.png';

const Team = () => {
  const members = [
    { idx: 0, name: 'SlyRacoon23', function: 'Backend', avatar: slyracoon23 },
    { idx: 2, name: 'pwe.eth', function: 'Frontend', avatar: pwe_eth },
    { idx: 1, name: 'Favian.eth', function: 'Misc', avatar: '' },
    { idx: 3, name: 'lyons800.eth', function: 'UX', avatar: '' }
  ];

  const centeredAndCover = 'center center / cover';
  const radialGradient = 'radial-gradient(circle at left top, rgb(255 0 243) 0%, rgb(0 178 255)';

  const onHoverImage = (event, avatarUrl) => {
    event.target.style.background = 'url(' + avatarUrl + ') ' 
      + centeredAndCover;
  }

  const onUnHoverImage = (event, avatarUrl) => {
    event.target.style.background = 'url(' + avatarUrl + ') ' 
      + centeredAndCover + ';' + radialGradient;
  }

  return (
    <>
      <SectionLight>
        <ContentWrapper>
          <H2Light>Who we are</H2Light>
          <p>Bunch of crypto enthusiasts. What else.</p>
          <br />
          <MembersWrapper>
            {members.map(m => (
              <li key={m.idx}>
                <div
                  className="img"
                  src={m.avatar}
                  onMouseEnter={e => onHoverImage(e, m.avatar)}
                  onMouseLeave={e => onUnHoverImage(e, m.avatar)}
                  style={{
                    background: 'url(' + m.avatar +  ') ' 
                      + centeredAndCover + ';' + radialGradient,
                   }}
                  alt={'Avatar of ' + m.name} 
                />
                <h4>{m.name}</h4>
                <p>{m.function}</p>
              </li>
            ))}
          </MembersWrapper>
        </ContentWrapper>
      </SectionLight>
    </>
  )
}

const MembersWrapper = styled.ul`
  display: flex;
  margin: 12px -12px 0 -12px;

  li {
    padding: 12px;

    .img {
      border-radius: 16px;
      padding: 12px;
      background-blend-mode: luminosity;
      width: 200px;
      height: 200px;
      margin-bottom: 12px;
      transition: all 0.5s ease;
      border: 4px solid #dd5ae1;
      background-position-x: center;
      background-position-y: center;
      background-size: cover;

      &:hover {
        border-radius: 0;
        transform: scale(1.1);
        margin-top: -8px;
        transform-origin: center;
        margin-bottom: 20px;
        border: 4px solid white;
      }
    }

    h4 {
      font-weight: bold;
    }
  }
`;

export default Team;