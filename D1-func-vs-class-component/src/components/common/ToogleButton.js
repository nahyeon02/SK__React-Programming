import React from 'react'

// 언제 함수를 쓰고, 언제 클래스를 쓸까?
// 함수 문법, 클래스 문법
export default class ToggleButton extends React.Component {
  constructor(props) {
    super(props)
    // 컴포넌트 상태
    this.state = {
      // 선택 상태 (선택 안됨)
      selected: false,
    }
  }

  render() {
    return (
      <button
        type="button"
        onClick={() => {
          // console.log('clicked toogle button')
          // 상태 변경 → UI 다시 그립니다 (리 렌더링)
          // this.state.selected = true (허용 안함)
          this.setState({
            selected: !this.state.selected,
          })
        }}
      >
        {this.state.selected ? '활성' : '비활성'}
      </button>
    )
  }
}
