import { CLASSES } from '../constants.js'
import { makeArray } from '../utils/index.js'
import { featureSections, goToSection } from './settingFeatureSection.js'
import { activeAppNavButton } from './settingAppNavigation.js'

// 스크롤 상태 설정
// [1] 이전 스크롤 Y축 높이
let prevScrollYposition = 0
// [2] 활성 인덱스
let activeIndex = 0
// [3] 타임아웃 ID
let clearTimeoutId = null

// 스크롤 Y축 높이와 섹션 영역의 높이를 비교하여 활성 상태 유무를 반환하는 함수
const isInActiveSectionArea = (section) => {
  // 섹션의 박스 모델 정보 추출
  const rect = section.getBoundingClientRect()
  // 섹션의 top 위치
  const top = rect.top
  // 섹션의 절반 높이 (높이 ÷ 2)
  const halfHeight = rect.height / 2
  // top 값이 음수 절반 높이 보다 크고
  // top 값이 양수 절반 높이 보다 작거나 같으면 true
  return top > -halfHeight && top <= halfHeight
}

// 활성화 된 섹션의 인덱스를 반환하는 함수
const findIndexOfActiveSectionArea = () => {
  const findedIndex =
    // 섹션 집합을 배열화
    makeArray(featureSections)
      // 활성화 된 섹션의 인덱스를 찾아 반환
      .findIndex((section) => isInActiveSectionArea(section))

  // 찾은 인덱스 반환
  return findedIndex
}

// 앱 헤더를 화면에 표시하는 함수
const showAppHeader = () => (appHeader.style.transform = 'translate(-50%, 0)')

// 앱 헤더를 화면에서 감추는 함수
const hideAppHeader = () =>
  (appHeader.style.transform = 'translate(-50%, -100%)')

// 앱 헤더 요소 찾아 참조
const appHeader = document.querySelector(`.${CLASSES.appHeader}`)

// scroll 이벤트 연결
window.addEventListener('scroll', () => {
  // 브라우저 창의 스크롤 Y축 높이 값을 현재 스크롤 위치로 설정
  const { scrollY: currentScrollYposition } = window

  // 조건 처리
  if (
    /* 이전 스크롤 Y축 높이 값이 현재 스크롤 Y축 높이 값보다 크거나 */
    prevScrollYposition > currentScrollYposition ||
    /* 이전 스크롤 Y축 높이 값이 0인 경우 */
    prevScrollYposition === 0
  ) {
    // 앱 헤더 표시
    showAppHeader()
  }

  // 이전 스크롤 Y축 높이 값이 현재 스크롤 Y축 높이 값보다 작은 경우
  if (prevScrollYposition <= currentScrollYposition) {
    // 앱 헤더 감춤
    hideAppHeader()
  }

  // 현재 활성화 된 섹션의 인덱스를 찾아 activeIndex로 설정
  activeIndex = findIndexOfActiveSectionArea()
  // 앱 내비게이션 버튼(인디케이터) 활성화 처리 - activeIndex 전달
  activeAppNavButton(activeIndex)

  // 타임 컨트롤
  // 설정된 타임아웃 ID가 있을 경우
  if (clearTimeoutId) {
    // 타임아웃 ID를 전달해 설정된 타임아웃 해제
    clearTimeout(clearTimeoutId)
  }

  // 1초 뒤에 섹션으로 이동되도록 goToSection() 함수 실행 - activeIndex 전달
  clearTimeoutId = setTimeout(() => goToSection(activeIndex), 1000)

  // 현재 스크롤 Y 높이 값 → 이전 스크롤 Y 높이 값 업데이트
  prevScrollYposition = currentScrollYposition
})
