  
import React from "react";
import Movie from "./Movie";

class Movies extends React.Component {
  render() {
    return (
      <div>
        <Movie
        disMovie={this.props.displayMovies}
        />
      </div>
      );
  }
}
export default Movies;