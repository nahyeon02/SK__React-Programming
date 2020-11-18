import styled from 'styled-components/macro'
import { colorScheme } from 'GlobalStyles'

const { white, black, accent, accentHover } = colorScheme

// section.featureSection
export const Section = styled.section`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 100vh;

  &::before {
    content: '';
    opacity: 0;
    position: absolute;
    z-index: -5;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: ${black} no-repeat center / cover;
    transition: opacity 0.8s ease;
  }

  &::after {
    content: '';
    position: fixed;
    z-index: -1;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: ${black};
    opacity: 0.24;
  }
`

export const Headline = styled.h2`
  margin-top: 0;
  font-size: 3.6rem;
  font-weight: 400;
  padding: 0 2rem;
  text-align: center;
`
export const Description = styled.p`
  margin-top: 1rem;
  font-size: 1.6rem;
  font-weight: 300;
  color: #dfdfdf;
  padding: 0 2rem;
  text-align: center;
`

export const Link = styled.a`
  margin-top: 4rem;
  border-radius: 3rem;
  padding: 1rem 2rem;
  font-size: 1.3rem;
  background: ${accent};

  &:hover {
    background: ${accentHover};
  }
`

export const Button = styled.button`
  opacity: 0.7;
  position: absolute;
  bottom: 4rem;
  border-radius: 50%;
  background: transparent;
  transform: scale(0.9);

  // Global Style 덮어쓰기 (캐스케이딩 규칙 우선 설정)
  // 참고: https://styled-components.com/docs/basics#pseudoelements-pseudoselectors-and-nesting
  && {
    border: 2px solid ${white};
    padding: 0.4rem;
  }

  &:hover {
    opacity: 1;
  }

  &.is--first {
    bottom: 18rem;
    transition: bottom 0.4s ease;
  }

  .rotate-90 {
    transform: rotateZ(-90deg);
  }

  .rotate90 {
    transform: rotateZ(90deg);
  }
`
