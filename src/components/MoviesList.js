import React, {useState, useEffect} from 'react';
import styled from "styled-components";
import Movie from "./Movie";
import Search from "./Search";
import Loader from "./Loader";
import {API_URL} from "../common/config";

function MoviesList() {
  const StyledMoviesWrapper = styled.div`
    width: 800px;
    margin: 20px auto;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  `;

  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  function fetchMovies(titleSearch) {
    let url = `${API_URL}/movies`;

    if ('' !== titleSearch) {
      url += `?title=${titleSearch}`;
    }

    setIsLoading(true);
    fetch(url)
      .then(response => response.json())
      .then(data => {
        setMovies(data['hydra:member']);
      })
      .finally(() => {
        setIsLoading(false);
      })
  }

  const [search, setSearch] = useState('');

  useEffect(() => {
    fetchMovies(search);
  }, [search]);

  return (
    <div>
      <Search change={(search) => {setSearch(search)}} search={search} />

      {isLoading
        ? <Loader/>
        :
        <div>

          <StyledMoviesWrapper>
            {movies.map(movie => (<Movie key={movie.id} {...movie} />))}
          </StyledMoviesWrapper>
        </div>
      }
    </div>
  )
}

export default MoviesList;
