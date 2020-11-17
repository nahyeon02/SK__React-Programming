import { UPDATE_SORT } from '../actions/types'

const initialState = {
  item: '',
}

export default function sortReducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_SORT:
      return {
        ...state,
        item: action.payload,
      }
    default:
      return state
  }
}
