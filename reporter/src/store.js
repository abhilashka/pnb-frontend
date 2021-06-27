import { createStore, combineReducers, applyMiddleware } from 'redux'
import { userSigninReducer } from './reducers/oAuthReducer'
import { fetchNewsReducer } from './reducers/newsReducer'

import logger from 'redux-logger'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'


// combined reducers
const reducers = combineReducers({

    signin: userSigninReducer,
    news: fetchNewsReducer,

   
})

const store = createStore(
    reducers,
    composeWithDevTools(applyMiddleware(logger, thunk))
)

export default store
