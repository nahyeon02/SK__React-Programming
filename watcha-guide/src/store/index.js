import { createStore } from 'redux'
import rootReducer from './reducers'
import { composeWithDevTools } from 'redux-devtools-extension'

// Redux 스토어 생성
// - 리듀서 함수 설정 (필수)
// - 초기 상태 값 설정 (옵션)
const store = createStore(rootReducer, composeWithDevTools())

// 기본 내보내기
export default store
