import React, { Component } from "react";
import styled from "styled-components";

const Wrapper = styled.section`
  display: flex;
  justify-content: space-around;
`;

class Prueba extends Component {
  render() {
    return (
      <Wrapper>
        <div>logo</div>
        <div>nav</div>
        <div>cart</div>
      </Wrapper>
    );
  }
}

export default Prueba;
