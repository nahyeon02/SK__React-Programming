/**
 * 배열의 아이템 순서를 뒤섞어 새로운 배열로 반환하는 유틸리티 함수
 * @param {Array} arrayData 배열 객체
 */
function shuffle(arrayData) {
  return arrayData.slice().sort(function () {
    return Math.random() - 0.5;
  });
}

/* -------------------------------------------------------------------------- */

/**
 * 배열의 아이템 순서를 뒤섞어 새로운 배열로 반환하는 유틸리티 함수 (알고리즘: 우수)
 * @param {Array} arrayData 배열 객체
 */
function $shuffle(arrayData) {
  var array = arrayData.slice();

  for (var i = 0, l = array.length; i < l; i++) {
    var randomIndex = Math.floor(Math.random() * (i + 1));
    var iValue = array[i];
    array[i] = array[randomIndex];
    array[randomIndex] = iValue;

    // ES6 구조 분해 할당(Destructuring) 활용
    // [A, B] = [B, A] 구조를 아래와 같이 사용
    // [array[i], array[randomIndex]] = [array[randomIndex], array[i]];
  }

  return array;
}
