import React, { Component } from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 33%;
  display: inline-block;
  border: 1px solid red;
  text-align:center;
`

const Image = styled.img`
  width: 100px;
  height: 100px;
  display: block;
  margin: 0 auto;
`

class Items extends Component {
  render(props) {
    const { name, price, image} = this.props.details

    return (
        <Container>
          <Image src={image} alt="fish "/>
          {name}
          {price}
        </Container>
    );
  }
}

export default Items;
