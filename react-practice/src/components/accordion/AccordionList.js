import React, { Component } from 'react'
import { array } from 'prop-types'
import AccordionHandle from './AccordionHandle'
import AccordionPanel from './AccordionPanel'

export default class accordionList extends Component {
  // 속성 검사
  static propTypes = {
    list: array.isRequired, // 필수 입력 속성
  }

  // 상태
  // 클래스 필드 문법 (ES 표준 제안 상태 → 표준으로 결정될 예정)
  state = {
    list: null,
    isLoading: false,
    hasError: null,
    currentIndex: 0,
    activeClassName: 'is--active',
  }

  // 상태 변경 메서드(자식 컴포넌트 전달(props) ← 콜백(callback))
  // 클래스 필드 문법을 사용해 화살표 함수 활용
  changeCurrentIndex = (index) => {
    // 상태 변경
    this.setState({
      currentIndex: index,
    })
  }

  // 렌더링
  render() {
    const { list } = this.props
    const { currentIndex } = this.state

    return (
      <ul className="accordion">
        {list.map((item, index) => (
          <li key={item.id} className="accordion__item">
            <AccordionHandle
              className="accordion__handle"
              content={item.handleText}
              active={currentIndex === index}
            />
            <AccordionPanel className="accordion__panel">
              {item.panelInfo}
            </AccordionPanel>
          </li>
        ))}
      </ul>
    )
  }
}
