import React from 'react'
import { Container, Row, Col as Column } from 'react-bootstrap'

export default class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    componentDidMount() {}

    render() {
        return (
            <div className="d-flex justify-content-center align-items-center bg-dark text-secondary">
                <Container className="m-5">
                    <Row>
                        <Column><h1>Calendar</h1></Column>
                        <Column><div>Links</div></Column>
                        <Column><div>Links</div></Column>
                        <Column><div>Links</div></Column>
                    </Row>
                </Container>
            </div>
        )
      }
}