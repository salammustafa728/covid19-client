import React, { Component } from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

export class ModalData extends Component {
    render() {
        return (
            <div>
                <Modal show={this.props.show} onHide={this.props.handleClose} animation={false}>
                    <Modal.Header closeButton>
                        <Modal.Title>{this.props.Country}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>This the information for COVID19 in {this.props.Country}
                    <Card style={{
                                    width: '18rem', background: "#FFC7C7", marginBottom: '10px'
                                    , marginLeft: '20px', marginTop: '10px'
                                }} onClick={()=>{this.setState({show:true})}}>
                                    <Card.Body>
                                        <Card.Title>{this.props.Country}</Card.Title>
                                        <Card.Text>
                                            <ul>
                                                <li>TotalConfirmed:{this.props.totalConfirmed}</li>
                                                <li> TotalDeaths:{this.props.totalDeaths}</li>
                                                <li> TotalRecovered:{this.props.totalRecovered}</li>
                                                <li> Date:{this.props.date}</li>
                                            </ul>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                    
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.props.handleClose}>
                            Close
                        </Button>
                        {/* <Button variant="primary" onClick={}>
                            Save Changes
                        </Button> */}
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}

export default ModalData
