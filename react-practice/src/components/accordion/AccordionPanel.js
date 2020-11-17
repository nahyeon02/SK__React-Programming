import React from 'react'

const accordionPanel = ({ children, ...restProps }) => {
  return <div {...restProps}>{children}</div>
}

export default accordionPanel
