import React from 'react';
import styled from "styled-components";

function Search() {
  const StyledSearchWrapper = styled.div`
    display: flex;
    justify-content: center;
    padding: 15px 0;
    margin-top: 25px;
  `;

  const StyledSearchButton  = styled.button`
    margin-left: 10px;
    border: 1px solid #2b2e37;
    background: none;
    text-transform: uppercase
    font-size: .8rem;
    padding: 5px 10px;
  `;

  const StyledSearchInput = styled.input`
    border: 1px solid #2b2e37;
    border-radius: none;
    padding: 0 10px;
    width: 500px;
  `;

  return (
    <StyledSearchWrapper>
      <StyledSearchInput type="text"/>
      <StyledSearchButton>Search</StyledSearchButton>
    </StyledSearchWrapper>
  );
}

export default Search;
