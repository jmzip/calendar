import React from 'react'
import { Container } from 'react-bootstrap'
import FirebaseUI from '../../components/Firebase/FirebaseUI'

export default class SignupRoute extends React.Component {
    constructor(props) { super(props) }

    render() {
        return(
            <Container>
                <h1>Signup</h1>
                <FirebaseUI />
            </Container>
        )
    }
}