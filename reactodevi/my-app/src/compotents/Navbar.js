import React, { Component } from 'react'
import './App.css';
export default class Navbar extends Component {
    render() {
        return (
            <div>
                <h5>What's Popular <span className="btn btn-outline c" style={{color:"green"}}>Streaming <span className="btn btn-outline " style={{color:"black"}} >On TV</span> <span className="btn btn-outline " style={{color:"black"}} >For Rent</span> <span className="btn btn-outline " style={{color:"black"}} >In Theards</span>  </span> </h5>
                
            </div>
            
        )
    }
}
