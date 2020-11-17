import { useState } from 'react'
import { array } from 'prop-types'
import AccordionHandle from './AccordionHandle'
import AccordionPanel from './AccordionPanel'

/* -------------------------------------------------------------------------- */

export default function AccordionList({ list, ...restProps }) {
  // 함수 컴포넌트의 상태로 활용
  const [currentIndex, setCurrentIndex] = useState(0)

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
