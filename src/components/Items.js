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
        {Object.keys(this.props.data).map((key) => 
          <p key={key}>
            {key}
          </p>
        )}
      </Wrapper>
    );
  }
}

export default Items;
