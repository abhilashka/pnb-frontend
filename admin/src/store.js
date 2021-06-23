import { createStore, combineReducers, applyMiddleware } from 'redux'
import { fetchReportsReducer } from './reducer/reportReducer'
import { fetchReporterReducer } from './reducer/reporterReducer'
import { fetchUserReducer } from './reducer/userReducer'
import { fetchProfileReducer } from './reducer/profileReducer'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

// combined reducers
const reducers = combineReducers({

    report: fetchReportsReducer,
    reporter: fetchReporterReducer,
    users: fetchUserReducer,
    profile: fetchProfileReducer
})

const store = createStore(
    reducers,
    composeWithDevTools(applyMiddleware(logger, thunk))
)

export default store
