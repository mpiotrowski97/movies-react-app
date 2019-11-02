import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from "styled-components";
import Loader from "./Loader";

function MovieDetails() {
  const { id } = useParams();

  const [movie, setMovie] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost/api/movies/${id}`)
      .then(response => response.json())
      .then(data => {
        setMovie(data);
      })
      .finally(() => setIsLoading(false));
  }, [id]);

  const StyledMovieDetailsWrapper = styled.div({
    width: '80%',
    margin: '20px auto',
    display: 'flex'
  });

  const StyledMovieDetails = styled.div({
    padding: '0 20px'
  });

  return (
    <div>
      { isLoading
        ? <Loader/>
        :
        <div>
          <StyledMovieDetailsWrapper>
            <div>
              <img src={require('../assets/images/poster.jpg')} alt="poster"/>
            </div>
            <StyledMovieDetails>
              <h3>{ movie.title }</h3>
              <small>{ movie.director }</small>
              <p>{movie.description}</p>
            </StyledMovieDetails>
          </StyledMovieDetailsWrapper>
        </div>
      }
    </div>
  )
}

export default MovieDetails;
