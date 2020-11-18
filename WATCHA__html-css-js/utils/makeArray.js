/**
 * 유사 배열 → 새로운 배열을 반환하는 유틸리티 함수
 * @param {NodeList|HTMLCollection|arguments} arrayLikeObject 유사 배열 객체
 */
function makeArray(arrayLikeObject) {
  // 메서드 빌려쓰기 패턴
  // 참고: https://www.jspatterns.com/tag/borrowing-methods/
  return [].slice.call(arrayLikeObject);
}
