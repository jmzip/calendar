// React 
import { Component } from 'react'
import './App.css'

// Redux
import { connect } from 'react-redux'
import { isLoggedIn } from './store/actions'

// Router
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom"

// Routes
import HomeRoute from './routes/Home'
import LoginRoute from './routes/Landing/Login'
import LogoutRoute from './routes/Logout'
import SignupRoute from './routes/Landing/Signup'
import TermsRoute from './routes/Policy/Terms'
import PrivacyRoute from './routes/Policy/Privacy'

// Firebase
import firebase from 'firebase'
import { Config } from './firebase'
firebase.initializeApp(Config)

// App Component
class App extends Component {
  constructor(props) { super(props) }

  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      if(user) this.props.isLoggedIn(user.uid)
    })
  }

  render() {

    console.log(this.props.isLoggedIn, 'app')
    return(
      // React Router
      <Router>
          <Switch>
            {/* START Routes */}
            <Route path='/terms' component={ TermsRoute } />
            <Route path='/privacy' component={ PrivacyRoute } />
            <Route path='/signup' component={ SignupRoute } />
            <Route path='/login' component={ LoginRoute } />
            <Route path='/logout' component={ LogoutRoute }></Route>
            <Route path='/' component={ HomeRoute } />
            {/* END Routes */}
          </Switch>
      </Router>
    )
  }
}

// State to Prop Mapping
const mapStateToProps = state => ({
  isLoggedIn: state.isLoggedIn
})

// Connected Export
export default connect(mapStateToProps, { isLoggedIn })(App)