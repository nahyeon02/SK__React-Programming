import { CLASSES, SCROLL_TIMEOUT } from '../constants.js'
import { makeArray } from '../utils/index.js'
import { activeAppNavButton } from './settingAppNavigation.js'

const { featureSection } = CLASSES

export const featureSections = document.querySelectorAll(`.${featureSection}`)

// [3] 이벤트 리스너 작성
// 클로저 함수를 반환하는 래퍼 함수
export const handleGoToSectionWrapper = (index) => {
  // 이벤트 리스너로 반환 될 클로저 함수
  return function () {
    // 목표 인덱스 초기 설정
    let targetIndex = 0
    const {
      normal: buttonClassNormal,
      first: buttonClassFirst,
    } = CLASSES.appNavigationButton

    // appNavigation 버튼인 경우
    if (this.className.includes(buttonClassNormal)) {
      // 래퍼 함수를 통해 기억된 index를 목표 인덱스로 설정
      targetIndex = index
      goToSection(targetIndex, true)
    }
    // goToSection 버튼인 경우
    else {
      // 첫번째 섹션으로 이동하는 버튼인지 확인
      const isGoToFirst = this.classList.contains(buttonClassFirst)
      // 조건 처리에 따라 목표 인덱스 설정
      targetIndex = !isGoToFirst ? index + 1 : 0
      // 조건 처리에 따라 섹션 이동 함수 실행 (옵션 설정)
      !isGoToFirst ? goToSection(targetIndex) : goToSection(targetIndex, true)
    }
  }
}

// [4] 섹션 이동 함수 설정
export const goToSection = (index, usingAppNavigation) => {
  // 목표 섹션 참조
  const targetSection = featureSections[index]

  // 목표 섹션으로 스크롤 이동
  targetSection.scrollIntoView({ behavior: 'smooth' })

  // 설정한 index에 해당하는 앱 내비게이션 버튼 (인디케이터) 활성화
  activeAppNavButton(index)

  // 앱 내비게이션 버튼(인디케이터)을 클릭한 경우
  if (usingAppNavigation) {
    // 타이머 설정
    // 이미 설정된 타임아웃 ID가 있을 경우
    if (goToSection.timeoutId) {
      // 설정된 타임아웃 클리어(해제)
      clearTimeout(goToSection.timeoutId)
    }
    // [접근성] 스크롤 타임아웃이 지나면,
    // 타임아웃 설정 ID 값을 메모리(기억) → 필요할 때 설정 해제 목적
    goToSection.timeoutId = setTimeout(() => {
      // 목표 섹션에 포커스 설정
      targetSection.focus()
    }, SCROLL_TIMEOUT)
  }
}

// 함수는 객체이므로 속성 설정이 가능
// 일종의 네임스페이스 객체로 활용하여 타임아웃 ID를 저장하기 위한 속성으로 활용
goToSection.timeoutId = null

// [접근성] 키보드 포커싱 설정
// 모든 섹션에 JavaScript를 사용한 키보드 접근이 가능하도록 tabindex 속성 설정
// 일반적인 사용자의 키보드 Tab 포커스로는 접근이 가능하지 않음
featureSections.forEach((section) => section.setAttribute('tabindex', -1))

// 이벤트 연결
// 섹션 NodeList 집합을 배열로 변경한 후, forEach()를 사용해 순환 처리
makeArray(featureSections).forEach((section, index) => {
  // 개별 섹션에서 다른 섹션으로 이동하는 기능을 설정할 버튼 요소 참조
  const { goToSection } = CLASSES.appNavigationButton
  const buttonGoToSection = section.querySelector(`.${goToSection}`)
  // 버튼 요소에 click 이벤트 연결 ← 이벤트 리스너(클로저 함수)를 반환하는 래퍼 함수에 index 전달
  buttonGoToSection.addEventListener('click', handleGoToSectionWrapper(index))
})
