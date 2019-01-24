import React, { Component } from "react";
import styled from "styled-components";

import search from '../img/search-icon.svg';

const Wrapper = styled.section`
  background: rgba(72, 72, 72, 0.85);
  position: fixed;
  z-index: 2;
  width: 100%;
  height: 100vh;
`;

const SearchWrapper = styled.div`
  /* right: 50%;
  top: 40%;
  width: 450px;
  position: absolute;
  margin-right: -225px; */
  display: flex;
  justify-content: center;
  margin-top: 20em;
`

const Input = styled.input`
  width: 400px;
  background: none;
  border: none;
  border-bottom: 1px solid white;
  padding-bottom: 10px;
  vertical-align: bottom;
  color: #fff;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: #fff;
  }
`;

const Button = styled.img`
  vertical-align: bottom;
  display: inline-block;
  width: 30px;
  height: 30px;
  border-bottom: 1px solid white;
  padding-bottom: 10px;
`;

class Prueba extends Component {
  render() {
    return (
      <Wrapper>
        <SearchWrapper>
          <Input type="text" placeholder="Search here"/>
          <Button src={search} />
        </SearchWrapper>
      </Wrapper>
    );
  }
}

export default Prueba;
