import React, { Component } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  color: red;
  margin-top: 150px;
`

class Items extends Component {
  render() {
    return (
      <Wrapper>
        {this.props.data}}
      </Wrapper>
    );
  }
}

export default Items;
