import React, { Component } from 'react'
import './Main.css'
export class Pagination extends Component {

    render() {
        const pageNum = [];
        for (let i = 0; i < Math.ceil(this.props.totalPosts/ this.props.postPerPage); i++) {
            pageNum.push(i);
        }
        return (
            <div style={{margin:'auto',width:'50%'}}>
            <nav style={{textAlign:'center'}} >
                {/* <div class="container2"> */}
                    <ul className="pagination" >
                         {
                            pageNum.map((number) => {
                                return (
                                    <li  key={number} className='page-item' >
                                        <button onClick={()=>this.props.paginate(number)} href='!#' className='page-link' > 
                                        {number} </button></li>
                                )
                            })
                        }
                    </ul>
                </nav>
             </div>
        )
    }
}

export default Pagination
