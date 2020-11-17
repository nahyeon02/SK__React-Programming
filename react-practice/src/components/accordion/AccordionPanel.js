import React from 'react'

const accordionPanel = ({ active, children, ...restProps }) => {
  return (
    <div
      {...restProps}
      style={{
        display: active ? 'block' : 'none',
      }}
    >
      {children}
    </div>
  )
}

export default accordionPanel
