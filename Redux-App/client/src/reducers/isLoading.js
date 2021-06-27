const initialState = false

const reducer = (state = initialState, action) => {
  // console.log('state now: ', state)
  // console.log('action', action)
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
  }
}

export default reducer