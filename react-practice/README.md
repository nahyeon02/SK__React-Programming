## 1. React Hooks 치트시트(Cheatsheet)

React 훅을 프로젝트에 활용할 때 알아야 할 것을 정리해봅니다.

### 기본 제공되는 훅

함수 컴포넌트에서 다음의 기능을 사용할 수 있습니다. (React v16.8 이상)

- 상태(state)
- 사이드 이펙트(Side Effect)
- 콜백(Callback)
- 메모이제이션(Memoization)
- 레퍼런스(Reference)
- 콘텍스트(Context)
- 리듀서(Reducer)

### 커스텀 훅 (Custom Hook)

재사용 목적으로 생성하는 유틸리티 함수처럼 필요할 경우, 커스텀 훅 함수를 만들어 사용할 수 있습니다.

**src/hooks/useFetchData.js**

```js
import React, { useState, useEffect } from 'react'

const useFetchData = (endpoint, method='json') => {
  const [value, setValue] = useState([])
  
  useEffect(() => {
    const fetchedData = async (endpoint, method) => await (await fetch(endpoint))[method]()
    setValue(fetchedData)
  }, [])

  return value;
}

export default useFetchData
```

**src/components/\*\*/FunctionalComponent.js**

```js
import React from 'react'
import useFetchData from 'hooks/useFetchData'

export default function FunctionalComponent() {
  // 커스텀 데이터 패치 훅 활용
  const users = useFetchData('https://jsonplaceholder.typicode.com/users')

  return (
    <ul>
      {
        users.map(user => <li key={user.id}>{user.name}</li>)
      }
    </ul>
  )
}
```

<br/>

## 2. 스타일 모듈 / 관리 TIP

React 앱 개발에서 Front-End 개발자가 사용 가능한 스타일 방법은 다음과 같습니다.

1. CSS 활용
1. CSS 모듈 활용
1. Sass 활용
1. CSS in JS 활용 (Styled Components, Emotion 라이브러리 등 활용)

위의 4가지 방법 중, 어떤 방법을 개발에 사용할 것인지 정한 후 일괄 적용하는 것이 좋습니다.
그렇지 않으면 팀원 마다 각기 다른 방법으로 컴포넌트 스타일을 관리해 향후 유지보수가 어려울 수 있습니다.
각 방법의 장,담점을 정리하면 다음과 같습니다.

### CSS 활용

- **장점** : 기존 CSS 사용 경험과 동일하므로 새로운 학습이 필요없고 바로 사용 가능합니다.
- **단점** : 모듈 프로그래밍을 사용할 수 없고, JSX에 일일이 클래스 속성 이름을 붙여 사용해야 하므로 스타일 관리가 비효율적입니다.

### CSS 모듈 활용

- **장점** : CSS + 모듈 프로그래밍을 사용하면 JSX에 설정할 클래스 속성 이름을 효과적으로 스타일을 관리 할 수 있습니다.
- **단점** : 모듈 프로그래밍에 대한 이해가 요구되고, 기존 CSS 경험과 달라 별도 학습 및 훈련이 필요합니다.

### Sass 활용

- **장점** : CSS를 확장한 강력한 기능(변수, 믹스인, 함수 등)과 모듈 프로그래밍을 사용해 보다 효과적인 스타일 관리가 가능합니다.
- **단점** : Sass 사용법에 대한 학습이 요구됩니다. CSS만 사용해본 사용자라면 학습 및 활용에 많은 시간이 필요합니다.

### CSS in JS 활용

- **장점** : 스타일 컴포넌트를 만들어 `props`를 전달 받아 동적으로 스타일 값을 설정할 수 있어 수준 높은 스타일 관리가 가능합니다.
- **단점** : 라이브러리 사용법 학습이 요구되며, JavaScript 파일 안에서 CSS를 작성해야 한다는 점에 낯설음을 느낄 수 있습니다.

<br/>

### classNames 모듈 활용 TIP 🍺

