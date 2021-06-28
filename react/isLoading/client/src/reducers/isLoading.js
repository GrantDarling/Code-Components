const initialState = true

const reducer = (state = initialState, action) => {
  switch(action.type) {
      case 'INIT':
        return action.data
      case 'LOADING':
        return action.data
      default:
        return state
    }
}

export const initialize = (content) => {
  return async dispatch => {
    const data = content
    dispatch({
      'type': 'INIT',
      data,
    })
  }
}

export const loading = (content) => {
  return async dispatch => {
    const data = content
    dispatch({
      'type': 'LOADING',
      data
    })
    return data
  }
}

export default reducer