import React, { Component } from "react";
import styled from "styled-components";

const Wrapper = styled.section`
  background: rgba(72, 72, 72, 0.85);
  position: fixed;
  z-index: 2;
  width: 100%;
  height: 100vh;
`;

const Input = styled.input`
  position: absolute;
  top: 50%;
  right: 50%;
  width: 400px;
  margin-right: -200px;
  background: none;
  border: none;
  border-bottom: 1px solid white;
  padding-bottom: 10px;
`;

class Prueba extends Component {
  render() {
    return (
      <Wrapper>
        <Input type="text" placeholder="Search here"/>
      </Wrapper>
    );
  }
}

export default Prueba;
