// 스타일 컴포넌트 : styled-components
import styled from 'styled-components/macro'

export const ScreenOff = styled.span`
  overflow: hidden;
  position: absolute;
  clip: rect(0, 0, 0, 0);
  clip-path: inset(50%);
  width: 1px;
  height: 1px;
  margin: -1px;
  white-space: nowrap;
`
