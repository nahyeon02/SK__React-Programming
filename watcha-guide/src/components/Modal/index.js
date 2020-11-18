import React, { useState, useEffect } from 'react'
import { string } from 'prop-types'
import { createPortal } from 'react-dom'

/* -------------------------------------------------------------------------- */
// 접근성 관련 주제 : 포털 사용할 필요
// https://ko.reactjs.org/docs/portals.html#gatsby-focus-wrapper

const Modal = ({ open = false, target, onClose }) => {
  // 실제 DOM 객체 참조
  const [targetNode, setTargetNode] = useState(null)

  // 사이드 이펙트
  // 가상 DOM이 실제 DOM에 마운트 된 이후 실행
  useEffect(() => {
    // 실제 DOM 노드 찾아올 것입니다.
    const targetEl = document.querySelector(target)
    console.log(targetEl)
    setTargetNode(targetEl)
  }, [target])

  const reactElement = (
    <div className="modal" lang="en">
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum qui est
        numquam enim, totam et. Dolor explicabo at quidem, deleniti natus, rem
        consequatur excepturi facere cumque, quod quia nemo quae?
      </p>
      <button
        type="button"
        onClick={() => onClose()}
        className="button button--confirm"
      >
        Confirm
      </button>
      <button
        type="button"
        onClick={() => onClose()}
        className="button button--cancel"
      >
        Cancel
      </button>
    </div>
  )

  // 유효성 검사
  if (!targetNode) {
    // 로딩 스피너 활용
    return <div>타겟 노드 탐색 중....</div>
  }

  // 포털 작동
  return open ? createPortal(reactElement, targetNode) : null
}

Modal.propTypes = {
  target: string.isRequired,
}

export default Modal
