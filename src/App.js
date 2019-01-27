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
      questions: [],
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
    let search
    if (this.state.searchOpen) {
      search =
        <section>
         <Search 
             searchOpen={this.state.searchOpen}
             closeSearch={this.closeSearch}
          />
        </section>
    } else {
      search = null;
    }

    return (
      <section>
        {search}
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
