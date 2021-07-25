import { React , useState}  from 'react'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'
import firebase from 'firebase'
import firebaseConfig from './firebaseConfig'
import firebaseUIConfig from './firebaseUIConfig'

import { Modal, Button, Nav } from 'react-bootstrap'
import { XLg} from 'react-bootstrap-icons'

firebase.initializeApp(firebaseConfig)

function SignInScreen() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Nav.Link onClick={handleShow}>About</Nav.Link>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Sign In</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h1 className="text-center">Get Started</h1>
          <p className="text-center">Please sign-in:</p>
          <StyledFirebaseAuth 
            uiConfig={firebaseUIConfig} 
            firebaseAuth={firebase.auth()} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            <XLg />
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default SignInScreen