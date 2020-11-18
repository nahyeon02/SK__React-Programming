// useContext 등장 하기 이전에는 쓸만했으나...
import React from 'react'

// 함수형 컴포넌트 Context.Consumer 불편...
// 함수형 컴포넌트 → 클래스 컴포넌트로 바꿔야 하나??
// static contextType = Context → this.context

// 함수형 컴포넌트 → 클래스형 컴포넌트으로 반환

export default function withContext(Context) {
  return function (FnComp) {
    return class extends React.Component {
      static contextType = Context
      render() {
        return <FnComp context={this.context} />
      }
    }
  }
}

// HOC 고차 컴포넌트
// withContext(StoreContext)(App)
