import { ScreenOff } from './styles'

// 리엑트 컴포넌트 : function component
export default function A11yHidden({ children, as = 'span', ...restProps }) {
  return (
    <ScreenOff as={as} {...restProps}>
      {children}
    </ScreenOff>
  )
}
