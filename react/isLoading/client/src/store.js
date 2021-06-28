import { composeWithDevTools } from 'redux-devtools-extension'
import loadingReducer from "./reducers/loader";
import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

const reducer = combineReducers({
  loader: loadingReducer,
})

export default createStore(
  reducer,
  composeWithDevTools(
        applyMiddleware(thunk)
  )
)