import React from 'react';
import styled from "styled-components";
import Movie from "./Movie";

function MoviesList() {
  const StyledMoviesWrapper = styled.div`
    width: 800px;
    margin: 20px auto;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  `;

  return (
    <StyledMoviesWrapper>
      <Movie/>
      <Movie/>
      <Movie/>
      <Movie/>
      <Movie/>
      <Movie/>
    </StyledMoviesWrapper>
  )
}

export default MoviesList;
