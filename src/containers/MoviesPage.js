// .src/containers/MoviesPage.js
import React from "react";
import { Route } from "react-router-dom";

import MoviesList from "../components/MovieList";
import MovieShow from "../components/MovieShow";

// Here we add 'match' to the arguments so we can access the path info in `routerProps` that is passed from App.js as a prop
const MoviesPage = ({ match, movies }) => (
  <div>
    <MoviesList movies={movies} />
    {/* We also add a `Route` component that will render `MovieShow` when a movie is selected */}
    <Route
      exact
      path={match.url}
      render={() => <h3>Choose a movie from the list above</h3>}
    ></Route>
    <Route
      path={`${match.url}/:movieID`}
      render={(routerProps) => <MovieShow {...routerProps} movies={movies} />}
    ></Route>
  </div>
);

export default MoviesPage;
