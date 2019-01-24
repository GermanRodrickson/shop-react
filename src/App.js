import React, { Component } from 'react';
import styled from 'styled-components';


import Nav from './components/Nav';
import Search from './components/Search';

const Wrapper = styled.section`
  color: red;
`

class Prueba extends Component {
  render() {
    return (
      <section>
        <Nav />
        <Search></Search>

        <Wrapper>
          <p>Hello!</p>
        </Wrapper>
      </section>
    );
  }
}

export default Prueba;
