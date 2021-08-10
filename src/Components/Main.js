import axios from 'axios';
import React, { Component } from 'react'
import  Pagination  from './Pagination';
import ApiData from './ApiData';
import './Main.css'

export class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            alData: [],
            err: '',
            postPerPage : 20,
            currentPage:1,
            sortType: 'asc',
            isSaved: false,
            setCurrentPage:1,
        }
       
    }

    setdata = (idx) => {
        localStorage.setItem('favorite', JSON.stringify(this.state.alData[idx]));
    }
    // getdata = () => {
    //     let data = localStorage.getItem('favorite');
    //     console.log(data);
    // }

    componentDidMount = async () => {
        const url = `${process.env.REACT_APP_SERVER_URL}/allData`;
        await axios.get(url).then((response) => {
            this.setState({
                alData: response.data
            })

        }).catch(err => this.setState({ err: err.message }));
    }
    deleteLS = () => {
        localStorage.removeItem('favorite');

    }
    
    onSort = (sortType) => {
        this.setState({
            sortType: sortType
        })
    }
     

    render() {
        const { alData, sortType } = this.state;
        const sorted = alData.sort((a, b) => {
            const isReversed = ((sortType === 'desc') && (a.TotalDeaths < b.TotalDeaths)) ? -1 : 1;
            return isReversed * a.Country.localeCompare(b.Country);
        });
       const idxOfLst = this.state.currentPage * this.state.postPerPage;
       const idxOfFirst = idxOfLst - this.state.postPerPage;
       const currentPosts = this.state.alData.slice(idxOfFirst,idxOfLst);
       const paginate=(number)=>{this.setState({currentPage:number})};

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
                                    alData={currentPosts}
                                    sorted={sorted}
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
                  paginate={paginate}
                  postPerPage={this.state.postPerPage}
                  totalPosts={this.state.alData.length}
                   />
                </div>
            </div>
        )
    }
}

export default Main

