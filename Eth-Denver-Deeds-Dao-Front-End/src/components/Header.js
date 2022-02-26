import React from 'react';
import styled from "styled-components";
import { linkColor, linkHoverColor } from '../constants/theme';

function Header() {
  return (
    <Menu>
      <Logo>DeedsDAO</Logo>
      <nav>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Team</a></li>
          <li><a href="#">Marketplace</a></li>
        </ul>
      </nav>
      <ConnectWallet>
        <button>Connect Wallet</button>
      </ConnectWallet>
    </Menu>
  )
}


const ConnectWallet = styled.div`
  display: flex;
  align-items: center;

  button {
    color: ${linkHoverColor};
    white-space: nowrap;
    text-transform: uppercase;
    border-radius: 4px;
    border: 2px solid ${linkHoverColor};
    height: 40px;
    padding: 8px;
  }
`;


const Logo = styled.div`
  color: ${linkHoverColor};
  line-height: 100px;
`;

const Menu = styled.div`
  background: white;
  box-shadow: 0px 10px 25px -3px rgba(43, 61, 80, 0.1);
  display: flex;
  padding: 0 20px;

  nav {
    display: flex;
    align-items: center;
    min-width: 0;
    width: 100%;
    margin: 0 20px;

    ul {
      display: flex;

      li {
        display: flex;
        justify-content: center;
        height: 100px;
        line-height: 100px;
        align-items: center;

        &:not(:last-child) {
          margin-right: 20px;
        }

        a {
          height: 100px;
          color: ${linkColor};
          border-bottom: 2px solid transparent;

          &:hover {
            color: ${linkHoverColor};
            border-bottom: 2px solid ${linkHoverColor};
          }
        }
      }
    }
  }
`;

export default Header;
