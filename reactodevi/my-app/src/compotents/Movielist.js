import React, { Component } from "react";

export default class Movielist extends Component {
  render() {
    return (

      <div className="row">
        {this.props.movies.map((movie) => (
          <div className="col-lg-2" key={movie.id}>
            <div className="card mb-4 shadow-sm">
              <img
                src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${movie.poster_path}`}
                className="card-img-top"
                alt="Sample movie"
              ></img>
              <div className="card-body">
                <h5 className="card-title">{movie.name +" "+ movie.title}</h5>
                <p className="card-text">{movie.popularity}</p>
                <div className="d-flex justify-content-between aling-items-center">
                  <h2>
                    <span className="badge badge-info" style={{borderRadius:"1000px"}} >{movie.vote_average}</span>
                  </h2>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}
