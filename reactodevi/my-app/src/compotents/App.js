import React, { Component } from 'react'
import Navi from './Navi';
import Movielist from './Movielist';
import Navbar from './Navbar';
import './App.css';
import axios from 'axios';

export default class App extends Component {
    
    state = {
        movies : [
            
         
        ],
       
    }

    async componentDidMount() {
        const response = await axios.get("https://api.themoviedb.org/3/list/7107144?api_key=e8b9da4001dede248156952812c2e4dc&language=en-US")
        console.log(response.data)
        this.setState({movies: response.data.items})
        
    }
    
   



    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <Navi></Navi>
                    </div>
                </div>


                 <Navbar></Navbar>
                <Movielist movies={this.state.movies}></Movielist>

                <Navbar></Navbar>
                <Movielist movies={this.state.movies}></Movielist>
                
            </div>
        )
    }
}
