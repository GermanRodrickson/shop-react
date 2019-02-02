import React, { Component } from "react";
import styled from "styled-components";
import { TransitionGroup, CSSTransition } from "react-transition-group";


import search from '../img/search-icon.svg';
import cancel from '../img/cancel.svg';
import "../transitions.css";

const appearDuration = 300;
const transitionName = `example`;


const Wrapper = styled.section`
  background: rgba(72, 72, 72, 0.85);
  position: fixed;
  z-index: 2;
  width: 100%;
  height: 100vh;
  
  &.${transitionName}-appear {
    opacity: 0.01;
  }

  &.${transitionName}-appear-active {
    opacity: 1;
    transition: opacity ${appearDuration}ms ease-out;
  }
`;

const Cross = styled.img`
  position: absolute;
  top: 30px;
  right: 30px;
  width: 25px;
  height: 25px;
  cursor: pointer;
`;

const SearchWrapper = styled.div`
  /* right: 50%;
  top: 40%;
  width: 450px;
  position: absolute;
  margin-right: -225px; */
  display: flex;
  justify-content: center;
  margin-top: 20em;
`

const Input = styled.input`
  width: 400px;
  background: none;
  border: none;
  border-bottom: 1px solid white;
  padding-bottom: 10px;
  vertical-align: bottom;
  color: #fff;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: #fff;
  }
`;

const Button = styled.img`
  vertical-align: bottom;
  display: inline-block;
  width: 30px;
  height: 30px;
  border-bottom: 1px solid white;
  padding-bottom: 10px;
  cursor: pointer;
`;


class Search extends Component {
  render() {
    return (
      <CSSTransition
        transitionName={transitionName}
        in={this.props.searchOpen}
        appear={this.props.searchOpe === true}
        timeout={appearDuration}
      >
        <Wrapper>
          <Cross src={cancel} onClick={() => this.props.closeSearch()} />
          <SearchWrapper>
            <Input type="text" placeholder="Search here" />
            <Button src={search} />
          </SearchWrapper>
        </Wrapper>
      </CSSTransition>
    );
  }
}


export default Search;
