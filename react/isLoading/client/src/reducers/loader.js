const initialState = {
	isLoading: true,
	refresh: 2000
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
      case 'INIT':
        return action.payload
      case 'LOADING':
        return { ...state, isLoading: action.payload }
      default:
        return state
    }
}

export const initialize = (content) => {
  return async dispatch => {
    const payload = content
    dispatch({
      'type': 'INIT',
      payload,
    })
  }
}

export const loading = (content) => {
  return async dispatch => {
    const payload = content
    dispatch({
      'type': 'LOADING',
      payload
    })
    return payload
  }
}

export default reducer