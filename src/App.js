import React, { Component } from 'react';
import styled from 'styled-components';

import sampleData from "./test-data/sample-fishes";

import Nav from './components/Nav';
import Search from './components/Search';
import Items from './components/Items';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchOpen: false,
      data: []
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
    const {searchOpen, data} = this.state
    let search
    if (searchOpen) {
      search =
        <Search
          searchOpen={searchOpen}
          closeSearch={this.closeSearch}
        />
    } else {
      search = null
    }

    return (
      <section>
          {search}
          
        <Nav
          searchOpen={searchOpen}
          displaySearch={this.displaySearch}
        />

        {Object.keys(data).map((key) =>
          <Items key={key} details={this.state.data[key]}>
            {key}
          </Items>
        )}
      </section>
    );
  }
}

export default App;
