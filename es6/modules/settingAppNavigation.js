import { CLASSES } from '../constants.js'
import { makeArray } from '../utils/index.js'
import { handleGoToSectionWrapper } from './settingFeatureSection.js'

const {
  normal: appNavButton,
  active: appNavButtonActive,
} = CLASSES.appNavigationButton

// 앱 내비게이션 버튼(인디케이터)을 모두 수집하여 참조
const appNavButtons = document.querySelectorAll(`.${appNavButton}`)

// 앱 내비게이션 버튼(인디케이터) 활성화 설정 함수
export const activeAppNavButton = (index) => {
  // 활성 클래스 이름 추출
  const activeClassName = appNavButtonActive
  // 활성 처리 할 내비게이션 버튼 추출 및 참조
  const activeNavButton = appNavButtons[index]

  // 이전에 활성화 된 버튼 요소 참조
  const preActiveButton =
    // 앱 내비게이션 버튼 NodeList를 배열로 변경한 후,
    makeArray(appNavButtons)
      // 활성 클래스 이름을 가진 버튼을 찾아 추출
      .find((button) => button.classList.contains(activeClassName))

  // 이전에 활성화 된 버튼 요소와 현재 활성화 된 버튼 요소가 같지 않은 경우
  if (!activeNavButton.isEqualNode(preActiveButton)) {
    // 이전 활성화 버튼 요소의 활성 클래스 이름 제거
    preActiveButton.classList.remove(activeClassName)
  }

  // 활성화 처리해야 할 버튼에 활성 클래스 이름 추가
  activeNavButton.classList.add(activeClassName)
}

// 이벤트 연결
// 앱 내비게이션 버튼(인디케이터) 배열화
window.setTimeout(() => {
  makeArray(appNavButtons)
    // 배열 데이터 순환
    // 버튼 요소에 click 이벤트 연결 ← 이벤트 리스너(클로저 함수)를 반환하는 래퍼 함수에 index 전달
    .forEach((button, index) =>
      button.addEventListener('click', handleGoToSectionWrapper(index))
    )
})
