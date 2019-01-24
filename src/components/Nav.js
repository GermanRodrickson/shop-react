import React, { Component } from "react";
import styled from "styled-components";

import search from '../img/search-icon.svg'
import logo from '../img/test.png'

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
    vertical-align: middle;
    margin: 10px 20px;
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
    cursor: pointer;
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
  cursor: pointer;

  &:hover {
    background-size: 100% 4px;
    color: #ffffff;
  }
`;

const Logo = styled.img`
  width: 90px;
  height: 50px;
`;

class Prueba extends Component {
  render() {
    return (
      <Wrapper>
        <Logo src={logo}/>
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