import React, { Component } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  color: red;
  margin-top: 150px;
`

class Items extends Component {
  render(props) {
    return (
      <Wrapper>
        {this.props.details.name}
      </Wrapper>
    );
  }
}

export default Items;
