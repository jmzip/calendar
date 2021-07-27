import firebase from 'firebase'
import update from 'react-addons-update'

const initialState = false

// isLoggedIn Reducer
export default (state = initialState, action) => {
    switch(action.type) {
        case 'IS_LOGGED_IN': 
            return update(state, {
                $set: action.payload
            })
        default: return update(state, {
            $set: false
        })
    }
}