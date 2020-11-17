# 2일차 학습내용

[Go! 리마인드(Remind) ←](https://github.com/yamoo9/SK__React-Programming/tree/D02)

<details>
  <summary>학습내용 복습</summary>
  <br/>

  - JSX 활용
    - 조건부 처리
    - 리스트 렌더링 & `key` 속성
  - 컴포넌트 간 상태 및 콜백 공유
    - `props` & `callback`
  - 컨텍스트 생성 및 공급/수급
    - `Provider` & `value`
    - `Consumer`
  - React 훅(Hooks)
    - `useState()`
    - `useEffect()`
    - `useCallback()`
    - `useContext()`
    - `useRef()`
  - React 디자인 패턴
    - 컴파운드 컴포넌트 설계
    - 컨텍스트 공유
    - 렌더 속성(함수)
  - React 상태 관리 패턴
    - 컨텍스트 API
    - `useReducer()`
    - `useContext()`
  - Styled Components 라이브러리
    - 스타일 컴포넌트 활용
  - 컴포넌트 유형 별 관리
    - 컴포넌트(부품): `components`
    - 컨테이너(조립): `containers`
    - 페이지: `pages`
</details>

<br/>

# 3일차 학습내용

3일차 학습할 내용은 아래와 같습니다. 🐧

<br/>

## React Basic

- 고차 컴포넌트(HOC)
  - [커링(Currying)](https://ko.javascript.info/currying-partials) 함수 ← 함수형 프로그래밍
  - React 컴포넌트 → 변환된 React 컴포넌트 반환
  - [withStore(Store)(App)](https://github.com/xaviervia/hoc-with-store)
- 커스텀 훅(Hooks)
  - [useFetch()](https://medium.com/swlh/usefetch-a-custom-react-hook-36d5f5819d8)
- 접근성(A11Y)
  - 국제 표준 [WCAG 2.1](https://yamoo9.gitbook.io/wcag/)
  - 국가 표준 [KWCAG 2.1](https://www.wah.or.kr:444/Participation/guide.asp)
  - 접근성 가이드 [항공사 ARIA 적용사례 E-Book](https://aoa.gitbook.io/skymimo/aoa-2018/undefined-1-1)
  - 테스트 엔진 [axe-core](https://github.com/dequelabs/axe-core)
    - 오류 메시지 한글화 [locales/ko.json](https://github.com/dequelabs/axe-core/blob/develop/locales/ko.json)
  - React 자동 검사 [@axe-core/react](https://www.youtube.com/watch?v=Quc5ykndY0g&list=PLtaz5vK7MbK2DcZZEd1oGLrZsIDlUc9gm&index=8&t=3s)
  - AOA11Y [React 앱 접근성 개선 재생목록](https://www.youtube.com/playlist?list=PLtaz5vK7MbK2DcZZEd1oGLrZsIDlUc9gm)

<br/>

## Redux

- [Redux](https://redux.js.org/introduction/getting-started) 라이브러리 설치
- Redux 상태 관리 패턴
  - Store
    - 스토어 생성 (create store)
    - 상태 읽기 (get state)
    - 알림 (dispatch action)
    - 구독 (subscribe)
    - 구독 취소 (unsubscribe)
  - Reducers
    - 디스패치 된 액션을 전달 받음
    - 액션 타입(상수)에 따라 상태 업데이트 (return new state)
  - Actions
    - 상태 업데이트를 요청하는 정보 객체 (`{ type, payload }`)
    - 액션을 생성하는 크리에이터 활용

<br/>

## React Redux

- [React Redux](https://react-redux.js.org/introduction/quick-start) 라이브러리 설치
- Redux를 React 앱에 통합
  - 스토어 공급
    - [Provider](https://react-redux.js.org/api/provider#example-usage)
  - 고차 컴포넌트(HOC) 활용 
    - [connect()](https://react-redux.js.org/api/connect)
  - 훅(Hooks) 활용
    - [useSelector()](https://react-redux.js.org/api/hooks#useselector)
    - [useDispatch()](https://react-redux.js.org/api/hooks#usedispatch)

<details>
  <summary>실습</summary>
  <br/>

  ## Redux + React Redux

  별도 라이브러리 설치 없이도 Context API + useReducer 훅을 사용해 React 앱 상태를 효율적으로 관리할 수 있음을 앞서 다뤘습니다.
  하지만 애플리케이션 규모가 커지고 관리 할 상태가 많아지면 관리가 어려워집니다. (예: 디버깅) 반면 Redux, React Redux 라이브러리를
  설치해 활용하면 상태 관리가 효율적이고, 필요한 경우 미들웨어(Middleware)를 추가해 기능을 확장할 수 있어 유용합니다.

  ### 실습

  [Todo App with React Redux (실습 시작)](https://codesandbox.io/s/todo-app-with-react-redux-silseub-sijag-t291p) 프로젝트 링크를 
  클릭한 후, 프로젝트를 Fork하여 실습을 진행합니다.

  ### 라이브러리 설치

  Fork한 프로젝트 실습 예제에 다음의 의존 모듈을 설치합니다.

  - [redux](https://www.npmjs.com/package/redux)
  - [react-redux](https://www.npmjs.com/package/react-redux)
  - [redux-devtools-extension](https://www.npmjs.com/package/redux-devtools-extension)
  - [redux-logger](https://www.npmjs.com/package/redux-logger)

  ### 스토어 구조

  스토어의 구조는 다음과 같은 패턴으로 작성합니다.

  ```sh
  /src/store/
  ├── index.js
  ├── actions/
  │   ├── index.js
  │   └── todos.js
  └── reducers/
      ├── index.js
      └── todos.js
  ```

  ### 스토어 프로바이더 컴포넌트

  Redux 라이브러리의 `createStore` 함수, React Redux 라이브러리의 `Provider` 컴포넌트, 
  Redux DevTools Extension 라이브러리의 `composeWithDevTools` 함수를 사용한 
  스토어 프로바이더 컴포넌트를 다음과 같이 작성합니다. ([스니펫](https://bit.ly/3kvbf0M))

  **src/store/index.js**

  ```js
  import React from 'react'
  import { createStore, applyMiddleware } from 'redux'
  import { Provider } from 'react-redux'
  import { composeWithDevTools } from 'redux-devtools-extension'
  import logger from 'redux-logger'

  // @reducer
  import rootReducer from './reducers'

  // @middleware
  const middleware = [logger]

  // @store
  export const store = createStore(
    rootReducer, 
    composeWithDevTools(applyMiddleware(...middleware))
  )

  // @component
  export const StoreProvider = ({children}) => (
    <Provider store={store}>{children}</Provider>
  )
  ```

  ### 액션

  액션 및 액션 크리에이터 함수는 `actions` 디렉토리에서 관리합니다.

  **src/store/actions/index.js**

  ```js
  export * from "./todos";
  ```

  **src/store/actions/todos.js**

  ```js
  // @constant
  export const ADD_TODO = "ADD_TODO";
  export const DONE_TODO = "DONE_TODO";
  export const RESET_TODO = "RESET_TODO";

  /* -------------------------------------------------- */
  // @actionCreator

  export const addTodo = (newTodo) => ({
    type: ADD_TODO,
    payload: newTodo
  });

  export const doneTodo = (doneTodoID) => ({
    type: DONE_TODO,
    payload: doneTodoID
  });

  export const resetTodo = () => ({
    type: RESET_TODO
  });
  ```

  ### 리듀서

  리듀서 함수 및 루트 리듀서는 `reducers` 디렉토리에서 관리합니다.

  **src/store/reducers/index.js**

  ```js
  import { combineReducers } from "redux";
  import todosReducer from "./todos";

  export default combineReducers({
    todos: todosReducer
  });
  ```

  **src/store/reducers/todos.js**

  ```js
  import { ADD_TODO, DONE_TODO, RESET_TODO } from "../actions";

  // @initState
  const initState = [
    {
      id: "ck9483y6a000z3h63ex5f5qnl",
      doit: "React만으로 상태 관리"
    },
    {
      id: "ck9484xbm00063h68cpnevol6",
      doit: "React Redux 학습"
    }
  ];

  // @reducer
  export default function todosReducer(state = initState, action) {
    const { type, payload } = action;

    console.log(payload);

    switch (type) {
      case ADD_TODO:
        return [...state, payload];
      case DONE_TODO:
        return state.filter((item) => item.id !== payload);
      case RESET_TODO:
        return initState;
      default:
        return state;
    }
  }
  ```

  ---

  ### 스토어 프로바이더 래퍼 컴포넌트 설정

  ```js
  // 스토어 프로바이더 래퍼 컴포넌트 호출
  import { StoreProvider } from './store'

  // 웹 브라우저 렌더링
  render(
    // 스토어 프로바이더 래퍼 컴포넌트로 App 래핑
    <StoreProvider>
      <App />
    </StoreProvider>,
    rootElement
  );
  ```

  ### TodoInput 컴포넌트

  할 일을 추가하는 입력 컴포넌트에 `connect()` 고차 함수를 사용해 
  액션 크리에이터 함수를 컴포넌트의 `props`로 전달 받도록 설정합니다.

  ```js
  // 고유 ID 생성 함수 호출
  import cuid from "cuid";

  // connect 고차 함수 호출
  import { connect } from "react-redux";
  ```

  ```js
  // dispatch에 바인딩 된 액션 크리에이터 함수를 props로 전달
  import { addTodo } from "../store/actions";

  const mapDispatchToProps = {
    addTodo
  };

  // InputTodo 컴포넌트
  const InputTodo = ({ addTodo }) => {
    // ...
  };

  export default connect(null, mapDispatchToProps)(InputTodo);
  ```

  `todo`, `error` 상태를 업데이트 하는 `set*` 함수를 추출합니다.

  ```js
  // 인풋 컨트롤 상태 관리
  const [todo, setTodo] = useState(initDoit);

  // 오류 상태 관리
  const [error, setError] = useState(false);
  ```

  입력 시, 컴포넌트의 상태를 `todo` 업데이트 하도록 코드를 작성합니다.

  ```js
  (
    <input
      type="text"
      id="todoInput"
      placeholder="오늘 할 일을 작성하세요."
      value={todo.doit}
      // 사용자 입력 시, 
      onChange={(e) => {
        // todo 상태 업데이트
        setTodo({
          doit: e.target.value
        });
      }}
    />
  )
  ```

  입력 버튼 클릭 시, 입력 내용 검사 후 오류가 없을 경우 Redux의 상태를 업데이트 하도록 코드를 작성합니다.

  ```js
  (
    <Button
      primary
      id="submit_button"
      style={{ position: "relative", top: -2 }}
      onClick={() => {
        // 사용자가 입력한 값이 빈 공백인 경우
        if (todo.doit.trim().length === 0) {
          // 컴포넌트 오류 상태 업데이트
          setError(true);
          // 3초 뒤에 
          window.setTimeout(() => {
            // 컴포넌트 상태 초기화
            setError(false);
            setTodo(initDoit);
          }, 3000);
          // 함수 종료
          return;
        }

        // 앱 상태 업데이트 알림
        addTodo({
          id: cuid(),
          doit: todo.doit
        });

        // 컴포넌트 상태 초기화
        setTodo(initDoit);
      }}
    >
      추가
    </Button>
  )
  ```

  ### TodoList 컴포넌트

  ```js
  import { connect } from "react-redux";
  import { doneTodo } from "../store/actions";

  const mapStateToProps = (state) => ({
    todos: state.todos
  });

  const mapDispatchToProps = {
    doneTodo
  };

  // TodoList 컴포넌트
  const TodoList = ({ todos, doneTodo, resetTodo }) => {
    // ...
  };

  export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
  ```

  체크박스를 클릭할 경우, "할 일을 완료"하는 상태 업데이트를 처리하는 코드를 작성합니다.

  ```js
  (
    <Menu.Item as="li" key={item.id}>
      <Checkbox
        toggle
        label={item.doit}
        onClick={() => doneTodo(item.id)}
      />
    </Menu.Item>
  )
  ```

  ### 실습 완성

  [Todo App with React Redux (실습 완성)](https://codesandbox.io/s/todo-app-with-react-redux-silseub-wanseong-nq01c) 프로젝트 완성 파일을 열어
  완성된 코드를 참고하세요.

  <br/>

  ## React Redux Hooks

  React 훅(Hooks) 과 마찬가지로 React Redux 또한 훅을 제공합니다. 이 훅은 함수형 컴포넌트에서만 사용 가능합니다.

  - 상태 훅 : `useSelector()`
  - 디스패치 훅 : `useDispatch()`

  ### 실습

  [Todo App with React Redux Hooks (실습 시작)](https://codesandbox.io/s/todo-app-with-react-redux-hooks-silseub-sijag-74mgh) 프로젝트 링크를 클릭한 후, 프로젝트를 Fork하여 실습을 진행합니다.

  ### useSelector 훅

  공식 문서 [사용법](https://react-redux.js.org/next/api/hooks#useselector)을 참고하세요.

  ```js
  import { useSelector } from 'react-redux'

  // ...

  const state = useSelector(state => state.state)
  ```

  ### useDispatch 훅

  공식 문서 [사용법](https://react-redux.js.org/next/api/hooks#usedispatch)을 참고하세요.

  ```js
  import { useDispatch } from 'react-redux'

  const dispatch = useDispatch()
  ```

  ### 실습 완성

  [Todo App with React Redux Hooks (실습 완성)](https://codesandbox.io/s/todo-app-with-react-redux-hooks-silseub-wanseong-n150t) 프로젝트 완성 파일을 열어
  완성된 코드를 참고하세요.
</details>

<br/>

## React Router

- [React Router](https://reactrouter.com/web/guides/quick-start) 라이브러리 설치
- SPA(싱글 페이지 앱) 라우터 설정 (컴포넌트 활용)
  - BrowserRouter
  - HashRouter
  - Switch
  - Route
  - Redirect
  - Link
  - NavLink
- 고차 컴포넌트(HOC) 활용 [withRouter()](https://reactrouter.com/web/api/withRouter)
- 훅(Hooks) 활용 
  - [useHistory()](https://reactrouter.com/web/api/Hooks/usehistory)
  - [useLocation()](https://reactrouter.com/web/api/Hooks/uselocation)
  - [useParams()](https://reactrouter.com/web/api/Hooks/useparams)
  - [useRouteMatch()](https://reactrouter.com/web/api/Hooks/useroutematch)

### 실습

- [기본 라우팅](https://stackblitz.com/edit/react-hbczhm?file=index.js)
- [중첩 라우팅](https://stackblitz.com/edit/react-7jm1zk?file=views%2FLab%2Findex.js)

<br/>

## React Helmet

- [React Helmet](https://github.com/nfl/react-helmet#example) 라이브러리 설치
- 페이지 별 제목, 설명, 메타 태그 등을 변경
- 접근성(Accessibility), 검색엔진 최적화(SEO)

<br/>

## 빌드

- 빌드 명령: `npm run build` → **build 디렉토리 생성**
- **build/static 디렉토리** 안에 CSS, JS 파일 생성 (캐싱을 위한 고유 해시 파일 이름에 포함)
- 빌드 & 프로파일링 `npm run build -- --profile`
- 성능 최적화를 위해 [재조정](https://ko.reactjs.org/docs/reconciliation.html)을 [피하세요](https://ko.reactjs.org/docs/optimizing-performance.html#avoid-reconciliation) 참고

<br/>

## 배포

빌드된 결과물을 배포하여 웹 호스팅 합니다.

### Single Page App

CRA의 기본 빌드 명령 실행 결과는 싱글 페이지 앱(SPA)입니다.

#### 정적 서버 테스트

배포에 앞서 정상적으로 사이트가 작동하는지 [serve](https://www.npmjs.com/package/serve)를 사용해 테스트 할 수 있습니다.

```sh
# 도움말: serve -h
$ npx serve -s build -l 4000
```

#### GitHub Pages 배포

Create React App은 `homepage` 필드를 사용하여 빌드된 HTML 파일의 루트 URL을 설정합니다.

*package.json*

```json
{
  "homepage" : "https://<사용자_계정>.github.io/<저장소_이름>",
}
```

[gh-pages](https://www.npmjs.com/package/gh-pages) 패키지를 설치합니다.

```sh
$ npm i gh-pages
```

`predeploy`, `deploy` 명령을 추가합니다.

*package.json*

```json
{
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build"
  }
}
```

`deploy` 명령을 실행합니다.

```sh
$ npm run deploy
```

> 참고: [CRA → Deployment: GitHub Pags](https://create-react-app.dev/docs/deployment#github-pages)


### 프리 렌더링

프리 렌더링(정적 HTML 파일 생성)은 SPA와 달리 JavaScript 번들 다운로드에 실패해도
HTML 파일이 정상적으로 웹 브라우저에 화면에 표시되고, 검색 엔진이 콘텐츠를 수집할 수 있어
검색엔진 최적화(SEO)가 요구되는 경우 유용한 렌더링 방법입니다.

프리 렌더링 방법을 사용하려면 [📸 React Snapshot](https://www.npmjs.com/package/react-snapshot) 패키지를 프로젝트에 설치합니다.

```sh
$ npm i -D react-snapshot
```

*package.json*

`build` 명령을 다음과 같이 변경합니다. (빌드 후, 스냅샷 생성)

```json
{
  "build": "react-scripts build && react-snapshot"
}
```

**src/index.js**

ReactDOM 대신, react-snapshot의 `render` 함수를 사용해 렌더링 설정합니다.

```js
// import { render } from 'react-dom';
import { render } from 'react-snapshot';

render(
  <App/>,
  document.getElementById('root')
);
```

빌드 명령을 수행하면 프리 렌더링 된 결과물을 확인할 수 있습니다.

```sh
$ npm run build
```

#### 옵션 설정

필요한 경우 사용자는 `package.json` 파일에 "reactSnapshot" 섹션을 추가해 옵션을 설정할 수 있습니다.

- `include` : 크롤링 엔트리 경로 설정
- `exclude` : 크롤링 제외 경로 설정 (<abbr title="와일드카드 문자를 사용해서 일정한 패턴을 가진 파일 이름들을 지정하기 위한 패턴">glob 패턴</abbr> 설정 가능)
- `snapshotDelay` : 스냅샷 지연 기본 설정 값은 `50`

*package.json*

```json
{
  "reactSnapshot": {
    "include": [
      "/포함할-경로",
      "/다른-경로/중첩된-경로"
    ],
    "exclude": [
      "/제외할-경로",
      "/다른-경로/exclude-me/**"
    ],
    "snapshotDelay": 300
  }
}
```