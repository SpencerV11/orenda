import { createStore, applyMiddleware, combineReducers } from 'redux'
import promiseMiddleware from 'redux-promise-middleware'
import clientReducer from './ducks/clientReducer'
// import servicesReducer from './ducks/servicesReducer'
import { composeWithDevTools } from 'redux-devtools-extension'

// const rootReducer = combineReducers({
//     client: clientReducer,
//     services: servicesReducer
// })

export default createStore(clientReducer, composeWithDevTools(applyMiddleware(promiseMiddleware)))