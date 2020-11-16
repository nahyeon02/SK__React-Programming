import React from 'react'
import { string } from 'prop-types'

/* -------------------------------------------------------------------------- */

const AppRadio = ({ label, checked }) => {
  return (
    <div className="formControl">
      <label>
        <input
          type="radio"
          checked={checked}
          onChange={(e) => console.log(e)}
        />
        {label}
      </label>
    </div>
  )
}
// 필수 속성 설정
AppRadio.propTypes = {
  label: string.isRequired,
}
// 속성 기본 값 설정
AppRadio.defaultProps = {
  checked: false,
}

export default AppRadio
