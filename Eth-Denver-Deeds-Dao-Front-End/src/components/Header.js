import React from 'react';
import styled from "styled-components";
import { primaryColor, primaryHoverColor } from '../constants/theme';
import logo from '../assets/logo.png';
import { hamburger, close } from '../constants/icons';
import { breakpoint, device } from '../constants/breakpoints';
import { menu } from '../constants/menu';
import { black, gray } from '../constants/theme';
import { Link } from "react-router-dom";

const Header = ({setMobileOpen, mobileOpen}) => {
  const headerStyle = { background: mobileOpen ? gray : 'white' };
  const menuEntries = menu.map(entry => (
    <li key={entry.idx}><Link to={entry.url} onClick={ () => setMobileOpen(false) }>{entry.label}</Link></li>
  ));

  return (
    <FullHeader style={headerStyle}>
      <Logo><img src={logo} alt="Logo" /></Logo>
      <DesktopMenu>
        <ul>
          {menuEntries}
        </ul>
      </DesktopMenu>
      <div className="right">
        <ConnectWallet>
          <button><span>Connect Wallet</span></button>
        </ConnectWallet>
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

  ${breakpoint(device.md)} {
    display: none;
  }

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
        color: ${primaryColor};
        border-bottom: 2px solid transparent;
        padding: 0 12px;

        &:hover {
          color: ${primaryHoverColor};
          border-bottom: 2px solid ${primaryHoverColor};
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
    background: ${gray};
    padding: 60px 40px 90px 40px;

    ul {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;

      li {
        margin: 24px 0;

        a {
          font-size: 30px;
          color ${black};

          &:hover {
            color: ${primaryHoverColor};
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
    color: ${primaryColor};
    white-space: nowrap;
    text-transform: uppercase;
    border-radius: 4px;
    background: ${primaryColor};
    color: white;
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

const FullHeader = styled.div`
  background: white;
  box-shadow: 0px 10px 25px -3px rgba(43, 61, 80, 0.1);
  display: flex;
  padding: 0 20px;
  height: 100px;

  ${breakpoint(device.md)} {
    justify-content: space-between;
  }

  .right {
    display: flex;
  }
`;

export default Header;
