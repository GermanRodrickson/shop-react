import React, { Component } from "react";
import styled from "styled-components";



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
  opacity: 0;
  transition: .3s;
  width: 150px;
  height: 30px;
  border: 1px solid #000;
  border-radius: 6px;
  position: absolute;
  z-index: 1;
  top: 50%;
  left: 50%;
  margin-left: -100px;
  margin-top: -15px;

  &:hover {
    background-color: red;
  }
`


const Container = styled.div`
  width: 33%;
  display: inline-block;
  text-align: center;
  position: relative;
  margin-bottom: 30px;

  &:hover {
    ${Button} {
      opacity: 1;
    }
  }
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
          <Button>Buy this product</Button>
        </Container>
    );
  }
}

export default Items;
