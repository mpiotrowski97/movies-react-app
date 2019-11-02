import React from 'react';
import styled from "styled-components";

function Movie() {
  const StyledMovie = styled.div`
    cursor: pointer;
    box-sizing: border-box;
    width: 25%;
    overflow: hidden;
    padding: 0 10px;
    
    h2 {
      text-align: center;
    }
    
    img {
      width: 100%;
    }
    
    small {
      width: 100%;
      display: block;
      text-align: center;
      padding: 5px 0;
    }
  `;

  return (
    <StyledMovie>
      <h2>Moonlight</h2>
      <img src={require('../assets/images/poster.jpg')} alt="poster"/>
      <small>(2019)</small>
    </StyledMovie>
  )
}

export default Movie;
