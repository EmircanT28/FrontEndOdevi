import React, { Component } from 'react'
import Navi from './Navi';
import Movielist from './Movielist';
import Navbar from './Navbar';
import './App.css';

export default class App extends Component {
    
    state = {
        movies : [
            {
                "id":1,
                "name":"Lorem",
                "rating": "80%",
                "overview":"Lorem lorem lorem lorem lorem lorem lorem",
                "imageURL": "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/8kOWDBK6XlPUzckuHDo3wwVRFwt.jpg"
            },
            {
                "id":2,
                "name":"Lorem Lorem",
                "rating": "80%",
                "overview":"Lorem lorem lorem lorem lorem lorem lorem",
                "imageURL": "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/8kOWDBK6XlPUzckuHDo3wwVRFwt.jpg"
            },
            {
                "id":3,
                "name":"Lorem Lorem",
                "rating": "80%",
                "overview":"Lorem lorem lorem lorem lorem lorem lorem",
                "imageURL": "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/8kOWDBK6XlPUzckuHDo3wwVRFwt.jpg"
            },
            {
                "id":4,
                "name":"Lorem Lorem",
                "rating":"80%",
                "overview":"Lorem lorem lorem lorem lorem lorem lorem",
                "imageURL": "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/8kOWDBK6XlPUzckuHDo3wwVRFwt.jpg"
            },
            {
                "id":5,
                "name":"Lorem Lorem",
                "rating": "80%",
                "overview":"Lorem lorem lorem lorem lorem lorem lorem",
                "imageURL": "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/8kOWDBK6XlPUzckuHDo3wwVRFwt.jpg"
            },
            {
                "id":6,
                "name":"Lorem Lorem",
                "rating": "80%",
                "overview":"Lorem lorem lorem lorem lorem lorem lorem",
                "imageURL": "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/8kOWDBK6XlPUzckuHDo3wwVRFwt.jpg"
            },
         
        ]
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
