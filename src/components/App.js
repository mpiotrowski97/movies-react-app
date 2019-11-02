import React from 'react';
import Header from "./Header";
import Search from "./Search";
import MoviesList from "./MoviesList";

function App() {
  return (
    <div>
      <Header appName="Movies"/>

      <Search/>

      <MoviesList/>
    </div>
  );
}

export default App;
