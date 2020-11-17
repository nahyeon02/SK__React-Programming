import { createContext, useEffect, useRef, useState } from 'react'
import { array } from 'prop-types'
import AccordionHandle from './AccordionHandle'
import AccordionPanel from './AccordionPanel'
import AccordionItem from './AccordionItem'

// Accordion 컨텍스트 생성
export const AccordionContext = createContext()

/* -------------------------------------------------------------------------- */

export default function AccordionList({ list, ...restProps }) {
  // 함수 컴포넌트의 상태로 활용 ← useState() 훅 활용
  const [currentIndex, setCurrentIndex] = useState(0)

  // <li> 실제 DOM 요소 참조 : ref
  // const listRef = useRef(null)

  // 사이트 이펙트 (useEffect)
  useEffect(() => {
    // console.log(listRef) // { curernt: DOMNode }
  }, [])

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
    <AccordionContext.Provider value={{ currentIndex, setCurrentIndex }}>
      <ul {...restProps} className="accordion">
        {list.map((item, index) => (
          <AccordionItem key={item.id}>
            <AccordionHandle
              className="accordion__handle"
              content={item.handleText}
              index={index}
            />
            <AccordionPanel index={index} className="accordion__panel">
              {item.panelInfo}
            </AccordionPanel>
          </AccordionItem>
        ))}
      </ul>
    </AccordionContext.Provider>
  )
}

// 함수형 컴포넌트의 속성 검사
AccordionList.propTypes = {
  list: array.isRequired,
}
