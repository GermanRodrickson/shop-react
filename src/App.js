import React, { Component } from 'react';
import styled from 'styled-components';
import Nav from './components/Nav';

const Wrapper = styled.section`
  color: red;
`

class Prueba extends Component {
  render() {
    return (
      <section>
        <Nav></Nav>

        <Wrapper>
          <p>Hello!</p>
        </Wrapper>
      </section>
    );
  }
}

export default Prueba;
