import React from 'react';
import styled from "styled-components";

function Search(props) {
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

  function handleChange(event) {
    props.change(event.target.value);
  }

  function handleClick() {
    props.change('');
  }

  return (
    <StyledSearchWrapper>
      <StyledSearchInput type="text" value={props.search} onChange={handleChange}/>
      <StyledSearchButton onClick={handleClick}>Clear search</StyledSearchButton>
    </StyledSearchWrapper>
  );
}

export default Search;
