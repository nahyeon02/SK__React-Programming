import React from 'react'

const Link = ({ href, children, ...restProps }) => {
  return (
    <a {...restProps} className="linkA appHeader__homeLink" href={href || './'}>
      {children}
    </a>
  )
}

export default Link
