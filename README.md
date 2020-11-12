# 이디야 커피 UI 디자인 & 개발

**[이듬(E.UID)](https://euid.dev) 블렌디드 러닝, 학습용(디자인 → 개발)** 으로 제작된 [이디야 커피 브랜드 사이트](https://seulbinim.github.io/EDIYA/)입니다.

![](./_/cover.jpg)

![](./_/rwd-ui-ediya.jpg)

<br/>

## UI 개발 (React Framework)

**Developer** — 제작된 UI 디자인을 토대로 모바일/데스크탑 UI를 React 프레임워크를 사용해 개발합니다.

### React

[React](https://reactjs.org) 라이브러리를 사용해 프로젝트를 진행합니다.

- 모듈 프로그래밍
- 컴포넌트 시스템 (함수 or 클래스)
- React 요소(JSX) 활용 (조건/리스트 렌더링, 이벤트 핸들링)
- PropTypes 전달 속성 검사
- `props`를 통한 컴포넌트 통신
- Context API를 사용한 컴포넌트 통신
- 앱 접근성(A11Y) 테스트

### Create React App

[CRA](https://create-react-app.dev/) 도구를 사용해 프로젝트를 부트스트랩합니다.

- 신규 프로젝트 스캐폴딩(Scalfolding)
- CRA 커스텀 템플릿 활용
- ECMAScript 2015(v6)-2018(v9)
- 브라우저 호환성 설정
  - react-app-polyfill (IE 대응)
  - browserslist
- 에디터 + 디버깅 도구 설정
- CSS Normalize 설정
- CSS Grid 설정
- Sass 경로(path) 설정
- SVG 컴포넌트
- 퍼블릭 에셋 활용
- 글로벌 변수 처리
- 코드 분리 관리 (Dynamic `import()`)
- 환경 변수(`.env`)
- PWA 설정
- 프리 렌더링 설정

### React A11Y

[axe-core](https://github.com/dequelabs/axe-core) 접근성(A11Y) 테스트 라이브러리로 React 애플리케이션을 개발 과정에서 실시간 검수합니다. 결과는 Chrome 개발도구(DevTools) Console 패널에 표시됩니다. 이 패키지의 이전 버전 [react-axe](https://github.com/dequelabs/react-axe)는 더 이상 사용되지 않으며, [axe-core-npm](https://github.com/dequelabs/axe-core-npm/tree/develop/packages/react)으로 이동되어 관리됩니다.

패키지 [@axe-core/react](https://www.npmjs.com/package/@axe-core/react)를 React 프로젝트에 설치하여 사용할 수 있습니다.

```sh
$ npm i -D @axe-core/react
```

```js
import React from 'react';
import ReactDOM from 'react-dom';

// 개발 환경에서만 axe 접근성 테스트 실행
if (process.env.NODE_ENV !== 'production') {
  const axe = require('@axe-core/react');
  const TIMEOUT = 1000;
  // 모듈이 초기화 되면 컴포넌트가 업데이트 될 때 마다
  // Chrome 개발도구 Console 패널에 접근성 테스트 결과를 출력
  axe(React, ReactDOM, TIMEOUT);
}
```

#### Axe 구성(Configure)

Axe 접근성 테스트 결과로 표시할 언어를 [한글(ko)](https://github.com/dequelabs/axe-core/blob/master/locales/ko.json)로 설정하거나
브랜딩, 리포터 설정 또는 규칙을 조정할 수 있습니다.

> 보다 자세한 구성 설정은 [매개변수](https://github.com/dequelabs/axe-core/blob/master/doc/API.md#parameters-1) 문서를 참고하세요.

```js
const AXE_CONFIG = {
  // 브랜딩 설정 (선택사항)
  branding: {
    brand: '이듬(E.UID)',
    application: '블렌디드 러닝',
  },
  // 리포터 설정 (v2 = 최신, 선택사항)
  repoter: 'v2',
  // Axe의 로컬라이제이션 (선택사항)
  // 로컬라이제이션 설정은 아래 참고 링크 확인
  locale: { lang: 'ko' },
  // Axe 검사 규칙 설정 (사용자 정의, 선택사항)
  // 사용 가능한 규칙은 아래 참고 링크 확인
  rules: [
    {
      id: 'skip-link', // [필수 입력사항] 규칙 고유 식별자
      enabled: false,  // [선택 입력사항] 검사 활성화 설정 유무 (기본 값: true)
    },
  ],
};

// 접근성 테스트 콘텍스트 설정
// 이 설정을 별도로 하지 않을 경우, 모든 페이지 테스트
// 콘텍스트 설정, CSS 선택자 사용 방법은 아래 참고 링크 확인
const AXE_CONTEXT = {
  // 테스트 포함
  include: [['포함 할 CSS 선택자', '.include-axe-test']],
  // 테스트 제외
  exclude: [['제외 할 CSS 선택자', '.exclude-axe-test']],
};

axe(React, ReactDOM, TIMEOUT, AXE_CONFIG, /* AXE_CONTEXT */);
```

#### 참고 링크

- [로컬라이제이션](https://github.com/dequelabs/axe-core/tree/master#localization)
- [접근성 규칙(번역)](https://github.com/yamoo9/axe-core/blob/develop/doc/rule-descriptions.md)
- [접근성 규칙(최신, 영어)](https://github.com/dequelabs/axe-core/blob/master/doc/rule-descriptions.md)
- [콘텍스트](https://github.com/dequelabs/axe-core/blob/master/doc/API.md#context-parameter)
- [사용 가능한 CSS 선택자](https://github.com/dequelabs/axe-core/blob/master/doc/developer-guide.md#supported-css-selectors)

### Preparing

> React 프레임워크 개발에 앞서 다음 프로세스가 수행되었습니다. 각 파트는 이듬 블렌디드 러닝의 [UI Structure & Design](https://euid.dev/#/courses/ui-structure-design),
> [UI Interaction Junior](https://euid.dev/#/courses/ui-interaction-junior), [UI Interaction Senior](https://euid.dev/#/courses/ui-interaction-senior)에서 주제마다 학습이 진행되었습니다.
>
> 1. [UI 디자인](#ui-design)
> 1. [UI 개발 (HTML + CSS + ECMAScript(JS))](#ui-개발-html-css-ecmascript-js)

<br/>

## UI 디자인

**Designer** — UI 개발 학습에 필요한 구성 요소 중심으로 모바일/데스크탑 UI를 디자인합니다.

- UI 디자인에 최적화 된 Figma 도구 활용
- 디자인 시스템 (컴포넌트, 상태 디자인 등)
- 프로토타입 (개발에 요구되는 사항을 시뮬레이션)
- 버전 관리 (Version History)
- 모바일 UI ( `0` — `767px` )
- 데스크탑 UI ( `768px+` )

> Mobile UI

![](./_/design-using-figma-1.jpg)

> Desktop UI

![](./_/design-using-figma-2.jpg)

> Design System

![](./_/design-using-figma-3.jpg)

> Version History

![](./_/design-using-figma-4.jpg)

<br/>

## UI 개발 (HTML + CSS + ECMAScript(JS))

**Developer** — 제작된 UI 디자인을 토대로 모바일/데스크탑 UI를 개발합니다.

- 코딩에 적합한 Visual Studio Code 도구 활용
- 모두를 위한 디지인 (Universal Design, <abbr title="Accessibility (접근성)">A11Y</abbr>)
- 의미있는 구조 설계 (HTML5 + WAI-ARIA)
- 반응형 웹 스타일링 (CSS3, <abbr title="Responsive Web Design">RWD</abbr>)
- 인터랙션 프로그래밍 (OOJS + DOM Script)
- 소스 버전 관리 (Git)
- 팀 컬래버레이션 (GitHub)

> Semantic Markup (HTML5 + WAI-ARIA)

![](./_/develop-using-vscode-1.jpg)

> Responsive Styling (CSS3 + RWD)

![](./_/develop-using-vscode-2.jpg)

> Interaction Design (Reusable Components)

![](./_/develop-using-vscode-3.jpg)

> Version Control System (Git + GitHub)

![](./_/develop-using-vscode-4.jpg)
