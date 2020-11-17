import { useContext } from 'react'
import { AccordionContext } from './AccordionList'

const AccordionHandle = ({ index }) => {
  const { currentIndex, setCurrentIndex } = useContext(AccordionContext)
  return (
    <div>
      <span role="heading" aria-level="3">
        핸들 텍스트
      </span>
      <button type="button" onClick={(e) => setCurrentIndex(index)}>
        {currentIndex === index ? '닫기' : '열기'}
      </button>
    </div>
  )
}

export default AccordionHandle
