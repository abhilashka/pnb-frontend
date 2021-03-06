import { createStore, combineReducers, applyMiddleware } from 'redux'
import { fetchReportsReducer, toggleNewsReducer } from './reducer/reportReducer'
import { fetchReporterReducer } from './reducer/reporterReducer'
import { fetchUserReducer } from './reducer/userReducer'
import { fetchProfileReducer } from './reducer/profileReducer'
import { userSigninReducer } from './reducer/oAuthReducer'
import { fetchNewsReducer } from './reducer/newsReducer'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

// combined reducers
const reducers = combineReducers({

    report: fetchReportsReducer,
    reporter: fetchReporterReducer,
    users: fetchUserReducer,
    profile: fetchProfileReducer,
    adminSignin: userSigninReducer,
    news: fetchNewsReducer,
    toggleReport: toggleNewsReducer
})

const store = createStore(
    reducers,
    composeWithDevTools(applyMiddleware(logger, thunk))
)

export default store
