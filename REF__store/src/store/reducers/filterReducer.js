import { UPDATE_FILTER } from '../actions/types'

const initialState = {
  item: [],
}

export default function filterReducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_FILTER:
      return {
        ...state,
        items: action.payload,
      }
    default:
      return state
  }
}
