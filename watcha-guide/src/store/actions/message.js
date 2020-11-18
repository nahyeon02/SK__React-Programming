// 액션 타입(상수)
export const CREATE_MESSAGE = 'CREATE_MESSAGE'
export const CHANGE_MESSAGE = 'CHANGE_MESSAGE'

// 액션 크리에이터 함수
export const createMessage = (newMessage) => ({
  type: CREATE_MESSAGE,
  paylad: newMessage,
})

export const changeMessage = (changeMessage) => ({
  type: CHANGE_MESSAGE,
  paylad: changeMessage,
})
