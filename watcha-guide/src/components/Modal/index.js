import React, { useState, useEffect, useRef } from 'react'
import { string } from 'prop-types'
import { createPortal } from 'react-dom'
import A11yHidden from '../A11yHidden'

/* -------------------------------------------------------------------------- */
// 접근성 관련 주제 : 포털 사용할 필요
// https://ko.reactjs.org/docs/portals.html#gatsby-focus-wrapper

const Modal = ({ open = false, target, id, onClose }) => {
  // 컴포넌트 상태, Setter 함수
  const [targetNode, setTargetNode] = useState(null)
  // 실제 DOM 객체 참조
  const paragraphRef = useRef(null)

  // 사이드 이펙트
  // 가상 DOM이 실제 DOM에 마운트 된 이후 실행
  useEffect(() => {
    // 실제 DOM 노드 찾아올 것입니다.
    const targetEl = document.querySelector(target)
    console.log(targetEl)
    setTargetNode(targetEl)
  }, [target])

  useEffect(() => {
    if (open) {
      const { current: pNode } = paragraphRef
      console.log(pNode)
      window.setTimeout(() => {
        pNode.style.color = 'blue'
      }, 2000)
    }
  }, [open])

  const reactElement = (
    <div
      // 다이얼로그 역할 부여
      role="dialog"
      // 모달(Dim 처리) 임을 명시
      aria-modal="true"
      // id 속성 모달을 제어하는 버튼과 연결 됨
      id={id}
      // 다이얼로그 제목 연결
      aria-labelledby="dialog__headline"
      className="modal"
      lang="en"
    >
      {/* 다이얼로그 제목이지만 화면에서는 감춤, 스크린 리더는 읽음 */}
      <A11yHidden as="h4" id="dialog__headline">
        Modal Headline
      </A11yHidden>

      <p ref={paragraphRef}>
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
  id: string.isRequired,
}

export default Modal
