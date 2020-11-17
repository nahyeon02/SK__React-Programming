import styled from 'styled-components/macro'
import { colorScheme } from '../../GlobalStyles'

// nav.appNavigation.appNavigation--fixed
export const Container = styled.nav`
  position: fixed;
  z-index: 80;
  top: 16vh;
  left: 50%;
  transform: translateX(-50%);

  ul {
    display: flex;
    flex-flow: row;
  }

  @media (min-width: 48.75em /* 780px */) {
    top: 50%;
    right: 3rem;
    left: initial;
    transform: translateY(-50%);

    ul {
      flex-flow: column;
    }
  }
`

// button.appNavigation__button.appNavigation__button--active
export const Button = styled.button`
  cursor: pointer;
  position: relative;
  display: block;
  width: ${({ size }) => size || '1.8rem'};
  height: ${({ size }) => size || '1.8rem'};
  margin: 1rem;
  border: 0;
  border-radius: 50%;
  transition: all 0.4s ease;

  && {
    background: rgba(240, 240, 240, 0.45);
  }

  &.is-active {
    background: ${colorScheme.white};
  }

  @media (min-width: 48.75em /* 780px */) {
    .tooltip {
      opacity: 0;
      position: absolute;
      top: -0.4rem;
      right: 0;
      width: 7rem;
      text-align: right;
      line-height: 1.45;
      font-size: 1.1rem;
      text-shadow: 0 0 0.6rem rgba(0, 0, 0, 0.65);
      transition: all 0.3s ease;
    }

    &:hover .tooltip,
    &:focus-visible .tooltip {
      /* a11yHidden 초기화 */
      overflow: initial;
      clip: initial;
      clip-path: initial;
      white-space: initial;
      /* 화면에 표시 */
      opacity: 1;
      right: 3rem;
    }
  }
`
