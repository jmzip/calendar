import { Component } from 'react'
import { connect } from 'react-redux'
import { isLoggedIn } from '../store/actions'
import firebase from 'firebase'
import { Redirect } from 'react-router-dom'

class LogoutRoute extends Component {
    constructor(props) { super(props) }

    componentDidMount() { 
        firebase.auth().signOut() 
    }
    render() { return(<Redirect to='/' />) }
}

const mapStateToProps = state => ({
    isLoggedIn: state.isLoggedIn
  })
  
export default connect(mapStateToProps, { isLoggedIn })(LogoutRoute)