import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import Movie from "./Movie";
import Search from "./Search";

function MoviesList() {
  const StyledMoviesWrapper = styled.div`
    width: 800px;
    margin: 20px auto;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  `;

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch('http://localhost/api/movies')
      .then(response => response.json())
      .then(data => {
        setMovies(data['hydra:member']);
      });
  }, []);

  return (
    <div>
      <Search/>

      <StyledMoviesWrapper>
        { movies.map(movie => (<Movie key={movie.id} {...movie} />)) }
      </StyledMoviesWrapper>
    </div>
  )
}

export default MoviesList;
