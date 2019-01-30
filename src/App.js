import React, { Component } from 'react';
import styled from 'styled-components';
import { TransitionGroup, CSSTransition } from "react-transition-group";

import sampleData from './test-data/sample-fishes';
import "./transitions.css";

import Nav from './components/Nav';
import Search from './components/Search';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchOpen: false,
      data: {}
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

  componentDidMount() {
    this.setState({
      data: sampleData
    })
  }

  render() {
    const {searchOpen} = this.state
    let search
    if (searchOpen) {
      search =
        <CSSTransition
          in={searchOpen}
          appear={true}
          timeout={300}
          classNames='fade'
        >
        <Search
          searchOpen={searchOpen}
          closeSearch={this.closeSearch}
          />
        </CSSTransition>
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
        {JSON.stringify(this.state.data)}
      </section>
    );
  }
}

export default App;
