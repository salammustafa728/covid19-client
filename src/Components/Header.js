import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav'
// import './Header.css'

export class Header extends Component {
    render() {
        return (
            <div style={{background:'#CAF7E3'}}>
               <nav >
               <Nav defaultActiveKey="/"  as="ul" style={{display:"flex"}}>
                    <Nav.Item as="li">
                        <Nav.Link  href="/">Home</Nav.Link>
                    </Nav.Item>
                    
                </Nav>
               </nav>
            </div>
        )
    }
}

export default Header;
