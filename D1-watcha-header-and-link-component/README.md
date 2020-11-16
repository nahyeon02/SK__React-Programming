```jsx
// 객체 구조 분해 할당
import React, {Component, useState, useContext, useRef, createContext} from 'react'

// 클래스 컴포넌트
class 컴포넌트 extends Component {
  // 클래스 필드
  state = {
    peoples: [],
    isLoading: false,
    visible: false,
    hasError: null
  }

  componentDidMount() {
    this.fetchData()
  }

  fetchData() {
    this.setState({isLoading : true })
    fetch('endpoint')
      .then(response => response.json())
      .then(json => this.setState({
        peoples: json,
        isLoading: false
      }))
      .catch(({message}) => this.setState({
        hasError: true,
        isLoading: false
      }))
  }

  render() {
    if (this.state.isLoading) {
      return <Loading />
    }

    return (
      <ul>
        {this.state.peoples.map(people => (
          <li key={people.id}>{people.name}</li>
        ))}
      </ul>
    )
  }
  
}

// 화살표 함수
// this 참조하는 대상이 변경된다!!!
const Test = ({id, className, title, ...restProps}) => {
  console.log(restProps)

  return (
    <button {...restProps} onClick={() => { console.log('action')}}>
      
    </button>
  )
export default Test
```