export default function Heading({
  as = 'h2',
  children,
  content,
  ...restProps
}) {
  // 조건은 h1-6이 아니면, 기본 값을 사용해 as를 컴포넌트로 설정한다.
  // 조건
  const isValidHeadlingLevel = 'h1,h2,h3,h4,h5,h6'.split(',').includes(as)
  const Comp = isValidHeadlingLevel ? as : 'h2'

  return <Comp {...restProps}>{content || children}</Comp>
}
