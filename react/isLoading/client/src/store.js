import { composeWithDevTools } from 'redux-devtools-extension'
import loadingReducer from "./reducers/isLoading";
import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

const reducer = combineReducers({
  isLoading: loadingReducer,
})

export default createStore(
  reducer,
  composeWithDevTools(
        applyMiddleware(thunk)
  )
)