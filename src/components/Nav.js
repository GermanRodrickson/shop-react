import React, { Component } from "react";
import styled from "styled-components";

import search from '../img/search-icon.svg'

const Wrapper = styled.section`
  display: flex;
  justify-content: space-around;
  position: fixed;
  top: 0;
  background-color: black;
  color: #ffffff;
  width: 100%;
  padding: 40px 0px;
`;

const Nav = styled.ul`
  display: flex;
  flex-direction: row;

  li {
    margin: 0px 20px;
    padding-bottom: 10px;
    transition: all 0.2s linear;
    background: (linear, left top, right top, from(#ffffff), to(#ffffff));
    background: linear-gradient(to right, #ffffff 0%, #ffffff 100%);
    background-size: 0 4px;
    background-repeat: no-repeat;
    background-position: left 110%;
  }

  li:hover {
    background-size: 100% 4px;
    color: #ffffff;
  }
`;

const Img = styled.img`
  vertical-align: middle;
  width: 30px;
`;

const Link = styled.a`
  vertical-align: middle;
  padding-bottom: 10px;
  margin-left: 10px;
  transition: all 0.2s linear;
  background: (linear, left top, right top, from(#ffffff), to(#ffffff));
  background: linear-gradient(to right, #ffffff 0%, #ffffff 100%);
  background-size: 0 4px;
  background-repeat: no-repeat;
  background-position: left 110%;

  &:hover {
    background-size: 100% 4px;
    color: #ffffff;
  }
`;

class Prueba extends Component {
  render() {
    return (
      <Wrapper>
        <h1>logo</h1>
        <Nav>
          <li>Home</li>
          <li>Shop</li>
          <li>More</li>
          <li>Info</li>
        </Nav>
        <div>
          <Img src={search} alt="search"/>
          <Link>My cart</Link>
        </div>
      </Wrapper>
    );
  }
}

export default Prueba;
