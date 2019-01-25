import React, { Component } from 'react';
import styled from 'styled-components';


import Nav from './components/Nav';
import Search from './components/Search';

const Wrapper = styled.section`
  padding-top: 150px;
  color: red;
`

class Prueba extends Component {
  state = {
    searchOpen: false
  };

  render() {
    if(this.state.searchOpen) {
      return <Search />
    }


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
