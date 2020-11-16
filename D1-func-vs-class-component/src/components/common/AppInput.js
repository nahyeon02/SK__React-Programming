// rcce
// Semantic Input
// label[for="id"] + input[id="id"]

import React, { Component } from 'react'
import { string } from 'prop-types'

// 레이블 디자인
// 웹 퍼블리셔가 싫어 함...
const labelStyles = {
  display: 'flex',
  fontSize: '20px',
}

const a11yHiddenLabelStyle = {
  position: 'absolute',
  overflow: 'hidden',
  width: 1,
  height: 1,
  margin: -1,
  padding: 0,
  whiteSpace: 'nowrap',
}

// 앱 인풋 (레이블 포함) 컴포넌트
// 앱 전체에서 사용되는 공용 컴포넌트
class AppInput extends Component {
  // class field syntax
  // webpack + babel
  state = {
    input: '초기 값이 출력',
  }

  // 클래스 멤버
  static propTypes = {
    id: string.isRequired,
    label: string.isRequired,
  }

  render() {
    // 부모 컴포넌트 props
    // <AppInput id="" label="" />
    const { id, label, a11yHidden } = this.props
    const { input } = this.state

    return (
      <div className="formControl">
        <label
          style={!a11yHidden ? labelStyles : a11yHiddenLabelStyle}
          htmlFor={id}
        >
          {label}
        </label>
        <input
          type="text"
          id={id}
          value={input}
          onInput={(e) => this.setState({ input: e.target.value })}
        />
      </div>
    )
  }
}

export default AppInput
