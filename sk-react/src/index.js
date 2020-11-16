import React from 'react'
import { render } from 'react-dom'
import './styles/index.css'
import MyComponent from './components/common/MyComponent'
import ToggleButton from './components/common/ToogleButton'
import AppInput from './components/common/AppInput'
import AppRadio from './components/common/AppRadio'

const rootElement = document.querySelector('#root')

render(
  <MyComponent
    id="unique-id"
    className="react component is very hard"
    aria-hidden="false"
    title="MyComponent 컴포넌트의 요소"
    role="group"
  >
    <ToggleButton />
    {/* 부모 컴포넌트 안에 있는 자식 컴포넌트에 속성을 전달(설정): props */}
    <AppInput id="userEmail" label="이메일" />
    <h1>마이 컴포넌트</h1>
    <AppRadio label="취미" />
    <p>컴포넌트 시스템을 사용하는 React</p>
  </MyComponent>,
  rootElement
)
