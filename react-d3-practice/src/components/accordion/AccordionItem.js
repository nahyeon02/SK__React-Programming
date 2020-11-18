import React from 'react'

const AccordionItem = ({ children, ...restProps }) => {
  return (
    <li {...restProps} className="accordion__item">
      {children}
    </li>
  )
}

export default AccordionItem
