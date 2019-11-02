import React from 'react';
import styled from "styled-components";

const StyledHeader = styled.header({
  padding: '15px 0',
  textAlign: 'center',
  fontSize: '3rem',
  textTransform: 'uppercase',
  fontWeight: 'bold',
  background: '#2b2e37',
  color: 'white'
});

function Header(props) {
  return <StyledHeader>{ props.appName }</StyledHeader>
}

export default Header;
