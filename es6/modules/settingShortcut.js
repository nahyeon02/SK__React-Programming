import { featureSections, goToSection } from './settingFeatureSection.js'

window.addEventListener('keyup', (e) => {
  // 키 입력 값을 숫자로 변경
  const key = Number(e.key)

  // ctrl 키 + 숫자 키패드인 경우
  if (e.ctrlKey && typeof key === 'number') {
    const keyIndex = key - 1
    // 키 입력(숫자) - 1 값이 섹션의 총 개수보다 작은 경우
    if (keyIndex < featureSections.length) {
      // 단축키를 누른 해당 섹션으로 이동
      goToSection(keyIndex)
    }
  }
})
