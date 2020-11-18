import classNames from 'classnames'
import { createContext, useContext, useState } from 'react'
import { array } from 'prop-types'

const AccordionContext = createContext()

export default function Accordion({ list, children, className, ...restProps }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  return (
    <AccordionContext.Provider value={{ currentIndex, setCurrentIndex }}>
      <ul {...restProps} className={classNames('accordion', className)}>
        {children}
      </ul>
    </AccordionContext.Provider>
  )
}

// 함수형 컴포넌트의 속성 검사
Accordion.propTypes = {
  list: array.isRequired,
}

/* -------------------------------------------------------------------------- */
// [Compound Components]
// <Accordion.Item />
// <Accordion.Handle />
// <Accordion.Panel />

Accordion.Item = function AccordionItem({ children, className, ...restProps }) {
  return (
    <li {...restProps} className={classNames('accordion__item', className)}>
      {children}
    </li>
  )
}

Accordion.Handle = function AccordionHandle({
  index,
  content,
  children,
  className,
  ...restProps
}) {
  const { currentIndex, setCurrentIndex } = useContext(AccordionContext)

  return (
    <div {...restProps} className={classNames('accordion__handle', className)}>
      <span role="heading" aria-level="3">
        {content}
      </span>
      <button type="button" onClick={(e) => setCurrentIndex(index)}>
        {currentIndex === index ? '닫기' : '열기'}
      </button>
    </div>
  )
}

Accordion.Panel = function AccordionPanel({
  index,
  children,
  className,
  ...restProps
}) {
  const { currentIndex } = useContext(AccordionContext)

  return (
    <div
      {...restProps}
      style={{
        display: currentIndex === index ? 'block' : 'none',
      }}
    >
      {children}
    </div>
  )
}
