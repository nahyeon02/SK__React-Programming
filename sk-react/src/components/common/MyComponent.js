// 화살표 함수 컴포넌트 정의
export default function MyComponent({ children, title, role, ...restProps }) {
  // 객체 구조 분해 할당 문법 (자주!!!)
  // const { children, title, role } = props

  return (
    <div {...restProps} title={title} role={role}>
      {children}
    </div>
  )
}
