import { useState } from 'react'
import { array } from 'prop-types'
import AccordionHandle from './AccordionHandle'
import AccordionPanel from './AccordionPanel'

/* -------------------------------------------------------------------------- */

export default function AccordionList({ list, ...restProps }) {
  // 함수 컴포넌트의 상태로 활용 ← useState() 훅 활용
  const [currentIndex, setCurrentIndex] = useState(0)

  // useEffect 훅 (사이드 이펙트: 부작용)
  // componentDidMount -> 유사한 방식으로 작동
  // componentWillUnmount => 유사한 방식으로 작동하는 cleanup
  // 메모이제이션 -> 의존성 처리 [], [의존값, 의존값]
  // 부작용: 순수하지 못한 행위
  // 네트워크 비동기 통신 요청/응답

  // useRef 훅 (실제 DOM 요소 또는 React 요소 참조) → forwardRef (ref 포워딩)
  // 함수 안에 함수를 작성하고 쓴다.... → 최악!!! (성능 이슈)
  // useCallback 훅

  return (
    <ul {...restProps} className="accordion">
      {list.map((item, index) => (
        <li key={item.id} className="accordion__item">
          <AccordionHandle
            className="accordion__handle"
            content={item.handleText}
            index={index}
            active={currentIndex === index}
            onChangeIndex={setCurrentIndex}
          />
          <AccordionPanel
            className="accordion__panel"
            active={currentIndex === index}
          >
            {item.panelInfo}
          </AccordionPanel>
        </li>
      ))}
    </ul>
  )
}

// 함수형 컴포넌트의 속성 검사
AccordionList.propTypes = {
  list: array.isRequired,
}
