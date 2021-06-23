import { createStore, combineReducers, applyMiddleware } from 'redux'
import { fetchReportsReducer } from './reducer/reportReducer'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

// combined reducers
const reducers = combineReducers({

    report: fetchReportsReducer,
})

const store = createStore(
    reducers,
    composeWithDevTools(applyMiddleware(logger, thunk))
)

export default store
