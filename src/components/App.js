import React from 'react';
import Header from "./Header";
import MoviesList from "./MoviesList";

function App() {
  return (
    <div>
      <Header appName="Movies"/>

      <MoviesList/>
      
    </div>
  );
}

export default App;
