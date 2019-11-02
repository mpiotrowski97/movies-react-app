import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from "styled-components";

function MovieDetails() {
  const { id } = useParams();

  const [movie, setMovie] = useState({});

  useEffect(() => {
    fetch(`http://localhost/api/movies/${id}`)
      .then(response => response.json())
      .then(data => {
        setMovie(data);
      });
  }, [id]);

  const StyledMovieDetailsWrapper = styled.div({
    width: '80%',
    margin: '20px auto',
    display: 'flex'
  });

  return (
    <StyledMovieDetailsWrapper>
      <div>
        <img src={require('../assets/images/poster.jpg')} alt="poster"/>
      </div>
      <div>
        <h3>{ movie.title }</h3>
        <small>{ movie.director }</small>
        <p>{movie.description}</p>
      </div>
    </StyledMovieDetailsWrapper>
  )
}

export default MovieDetails;
