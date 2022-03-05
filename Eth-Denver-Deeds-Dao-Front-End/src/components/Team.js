import React from 'react';
import styled from "styled-components";
import { ContentWrapper, SectionLight } from '../shared/Layout';
import { H2Light } from '../shared/Typography';
import pwe_eth from '../assets/members/pwe_eth.png';
import slyracoon23 from '../assets/members/slyracoon23.png';

const Team = () => {
  const members = [
    { idx: 0, name: 'SlyRacoon23', function: 'Backend', avatar: pwe_eth },
    { idx: 2, name: 'pwe.eth', function: 'Frontend', avatar: slyracoon23 },
    { idx: 1, name: 'Favian.eth', function: 'Misc', avatar: '' },
    { idx: 3, name: 'lyons800.eth', function: 'UX', avatar: '' }

  ]
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
                  style={{background: 'url(' + m.avatar + ') center center / cover, radial-gradient(circle at left top, rgba(227, 0, 239, 0) 0%, rgba(234, 0, 187, 0.5) 100%)' }}
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
  margin: 0 -12px;

  li {
    padding: 12px;
  }

  .img {
    padding: 12px;
    background-blend-mode: multiply;
    width: 200px;
    height: 200px;
    margin-bottom: 12px;
  }
`;

export default Team;