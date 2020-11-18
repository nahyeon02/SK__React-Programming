import cuid from 'cuid'
import { CREATE_MESSAGE, CHANGE_MESSAGE } from '../actions/index'

// 초기 상태 값
export const initialState = [
  {
    id: cuid(),
    status: '메시지 박스 0',
  },
  {
    id: cuid(),
    status: '메시지 박스 1',
  },
]

// 리듀서 함수
const messageReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_MESSAGE:
      return [...state, action.payload]
    case CHANGE_MESSAGE:
      return state.map((item) =>
        item.id === action.payload.id ? action.payload : item
      )
    default:
      return state
  }
}

export default messageReducer
