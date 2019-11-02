import React from 'react';
import styled from "styled-components";
import {Link} from "react-router-dom";

const StyledHeader = styled.header({
  padding: '15px 0',
  textAlign: 'center',
  fontSize: '3rem',
  textTransform: 'uppercase',
  fontWeight: 'bold',
  background: '#2b2e37',
  color: 'white',
  a: {
    color: 'inherit',
    textDecoration: 'none'
  }
});

function Header(props) {
  return (
    <StyledHeader>
      <Link to={`/`}>
        { props.appName }
      </Link>
    </StyledHeader>
  );
}

export default Header;
