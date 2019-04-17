import { createStore, applyMiddleware } from 'redux'
import promiseMiddleware from 'redux-promise-middleware'
import clientReducer from './ducks/clientReducer'
import { composeWithDevTools } from 'redux-devtools-extension'

export default createStore(clientReducer, composeWithDevTools(applyMiddleware(promiseMiddleware)))