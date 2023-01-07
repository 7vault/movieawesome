import React, { Component } from "react";
import "./App.css";
import "tachyons";
import CardList from "./CardList";
import SearchBox from "./SearchBox";
import Scroll from "./Scroll";

const API_URL =
  "https://api.themoviedb.org/3/movie/now_playing?api_key=a07e22bc18f5cb106bfe4cc1f83ad8ed";

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [], // store the movies in the state
      searchMovies: "",
    };
  }

  componentDidMount() {
    this.fetchMovies();
  }

  fetchMovies = async () => {
    const response = await fetch(API_URL);
    const data = await response.json();
    console.log(data.results);
    this.setState({ movies: data.results });
  };

  onSearchChange = (event) => {
    this.setState({ searchMovies: event.target.value });
  };

  render() {
    const { movies, searchMovies } = this.state;

    const filteredMovies = movies.filter((movie) => {
      return movie.title.toLowerCase().includes(searchMovies.toLowerCase());
    });

    if (!movies.length) {
      return (
        <div
          className="tc"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h1 className="tc f1 txtName">Loading....</h1>
        </div>
      );
    } else {
      return (
        <div className="app">
          <h1>MovieAwesome</h1>
          <SearchBox onSearchChange={this.onSearchChange}></SearchBox>
          <Scroll>
            <CardList movies={filteredMovies}></CardList>
          </Scroll>
        </div>
      );
    }
  }
}

export default App;

// import React, { Component } from "react";
// import { useEffect, useState } from "react";
// import "./App.css";

// import "tachyons";
// import CardList from "./CardList";
// import SearchBox from "./SearchBox";
// import movieList from "./movieList";
// //131c7259
// const API_URL =
//   "https://api.themoviedb.org/3/movie/now_playing?api_key=a07e22bc18f5cb106bfe4cc1f83ad8ed";

// class App extends Component() {
//   constructor() {
//     super();
//     this.state = {
//       movie: [],
//       searchMovies: "",
//     };
//   }

//   ComponentDidMount() {
//     const movies = async () => {
//       const response = await fetch(API_URL);
//       const results = await response.json();
//       console.log(results);
//       return results;
//     };
//     movies().then((results) => {
//       this.setState({ movie: results });
//     });
//   }

//   onSearchChange = (event) => {
//     this.setState({ searchMovies: event.target.value });
//   };

//   render() {
//     this.setState({ movie: this.movies });

//     const { movie, searchMovies } = this.state;
//     const filtered = movie.filter((movie) => {
//       return movie.Title.toLowerCase().includes(searchMovies.toLowerCase());
//     });

//     return (
//       <div className="app">
//         <h1>MovieAwesome</h1>
//         <SearchBox onSearchChange={this.onSearchChange}></SearchBox>
//         <div className="container">
//           <CardList movieList={movieList}></CardList>
//         </div>
//       </div>
//     );
//   }
// }

// export default App;
