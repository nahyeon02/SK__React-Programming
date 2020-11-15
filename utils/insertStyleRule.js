/**
 * 동적으로 스타일을 삽입하는 유틸리티 함수
 * 클로저 함수 _insertStyleRules() 참조
 */
var insertStyleRules =
  /* [2] IIFE 패턴: 전달 받은 <style> 요소 객체를 매개변수 style에 할당 */
  (function (style) {
    'use strict';

    // [3] <head> 요소의 마지막 자식 노드로 style 참조 삽입 → sheet 속성(객체) 참조
    var sheet = document.head.appendChild(style).sheet;

    // [4] 클로저(Closure) 함수
    /**
     * 동적으로 스타일을 삽입하는 유틸리티 함수(외부에서 사용 될 클로저 함수)
     * @param {String} selector CSS 선택자 (예: `.demo::after`)
     * @param {String} rules    CSS 스타일 선언 규칙 (예: `{ "background-color": "#323132" }`)
     */
    var _insertStyleRules = function (selector, rules) {
      // [5] CSS 스타일 규칙 코드 문자 만들기
      var styleRules =
        // (CSS) rules 객체의 속성(keys)을 새로운 배열 반환
        Object.keys(rules)
          // 반환 받은 배열을 순환해 새로운 배열 반환
          .map(function (key) {
            // 각 스타일 규칙의 값을 value에 할당
            var value = rules[key];
            // "속성:값" 문자 값 반환 (map을 통해 반환될 배열의 아이템으로 설정 됨)
            return key + ':' + value;
          })
          // 생성된 배열을 문자로 변환 (CSS의 스타일 선언 구문 뒤에 세미콜론 추가)
          .join(';');

      // [6] sheet 참조를 통해 생성된 스타일 규칙 코드 문자 삽입
      sheet.insertRule(
        // 선택자 { 스타일 규칙(선언문; 선언문; ...) }
        selector + '{' + styleRules + '}',
        // 스타일을 삽입 할 인덱스(위치)
        sheet.cssRules.length
      );
    };

    // [7] 클로저 함수 반환
    return _insertStyleRules;

    // [1] IIFE 패턴: 즉시 실행하는 함수 식에 <style> 요소 객체를 생성해 전달
  })(document.createElement('style'));
