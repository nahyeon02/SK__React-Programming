import React from 'react'
import { string } from 'prop-types'

const Thumb = (props) => {
  return (
    <div className={props.classes}>
      <img src={props.src} alt={props.alt} title={props.title} />
    </div>
  )
}

Thumb.propTypes = {
  alt: string,
  title: string,
  classes: string,
  src: string.isRequired,
}

export default Thumb
