import React from 'react';
import styled from "styled-components";
import { linkColor, linkHoverColor, primaryColor, primaryHoverColor } from '../constants/theme';
import logo from '../assets/logo.png';

function Header() {
  return (
    <Menu>
      <Logo><img src={logo} alt="Logo" /></Logo>
      <nav>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Team</a></li>
          <li><a href="#">Marketplace</a></li>
        </ul>
      </nav>
      <ConnectWallet>
        <button><span>Connect Wallet</span></button>
      </ConnectWallet>
    </Menu>
  )
}


const ConnectWallet = styled.div`
  display: flex;
  align-items: center;

  button {
    color: ${primaryColor};
    white-space: nowrap;
    text-transform: uppercase;
    border-radius: 4px;
    box-shadow: 0 0 0 2px ${primaryColor};
    height: 40px;
    padding: 8px;
    cursor: pointer;
    position: relative;

    span {
      position: relative;
      z-index: 1;
    }

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

    &:hover {
      color: white;

      &::before {
        width: 100%;
        background: ${primaryHoverColor};
      }
    }
  }
`;


const Logo = styled.div`
  padding: 20px;

  img {
    width: 55px;
  }
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
          padding: 0 12px;

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
