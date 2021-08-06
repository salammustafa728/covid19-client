import axios from 'axios';
import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'
// import Pagination from 'react-js-pagination';
import './Input.css'
import './ApiData.css';
import ModalData from './ModalData';
export class ApiData extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: '',
            err: '',
            Country: '',
            totalConfirmed: '',
            totalDeaths: '',
            totalRecovered: '',
            date: '',
            show: false
        }
    }

    handleClose = () => this.setState({ show: false });
    updateSearch = (e) => {
        this.setState({
            search: e.target.value.substr(0, 20)
        })
    }


    render() {
        
        let filterdCountry = this.props.alData.filter(
            (item) => {
                return item.Country.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
            }
        );
        
        return (
            <div>
                <div><h3> Filter the contries, Enter a country Name  </h3>
                <div className="form__group">
                    <input className="form__input" type='text' name="name" id='name' placeholder="Conutry name" value={this.state.search} onChange={this.updateSearch.bind(this)} />
                    </div>
                </div>
                <br />
                <br />

                <div style={{ display: 'flex', flexWrap: 'wrap', margin: '40px 40px' }}>
                    {
                        filterdCountry.map((obj, idx) => {
                            return (
                                <div key={idx} style={{}}>
                                    <Card style={{
                                        width: '18rem', background: "#F6DFEB", marginBottom: '10px'
                                        , marginLeft: '20px', marginTop: '10px'
                                    }} onClick={() => { this.setState({ show: true }) }}>
                                        <Card.Body>
                                            <Card.Title onClick={() => {
                                                this.setState({
                                                    Country: obj.Country,
                                                    totalConfirmed: obj.TotalConfirmed,
                                                    totalDeaths: obj.TotalDeaths,
                                                    totalRecovered: obj.TotalRecovered,
                                                    date: obj.Date
                                                })
                                            }}>{obj.Country}</Card.Title>
                                            <Card.Text>
                                                <ul>
                                                    <li >TotalConfirmed:{obj.TotalConfirmed}</li>
                                                    <li > TotalDeaths:{obj.TotalDeaths}</li>
                                                    <li > TotalRecovered:{obj.TotalRecovered}</li>
                                                    <li > Date:{obj.Date}</li>
                                                </ul>
                                            </Card.Text>
                                            <button className='btn' onClick={() => this.props.setdata(idx)}>set</button>
                                            <button className='btn' onClick={() => this.props.getdata()}>get</button>
                                            <button className='btn' onClick={() => this.props.deleteLS()}>Delete from localStorage</button>
                                        </Card.Body>
                                    </Card>
                                    
                                    <ModalData
                                        show={this.state.show}
                                        handelShow={this.handelShow}
                                        handleClose={this.handleClose}
                                        Country={this.state.Country}
                                        totalConfirmed={this.state.totalConfirmed}
                                        totalDeaths={this.state.totalDeaths}
                                        totalRecovered={this.state.totalRecovered}
                                        date={this.state.date}
                                    />
                                </div>
                            )
                        }).slice(0,10)
                    }

                </div>


            </div>

        )
    }
}

export default ApiData