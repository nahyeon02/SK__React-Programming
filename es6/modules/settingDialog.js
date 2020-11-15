import { CLASSES } from '../constants.js'

const {
  self: dialogClass,
  button: dialogButtonClass,
  closeButton: dialogCloseButtonClass,
  dim: dialogDimClass,
  selfShow: dialogShowClass,
  dimShow: dialogdimShowClass,
} = CLASSES.dialog

// '개인정보 처리 방침' 버튼 참조
const buttonPrivacyPolicy = document.querySelector(`.${dialogButtonClass}`)
// 다이얼로그 요소 참조
const dialog = document.querySelector(`.${dialogClass}`)
// 다이얼로그 닫기 버튼 요소 참조
const buttonDialog = dialog.querySelector(`.${dialogCloseButtonClass}`)
// 다이얼로그 딤 요소 참조
const dialogDim = document.querySelector(`.${dialogDimClass}`)

// 다이얼로그 표시 이벤트 리스너
const handleShowDialog = () => {
  // 다이얼로그 표시 클래스 속성 이름 추가
  dialog.classList.add(dialogShowClass)
  // 다이얼로그 딤 표시 클래스 속성 이름 추가
  dialogDim.classList.add(dialogdimShowClass)
  // [접근성] 다이얼로그 포커스 이동
  dialog.focus()
}

// 다이얼로그 감춤 이벤트 리스너
const handleHideDialog = () => {
  // 다이얼로그 감춤 클래스 속성 이름 제거
  dialog.classList.remove(dialogShowClass)
  // 다이얼로그 딤 감춤 클래스 속성 이름 제거
  dialogDim.classList.remove(dialogdimShowClass)
  // [접근성] '개인정보 처리 방침' 버튼에 포커스 이동
  buttonPrivacyPolicy.focus()
}

// [접근성] JavaScript를 사용해 다이얼로그에 포커스 이동이 가능하도록 tabindex 속성 설정
dialog.setAttribute('tabindex', -1)

// '개인정보 처리 방침' 버튼에 click 이벤트 연결 ← 이벤트 리스너
buttonPrivacyPolicy.addEventListener('click', handleShowDialog)

// 다이얼로그 버튼에 click 이벤트 연결 ← 이벤트 리스너
buttonDialog.addEventListener('click', handleHideDialog)
