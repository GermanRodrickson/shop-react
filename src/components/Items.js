import React, { Component } from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 33%;
  display: inline-block;
  border: 1px solid red;
`

class Items extends Component {
  render(props) {
    return (
        <Container>
          {this.props.details.name}
        </Container>
    );
  }
}

export default Items;
