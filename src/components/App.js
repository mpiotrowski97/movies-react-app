import React from 'react';
import Header from "./Header";
import MoviesList from "./MoviesList";
import {Route, Switch} from "react-router-dom";
import MovieDetails from "./MovieDetails";

function App() {
  return (
    <div>
      <Header appName="Movies"/>

      <Switch>
        <Route exact path="/" component={() => <MoviesList/>} />
        <Route path="/movies/:id" component={MovieDetails}/>
      </Switch>

    </div>
  );
}

export default App;
