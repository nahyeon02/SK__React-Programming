import React from 'react'

export default function Spinner() {
  return (
    <div className="lds-ring" role="img" aria-label="로딩 중...">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  )
}
