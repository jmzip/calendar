import { Component, setState } from 'react'
import { Container } from 'react-bootstrap'
import { connect } from 'react-redux'
import { isLoggedIn } from '../store/actions'

class HomeRoute extends Component {
    constructor(props) { 
        super(props) 
    }

    render() {
        return(<div>Home</div>)
        // if(this.props.isLoggedIn() !== false) {
        //     return (
        //         <Container>
        //             is logged in
        //         </Container>
        //     )
        // }
        // else {
        //     return (
        //         <Container>
        //             not logged in
        //         </Container>
        //     )
        // }
    }
}

const mapStateToProps = state => ({
    isLoggedIn: state.isLoggedIn
  })
  
export default connect(mapStateToProps, { isLoggedIn })(HomeRoute)