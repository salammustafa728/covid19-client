import React, { Component } from 'react'
import './Main.css'
export class Pagination extends Component {
    render() {
        const pageNum = [];
        for (let i = 0; i < Math.ceil(110 / 10); i++) {
            pageNum.push(i);
        }
        return (
            <div>
                <div class="container2">
                    <ul className="pagination" >
                         {
                            pageNum.map((number) => {
                                return (
                                    <div>
                                    <li key={number} className='page-item' ><a  href='!#' > {number} </a></li>
                                    </div>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        )
    }
}

export default Pagination
