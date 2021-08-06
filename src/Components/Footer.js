import React, { Component } from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export class Footer extends Component {
    render() {
        return (
            <div style={{background:'#E4BAD4',color:'grey'}}>
                <div className="text-center">
                    <h3>Authored</h3>
                   <div>
                        <h3>Salam Mustafa</h3>
                        <h3>
                            code challenge for LigaData
                        </h3>
                        </div>
                </div>
            </div>
        )
    }
}

export default Footer
