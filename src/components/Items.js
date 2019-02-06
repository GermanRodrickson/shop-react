import React, { Component } from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 33%;
  display: inline-block;
  text-align:center;
  position: relative;
`

const Image = styled.img`
  width: 140px;
  height: 140px;
  display: block;
  margin: 0 auto;
`

const Name = styled.h3`
  font-size: 22px;
  margin: 5px 0px;
`;

const Price = styled.strong`
  font-size: 16px;
  color: #aaa;
  display: block;
  margin: 5px 0px;
`;

const Button = styled.button`
  width: 200px;
  padding: 5px;
  border: 1px solid #000;
  border-radius: 6px;
  position: absolute;
  z-index: 1;
`

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
          <Button>Buy this product</Button>
        </Container>
    );
  }
}

export default Items;
