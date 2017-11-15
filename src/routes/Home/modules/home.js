import { actionHandlers } from './HomeHandlers'

const initialState = { inputData: {} }
export function homeReducer(state = initialState, action) {
  const handle = actionHandlers[action.type]
  return handle ? handle(state, action) : state
}
