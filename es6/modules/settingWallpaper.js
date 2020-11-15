import { shuffle } from '../utils/index.js'
import { DISPLAY_WALLPAPER_COUNT, CLASSES, SHOW_TIMEOUT } from '../constants.js'
import { wallpapers, wallpapersUrl } from '../constants.js'

const { setTimeout } = window
const getWallPaperList = () => wallpapers.map((path) => `${wallpapersUrl}${path}`)

shuffle(getWallPaperList())
  // [1] 월페이퍼 뒤섞어 화면에 표시 할 개수만큼 골라내기
  .filter((wallpaper, index) => index < DISPLAY_WALLPAPER_COUNT)
  // [2] 필터링 된 배열을 순환
  .forEach((imagePath, index) => {
    // [3] 월페이퍼를 그릴 섹션의 가상 클래스 선택자 설정
    const { featureSection } = CLASSES
    const selector = `.${featureSection}:nth-of-type(${index + 1})::before`

    // [4] 설정된 가상 클래스 선택자에 배경 이미지 스타일 규칙 삽입
    insertStyleRules(selector, {
      'background-image': `url(${imagePath}.jpg)`,
    })

    // [5] 화면에 표시 할 타임아웃 설정에 따라
    // 불투명도 1 설정 추가 삽입
    setTimeout(() => insertStyleRules(selector, { opacity: 1 }), SHOW_TIMEOUT)
  })
