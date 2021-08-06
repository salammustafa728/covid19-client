import axios from 'axios';
// import { Button } from 'bootstrap';
import React, { Component } from 'react'
import  Pagination  from './Pagination';
// import Table from 'react-bootstrap/Table'
import ApiData from './ApiData';
import './Main.css'

export class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            alData: [],
            err: '',
            blogPosts: [],
            currentPageNumber: 1,
            totalItems: 192,
            itemsPerPage: 10,
            sortType: 'asc',
            isSaved: false
        }
    }

    setdata = (idx) => {
        localStorage.setItem('favorite', JSON.stringify(this.state.alData[idx]));
    }
    getdata = () => {
        let data = localStorage.getItem('favorite');
        console.log(data);
    }

    componentDidMount = async () => {
        const url = `${process.env.REACT_APP_SERVER_URL}/allData`;
        await axios.get(url).then((response) => {
            this.setState({
                alData: response.data,
                blogPosts: response.data,
                // currentPageNumber: response.currentPageNumber,
                // totalItems: response.totalItems,
                // itemsPerPage: response.itemsPerPage
            })

        }).catch(err => this.setState({ err: err.message }));
    }
    deleteLS = () => {
        localStorage.removeItem('favorite');

    }

    handleSelect(number) {
        console.log('handle select', number);
        this.setState({ currentPageNumber: number });
    }
    paginate=(pageNumber)=>{
        this.setState({
            currentPageNumber: pageNumber,
            alData: this.state.alData.slice(10,20)
        })
    }
    onSort = (sortType) => {
        this.setState({
            sortType: sortType
        })
    }
    render() {
        const { alData, sortType } = this.state;
        const sorted = alData.sort((a, b) => {
            const isReversed = (sortType === 'desc') ? -1 : 1;
            return isReversed * a.Country.localeCompare(b.Country);
        });
        return (
            <div>
                
                <div class="hero">
                    <div class="tint"></div>
                </div>
               
                <br></br>
                <h3 style={{ textAlign: 'center',color:'black' }}>Salam Mustafa COVID19 Cases Project</h3>
                <br />
                <div>
                    {this.state.err ? (
                        <div >
                            {this.state.err}
                        </div>
                    ) : (
                        <div>
                            <div style={{ marginLeft: '40%' }}>
                                <button className='btn' type='click' onClick={(e) => this.onSort('asc')}>sort Conutries asc </button>
                                <button className='btn' onClick={(e) => this.onSort('desc')}>sort Conutries desc </button>
                            </div>
                            <br />
                            <div style={{ marginLeft: '10%' }}>
                                <ApiData
                                    alData={this.state.alData}
                                    // currentPost={currentPost}
                                    sorted={sorted}
                                    saveNum={this.saveNum}
                                    deleteLS={this.deleteLS}
                                    setdata={this.setdata}
                                    getdata={this.getdata}
                                   
                                />
                            </div>
                        </div>
                    )
                    }
                </div>
                <div >

                </div>
                <div>
                   <Pagination
                  paginate={this.paginate}
                  alData={this.state.alData}
                   />
                </div>
            </div>
        )
    }
}

export default Main