`classNames()`를 활용하면 손쉽게 상태 업데이트 따른 클래스 이름 관리가 손쉬워집니다. 기본 사용법은 손쉽지만, 모듈과 함께 사용할 경우
`classNames.bind()`를 사용해 스타일 모듈을 바인딩 한 `classNames()` 함수를 사용해야 해서 문법이 익숙하지 않습니다.

스타일 모듈과 `classNames` 라이브러리를 사용할 때마다 매번 코드를 작성하는 번거로움을 줄이기 위해 [스니펫을 만들어 두면 편리합니다.](https://bit.ly/2IG4BHv) 

**javascriptreact.json**

```jsonc
{
  "classNames/bind 모듈": {
    "prefix": "classnamesbind",
    "body": [
      "import classNames from 'classnames/bind'",
      "",
      "// ${2:cn} = classNames() 함수",
      "const ${2:cn} = classNames.bind(${1:스타일모듈})$0"
    ],
    "description": "classNames/bind 모듈"
  }
}
```

<br/>

## 3. React만으로 앱 상태 관리

프로젝트 규모가 작을 경우 Redux, React Redux 라이브러리를 사용하는 것이 부담스러울 수 있습니다. 
이런 경우 React의 자체 기능인 Hooks, Context API를 활용해 상태 관리하는 방법을 살펴봅니다.

![](https://miro.medium.com/max/1400/1*JwaIxS631ew9UdJYmesGHg.png)

단, 이 방법을 사용하려면 Redux 아키텍처(설계 방법)의 기본 원리에 대해 이해하고 있어야 합니다.

![](https://miro.medium.com/max/1400/1*pE-ztd0SLgdKVbr9NwhJCw.png)

React + Redux 앱은 핵심 운영 요소는 다음과 같습니다.

- **스토어(Store)** : 컴포넌트와 통신하며 중앙에서 상태 관리 (상태 업데이트 → 컴포넌트 렌더링)
- **액션 크리에이터(Action Creator) 함수** : `type`, `payload` 속성을 가진 객체(액션)을 생성 반환하는 함수
- **리듀서(Reducers) 함수** : 전달 받은 액션의 타입을 감지하여 상태를 변경하는 순수 함수

<br/>

### 실습

[Todo App with React Hooks (실습 시작)](https://codesandbox.io/s/todo-app-with-react-hooks-silseub-sijag-qc196) 프로젝트 링크를 
클릭한 후, 프로젝트를 Fork하여 실습을 진행합니다.

### 스토어

React 앱의 상태를 관리 할 Context를 생성합니다.

**src/store/store.js**

```js
import React, { createContext } from 'react'

export const Store = createContext()
```

### 초기 상태

앱에서 사용될 상태를 설정합니다.

```js
const initState = {
  todos: [
    {
      id: "ck9483y6a000z3h63ex5f5qnl",
      doit: "React만으로 상태 관리"
    },
    {
      id: "ck9484xbm00063h68cpnevol6",
      doit: "React Redux 학습"
    }
  ]
};
```

### 액션

액션 상수, 액션 크리에이터 함수를 정의합니다.

```js
// 액션 상수
export const ADD_TODO = 'ADD_TODO'
export const DONE_TODO = 'DONE_TODO'

// 액션 크리에이터 함수
export const addTodo = (newTodo) => ({
  type: ADD_TODO,
  payload: newTodo
})

export const doneTodo = (doneTodoID) => ({
  type: DONE_TODO,
  payload: doneTodoID
})
```

### 리듀서

상태를 업데이트 할 리듀서 함수를 정의합니다.

> **NOTE.** 🐧  
> React에서는 Reducer 함수의 인자로 `state = initState`와 같은 초기 값을 설정하는 Redux에서의 보편화된 관습 사용을 권장하지 않습니다. 
> 때때로 초기 값은 `props`에 의존할 필요가 있어 Hook 호출 과정에서 설정되기도 하기 때문입니다.

```js
export const reducer = (state, action) => {
  const {type, payload} = action
  
  switch(type) {
    case ADD_TODO:
      return {
        todos: [...state.todos, payload]
      }

    case DONE_TODO:
      return {
        todos: state.todos.filter(todo => todo.id !== payload)
      }

    default:
      return state
  }
}
```

### 스토어 프로바이더 래퍼 컴포넌트

앞서 생성한 `Store` 컨텍스트의 공급자(`Store.Provider`) 컴포넌트를 래핑하는 커스텀 컴포넌트 `StoreProvider`를 정의합니다.
스토어 프로바이더 래퍼 컴포넌트는 전달 받은 `props.children`을 래핑하고, `value` 속성을 통해 상태(`staet`)와 상태를 변경하는 
요청을 처리하는 디스패치(`dispatch`)를 속성으로 하는 객체를 전달합니다.

상태와 디스패치는 [useReducer](https://ko.reactjs.org/docs/hooks-reference.html#usereducer) 훅을 사용해 
추출할 수 있습니다. 이 훅은 리듀서 함수 그리고 초기 상태를 전달 받습니다.

```js
import React, { createContext, useReducer } from 'react'

export const StoreProvider = ({children}) => {
  const [state, dispatch] = useReducer(reducer, initState)

  return (
    <Store.Provider value={{ state, dispatch }}>
      {children}
    </Store.Provider>
  )
}
```

> **NOTE.** 🐧  
> React는 `dispatch` 함수의 ID(identity)가 안정적(stable)이고, 리렌더링(re-renders) 과정에서도 변경되지 않도록 합니다.
> 그러므로 `useEffect()`, `useCallback()` 훅의 의존성 목록(`[]`)에 `dispatch` 함수를 포함하지 않아도 안전합니다.

### 앱에 스토어 공급

스토어 프로바이더 래퍼 컴포넌트를 사용해 앱의 엔트리 파일 `<App/>`에 상태 및 디스패치를 공급합니다.

```js
import StoreProvider from './store/store'

render(
  <StoreProvider>
    <App/>
  </StoreProvider>,
  document.getElementById('root')
)
```

---

### 스토어, 액션, 리듀서 별도 관리

향후 보다 다양한 상태를 관리해야 할 필요성이 있다면? 앞서 작성한 `store/store.js` 코드를 역할 별로 분리하여 관리하는 것이 좋습니다.

```sh
src/store/
├── index.js
├── store.js
├── actions.js
└── reducer.js
```

**actions.js**

액션 상수, 액션 크리에이터 함수는 여기서 관리합니다.

```js
// 액션 상수
export const ADD_TODO = 'ADD_TODO'
export const DONE_TODO = 'DONE_TODO'
export const RESET_TODO = 'RESET_TODO'

// 액션 크리에이터 함수
export const addTodo = (newTodo) => ({
  type: ADD_TODO,
  payload: newTodo
})

export const doneTodo = (doneTodoID) => ({
  type: DONE_TODO,
  payload: doneTodoID
})

export const resetTodo = () => ({
  type: RESET_TODO
})
```

**reducer.js**

상태를 업데이트 하는 리듀서 함수는 여기서 관리합니다.

```js
import { init } from './store'
import { ADD_TODO, DONE_TODO, RESET_TODO } from './actions'

export const reducer = (state, action) => {
  const { type, payload } = action
  
  switch(type) {
    case ADD_TODO:
      return {
        todos: [...state.todos, payload]
      }
    case DONE_TODO:
      return {
        todos: state.todos.filter(todo => todo.id !== payload)
      }
    case RESET_TODO:
      return init()
    default:
      return state
  }
}
```


**store.js**

스토어, 스토어 프로바이더 래퍼 컴포넌트 및 초기 상태, 초기화 함수 등은 여기서 관리합니다.

```jsx
import React, { createContext, useReducer } from 'react'
import { reducer } from './reducer'

// 스토어 컨텍스트 생성
export const Store = createContext()

// 초기 상태
export const initState = {
  todos: [
    {
      id: "ck9483y6a000z3h63ex5f5qnl",
      doit: "React만으로 상태 관리"
    },
    {
      id: "ck9484xbm00063h68cpnevol6",
      doit: "React Redux 학습"
    }
  ]
}

// 상태 초기화 함수
export init = () => initState

// 스토어 프로바이더 래퍼 컴포넌트
export const StoreProvider = ({children}) => {
  // useReducer 훅 → [state, dispatch]
  const [state, dispatch] = useReducer(reducer, initState, init)
  // 스토어 프로바이더 컴포넌트 래핑 ← { state, dispatch } 값으로 공급
  return <Store.Provider value={{state, dispatch}}>{children}</Store.Provider>
}
```

**index.js**

액션, 스토어에서 내보낸 것을 외부에서 사용할 수 있도록 **모듈 다시 내보내기**([re-exporting](https://2ality.com/2014/09/es6-modules-final.html#re-exporting)) 설정합니다.

```js
export * from 'actions'
export * from 'store'
```

---

### TodoInput 컴포넌트

사용자로부터 할 일을 입력 받는 컴포넌트 파일을 열어 다음 순서대로 코드를 작성합니다.
작성된 주석을 참고하세요.

```jsx
// 고유 ID 생성 함수 호출
import cuid from "cuid";

// Store 컨텍스트, 액션 크리에이터 함수 호출
import { Store, addTodo } from "../store";
```

```jsx
// Store 상태 관리를 위한 dispatch 추출
const { dispatch } = useContext(Store);

// 인풋 컨트롤 상태 관리
const [todo, setTodo] = useState(initDoit);

// 오류 상태 관리
const [error, setError] = useState(false);
```

입력 컴포넌트의 `onChange` 이벤트를 통해 
컴포넌트 `todo` 상태가 업데이트 되도록 설정합니다.

```jsx
(
  <input
    type="text"
    id="todoInput"
    placeholder="오늘 할 일을 작성하세요."
    value={todo.doit}
    // 사용자 입력 시
    onChange={(e) => {
      // 컴포넌트 todo 상태 업데이트
      setTodo({
        doit: e.target.value
      });
    }}
  />
)
```

[추가] 버튼을 누르면 입력 내용 유효성 검사 후, 내용이 유효하면 앱 상태 업데이트를 알림(요청) 처리합니다.

```jsx
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
      dispatch(
        // 액션 크리에이터 함수
        addTodo({
          id: cuid(),
          doit: todo.doit
        })
      );

      // 컴포넌트 상태 초기화
      setTodo(initDoit);
    }}
  >
    추가
  </Button>
)
```

### TodoList 컴포넌트

화면에 할 일 목록을 렌더링 하는 컴포넌트 파일을 열어 업데이트 된 상태를 렌더링 하도록 설정합니다.
작성된 주석을 참고하세요.

```jsx
// Store 컨텍스트 호출
import { Store, doneTodo } from "../store";
```

```jsx
// Store 상태 관리를 위한 state, dispatch 추출
const { state, dispatch } = useContext(Store);
```

런데링 오류를 방지하기 위해 삽입했던 컴포넌트 임시 상태를 제거합니다.

```jsx
// 임시 상태
// const [state] = useState({
//   todos: [
//     {
//       id: "ck9483y6a000z3h63ex5f5qnl",
//       doit: "React 상태 관리"
//     },
//     {
//       id: "ck9484xbm00063h68cpnevol6",
//       doit: "Redux 학습"
//     }
//   ]
// });
```

체크박스 컴포넌트를 클릭하면 "할 일 완료" 알림을 요청해 
체크 된 아이템을 앱 상태에서 제거되어 업데이트 되도록 설정합니다.

```jsx
(
  <Menu.Item as="li" key={item.id}>
    <Checkbox
      toggle
      label={item.doit}
      // 토글 체크박스 클릭 시, '할일 완료' 처리 알림
      onClick={() => dispatch(doneTodo(item.id))}
    />
  </Menu.Item>
)
```

### 실습 완성

[Todo App with React Hooks (실습 완성)](https://codesandbox.io/s/todo-app-with-react-hooks-silseub-wanseong-zujeq) 프로젝트 완성 파일을 열어
완성된 코드를 참고하세요.

<br/>

## 4. Redux + React Redux

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

## 5. React Redux Hooks

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
