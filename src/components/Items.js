import React, { Component } from "react";
import styled from "styled-components";

const Wrapper = styled.section`
  padding-top: 150px;
`

const Container = styled.div`

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
