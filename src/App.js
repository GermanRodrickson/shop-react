import React, { Component } from 'react';
import styled from 'styled-components';
import { TransitionGroup, CSSTransition } from 'react-transition-group';


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
      searchOpen: false,
      transitionName: 'fade'
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
    const { searchOpen, transitionName } = this.state
    let search
    if (searchOpen) {
      search =
          <Search
            searchOpen={searchOpen}
            transitionName={transitionName}
            closeSearch={this.closeSearch}
          />
    } else {
      search = null;
    }

    return (
      <section>
        {search}
        <Nav
          searchOpen={searchOpen}
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