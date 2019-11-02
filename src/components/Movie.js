import React from 'react';
import styled from "styled-components";
import {Link} from "react-router-dom";

function Movie(props) {
  const StyledMovie = styled.div({
    cursor: 'pointer',
    boxSizing: 'border-box',
    width: '25%',
    overflow: 'hidden',
    padding: '0 10px',
    a: {
      color: 'inherit',
      textDecoration: 'none'
    },
    h2: {
      textAlign: 'center'
    },
    img: {
      width: '100%'
    },
    small: {
      width: '100%',
      display: 'block',
      textAlign: 'center',
      padding: '5px 0',
    }
  });

  return (
    <StyledMovie>
      <Link to={`/movies/${props.id}`}>
        <h2>{props.title}</h2>
        <img src={require('../assets/images/poster.jpg')} alt="poster"/>
        <small>(2019)</small>
      </Link>
    </StyledMovie>
  )
}

export default Movie;
