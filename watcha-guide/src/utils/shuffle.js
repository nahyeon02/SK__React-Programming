/**
 * 배열의 아이템 순서를 뒤섞어 새로운 배열로 반환하는 유틸리티 함수
 * @param {Array} arrayData 배열 객체
 */
export const shuffle = (arrayData) =>
  arrayData.slice().sort(() => Math.random() - 0.5)

/* -------------------------------------------------------------------------- */

/**
 * 배열의 아이템 순서를 뒤섞어 새로운 배열로 반환하는 유틸리티 함수 (알고리즘: 우수)
 * @param {Array} arrayData 배열 객체
 */
export const $shuffle = (arrayData) => {
  const array = arrayData.slice()

  for (let i = 0, l = array.length; i < l; i++) {
    let x = Math.floor(Math.random() * (i + 1))
    ;[array[i], array[x]] = [array[x], array[i]]
  }

  return array
}
