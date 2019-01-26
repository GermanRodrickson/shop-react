import React, { Component } from 'react';
import styled from 'styled-components';


import Nav from './components/Nav';
import Search from './components/Search';

const Wrapper = styled.section`
  padding-top: 150px;
  color: red;
`

class Prueba extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchOpen: false
    };
  }

  displaySearch = () => {
    this.setState({
      searchOpen: true
    });
  };

  closeSearch = () => {
    this.setState({
      searchOpen: false
    });
  };

  render() {
    if (this.state.searchOpen) {
       return (
        <section>
         <Search 
             searchOpen={this.state.searchOpen}
             closeSearch={this.closeSearch}
          />
           <Nav
             searchOpen={this.state.searchOpen}
             displaySearch={this.displaySearch}
           />

          <Wrapper>
            <p>Hello!</p>
          </Wrapper>
        </section>
       )
      
    }

    return (
      <section>
        <Nav 
          searchOpen={this.state.searchOpen} 
          displaySearch={this.displaySearch}
        />

        <Wrapper>
          <p>Hello!</p>
        </Wrapper>
      </section>
    );
  }
}

export default Prueba;
