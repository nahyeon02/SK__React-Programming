// HOC: 컴포넌트 → 가공 후에 컴포넌트 반환

import { render } from 'react-dom'

const defaultOptions = {
  // 기본 옵션
}

// 컴포넌트 -> 컴포넌트 반환
const withWrapper = (options) => {
  // 전달 받은 옵션을 처리해서 새로운 옵션 합성
  // JS 설계 : 믹스인 패턴
  const config = Object.assign({}, defaultOptions, options)
  return function (Comp) {
    return <Comp>{render(config)}</Comp>
  }
}

export default withWrapper

// const WrappedApp = withWrapper((config) => {}, {})(App)
