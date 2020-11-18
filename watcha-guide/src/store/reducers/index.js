import { combineReducers } from 'redux'
import messageReducer from './message'

// 추가적으로 리듀서 만들어지면 이 곳에 등록
const rootReducer = combineReducers({
  message: messageReducer,
})

export default rootReducer
