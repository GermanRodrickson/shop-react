import React, { Component } from "react";
import styled from "styled-components";

import background from '../img/positive.png';

const Image = styled.section`
  background-image: url(${background});
  background-position: center;
  margin-bottom: 30px;
  height: 500px;
  width: 100%;

`

class InitialImage extends Component {
  render() {
    return (
      <Image />
    );
  }
}

export default InitialImage;
