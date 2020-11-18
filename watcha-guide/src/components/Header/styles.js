import styled from 'styled-components/macro'
import { colorScheme } from 'GlobalStyles'

/* -------------------------------------------------------------------------- */

const { black, white, whiteHover } = colorScheme

/* -------------------------------------------------------------------------- */

// header.appHeader.appHeader--fixed
export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 0.6s ease 0.3s;

  position: fixed;
  z-index: 70;
  top: 0;
  left: 50%;
  width: 100%;
  transform: translateX(-50%);
`

// h1.appHeader__brand
export const Brand = styled.h1`
  margin-top: 0;
`

// a.appHeader__homeLink
export const HomeLink = styled.a`
  display: block;
  padding: 0 0.4rem 0.4rem;
`

// a.appHeader__signInLink
export const SignInLink = styled.a`
  border-radius: 2rem;
  padding: 0.5rem 1.7rem;
  letter-spacing: -0.03em;
  font-size: 1.4rem;
  font-weight: bold;
  background: ${white};
  color: ${black};

  :hover {
    background: ${whiteHover};
  }
`
