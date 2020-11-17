import React from 'react'

const AccordionHandle = ({ index, active, onChangeIndex }) => {
  return (
    <div>
      <span role="heading" aria-level="3">
        핸들 텍스트
      </span>
      <button type="button" onClick={(e) => onChangeIndex(index)}>
        {active ? '닫기' : '열기'}
      </button>
    </div>
  )
}

export default AccordionHandle
