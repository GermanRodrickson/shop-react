import React, { Component } from "react";
import styled from "styled-components";


const Button = styled.button`
  opacity: 0;
  pointer-events: none;
  transition: .3s;
  width: 200px;
  height: 30px;
  border: 1px solid #000;
  border-radius: 6px;
  position: absolute;
  z-index: 1;
  top: 50%;
  left: 50%;
  margin-left: -100px;
  margin-top: -15px;
`

const Image = styled.img`
  width: 140px;
  height: 140px;
  display: block;
  margin: 0 auto;
  transition: .3s;
  `

const Name = styled.h3`
  font-size: 22px;
  margin: 30px 0px 5px 0px;
  `

const Price = styled.strong`
  font-size: 16px;
  color: #aaa;
  display: block;
  margin: 5px 0px;
`

const Container = styled.div`
  width: 33%;
  display: inline-block;
  text-align: center;
  position: relative;
  margin-bottom: 30px;
`

const ContainerImage = styled.div`
  transition: .3s;
  width: 300px;
  margin: 0 auto;
  height: 140px;
  &:hover {
    background-color: red;
    ${Image} {
      transform: scale(1.1);
    }
    ${Button} {
      pointer-events: initial;
      opacity: 1;
    }
  }
`;

class Items extends Component {
  render(props) {
    const { name, price, image} = this.props.details

    return (
        <Container>
          <ContainerImage>
            <Image src={image} alt="fish "/>
            <Button>Buy this product</Button>
          </ContainerImage>

          <Name>{name}</Name>
          <Price>{price}</Price>
          
        </Container>
    );
  }
}

export default Items;
