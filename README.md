# 1일차 학습내용

1일차 학습 내용을 간단하게 정리해봅니다.

## ECMAScript 2015(ES6) 

- 객체 구조분해 할당
- 화살표 함수
- 전개 연산자
- 나머지 매개변수

## CRA(Create React App) 소개 및 문서 정리

기본 템플릿을 사용한 설치

```sh
$ npx create-react-app <프로젝트_이름>
```

커스텀 템플릿 활용 예시

```sh
$ npx create-react-app <프로젝트_이름> --template cra-template-ko
```

## React 소개 및 컴포넌트 시스템

### 함수 컴포넌트

`props` : 상위 컴포넌트에서 전달 받은 속성(객체)
### 클래스 컴포넌트

- 상태
- 라이프 사이클 훅

## 왓챠(WATCHA) 홈페이지

컴포넌트 트리 구조 설계 및 헤더 영역 구성 실습

```sh
index.js
  ├── App.js
  └── components/
      ├── Header.js
      └── Link.js
```

## 실습 자료

- [함수 컴포넌트 vs 클래스 컴포넌트](./D1-func-vs-class-component)
- [왓챠(WATCHA) 헤더 컴포넌트](./D1-watcha-header-and-link-component)