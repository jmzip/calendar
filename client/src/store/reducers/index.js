// Reducers
import isLoggedInReducer from './isLoggedIn'
import { combineReducers } from 'redux'

// rootReducer
const rootReducer = combineReducers({
    isLoggedIn: isLoggedInReducer
})

// export combined reducers
export default rootReducer