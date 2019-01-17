import React, { Component } from "react";
import styled from "styled-components";

const Wrapper = styled.section`
  color: red;
`

class Prueba extends Component {
  render() {
    return (
      <Wrapper>
        <p>Hello!</p>
      </Wrapper>
    );
  }
}

export default Prueba;
