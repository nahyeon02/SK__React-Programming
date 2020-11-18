import { createStore } from 'redux'
import { messageReducer } from './reducers'

// Redux 스토어 생성
// - 리듀서 함수 설정 (필수)
// - 초기 상태 값 설정 (옵션)
const store = createStore(messageReducer)

// 기본 내보내기
export default store
