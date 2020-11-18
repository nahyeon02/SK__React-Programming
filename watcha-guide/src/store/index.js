import { createStore } from 'redux'

// 초기 상태 값
const initialState = {
  status: 'before drwaing',
}

// 리듀서 함수
const reducer = (state, action) => {
  console.log('state in reducer: ', state)
  console.log('action in reducer: ', action)
  switch (action.type) {
    case 'DRAWING':
      state = {
        status: action.payload,
      }
      break
    default:
  }
  return state
}

// 스토어 생성
const store = createStore(reducer, initialState)

// 기본 내보내기
export default store
