import React, { Component } from 'react';
import styled from 'styled-components';


import Nav from './components/Nav';

const Wrapper = styled.section`
  margin-top: 150px;
  color: red;
`

class Prueba extends Component {
  state = {
    searchOpen: false
  };


  render() {
    return (
      <section>
        <Nav searchOpen={this.state.searchOpen}/>
        
        <Wrapper>
          <p>Hello!</p>
        </Wrapper>
      </section>
    );
  }
}

export default Prueba;
