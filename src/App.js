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
    console.log(this.props);
    this.setState({
      searchOpen: true
    });
    console.log(this.props);
  };

  render() {
    if (this.state.searchOpen) {
       return (
         <section>
         <Search />
          <Nav searchOpen={this.state.searchOpen} />

          <Wrapper>
            <p onClick={this.displaySearch}>Hello!</p>
          </Wrapper>
        </section>
       )
      
    }

    return (
      <section>
        <Nav searchOpen={this.state.searchOpen} />

        <Wrapper>
          <p onClick={this.displaySearch}>Hello!</p>
        </Wrapper>
      </section>
    );
  }
}

export default Prueba;
