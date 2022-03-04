import React from 'react';
import styled from "styled-components";
import { primaryColor, primaryHoverColor } from '../constants/theme';
import logo from '../assets/logo.png';
import { hamburger, close } from '../constants/icons';
import { breakpoint, device } from '../constants/breakpoints';
import { menu } from '../constants/menu';
import blockchainBg from '../assets/blockchain-bg.jpg';
import { Link } from "react-router-dom";
import useMediaQuery from '@mui/material/useMediaQuery';

const Header = ({setMobileOpen, mobileOpen}) => {
  const isMobile = useMediaQuery(breakpoint(device.md));
  console.log(isMobile, breakpoint(device.sm))
  const headerStyle = { background: 'white' };
  const menuEntries = menu.map(entry => (
    <li key={entry.idx}><Link to={entry.url} onClick={ () => setMobileOpen(false) }>{entry.label}</Link></li>
  ));

  return (
    <FullHeader style={headerStyle}>
      <Logo><img src={logo} alt="Logo" /></Logo>
      {!isMobile && (
        <DesktopMenu>
          <ul>
            {menuEntries}
          </ul>
        </DesktopMenu>
      )}
      <div className="right">
        <ConnectWallet>
          <button><span>Connect Wallet</span></button>
        </ConnectWallet>
        {isMobile && (
          <MobileMenu>
            {!mobileOpen && <img src={hamburger} alt="Menu" onClick={ () => setMobileOpen(!mobileOpen) } />}
            {mobileOpen && (
              <>
                <img src={close} alt="Close Menu" onClick={ () => setMobileOpen(!mobileOpen) } />
                <nav>
                  <ul>
                    {menuEntries}
                  </ul>
                </nav>
              </>
            )}
          </MobileMenu>
          )}
      </div>
    </FullHeader>
  )
}

const DesktopMenu = styled.nav`
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
        height: 94px;
        color: #6fc5fe;
        border-bottom: 4px solid transparent;
        padding: 0 12px 2px 12px;
        position: relative;
        border-radius: 2px;
        text-transform: uppercase;
        letter-spacing: 1.2px;

        &::after {
          position: absolute;
          content: '';
          width: 100%;
          height: 4px;
          left: 0;
          bottom: -4px;
          transform: scaleX(0);
          transform-origin: 0 0;
          transition: all .5s;
          background: #8656ef;
          border-radius: 2px;
      }

        &:hover {
          color: #945cd1;
          border-bottom-color: #d123dd;

          &:after {
            transform: scaleX(1);
          }
        }
      }
    }
  }
`;

const MobileMenu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 20px;
  cursor: pointer;

  img {
    display: none;
    padding: 20px;

    ${breakpoint(device.md)} {
      display: inline;
    }
  }

  nav {
    display: flex;
    justify-content: center;
    right: 0;
    position: fixed;
    left: 0;
    top: 100px;
    bottom: 0;
    background:
      linear-gradient(45deg, rgb(0 94 175 / 78%), rgb(165 74 221 / 52%)), 
      linear-gradient(318deg, #f1558a, transparent), 
      black;
    padding: 60px 40px 90px 40px;
    z-index: 1;

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

    ul {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;

      li {
        margin: 24px 0;

        a {
          font-size: 30px;
          background: -webkit-linear-gradient(54deg,#55ceffb3,#f96df5);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;

          &:hover {
            background: -webkit-linear-gradient(53deg,#39c9f5,#ffc6ff);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }
        }
      }
    }
  }
`;

const ConnectWallet = styled.div`
  display: flex;
  align-items: center;

  button {
    color: white;
    white-space: nowrap;
    text-transform: uppercase;
    border-radius: 4px;
    height: 40px;
    padding: 8px;
    cursor: pointer;
    position: relative;
    background: #aa48a7;
    box-shadow: 0 5px 20px -2px rgb(98 12 163 / 50%);

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
        background: #30499275;
        box-shadow: 0 5px 20px -2px rgb(97 25 163 / 48%);
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

const FullHeader = styled.div`
  background: white;
  box-shadow: -1px 4px 25px 6px rgb(43 61 80 / 48%);
  display: flex;
  padding: 0 20px;
  height: 92px;
  position: relative;
  z-index: 1;
  border-bottom: 4px solid #6fc5fe;

  ${breakpoint(device.md)} {
    justify-content: space-between;
  }

  .right {
    display: flex;
  }
`;

export default Header;
