import React from 'react'
import firebase from 'firebase'
import { StyledFirebaseAuth } from 'react-firebaseui'
import { UiConfig } from '../../firebase'

export default class FirebaseUI extends React.Component {
    constructor(props) { super(props) }

    render() {
        return(
            <div>
                <StyledFirebaseAuth 
                uiConfig={ UiConfig } 
                firebaseAuth={firebase.auth()} />
            </div>
        )
    }
}