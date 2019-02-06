import React, { Component } from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 33%;
  display: inline-block;
  border: 1px solid red;
  text-align:center;
`

const Image = styled.img`
  width: 140px;
  height: 140px;
  display: block;
  margin: 0 auto;
`

const Name = styled.h3`
  font-size: 22px;
`

const Price = styled.strong`
  font-size: 16px;
  color: #aaa;
  display: block;
`;

class Items extends Component {
  render(props) {
    const { name, price, image} = this.props.details

    return (
        <Container>
          <Image src={image} alt="fish "/>
          <Name>
            {name}
          </Name>
          <Price>
            {price}
          </Price>
          <button>Buy this product</button>
        </Container>
    );
  }
}

export default Items;
