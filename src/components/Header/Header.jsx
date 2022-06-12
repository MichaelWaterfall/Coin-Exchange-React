import React, { Component } from 'react';
import logo from './logo192.png';
import styled from 'styled-components';



  const Img = styled.img`
    height: 20vmin;
    
  `;
  
  const Header = styled.header`
    background-color: #1b222f;
    min-height: 20vh;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    font-size: 48px;
    color: white;
  `;

  const H1 = styled.h1 `
    font-size: 4rem;
  `;
 

export default class CoinHeader extends Component {
  render() {
    return (
        <Header>
            < Img src={logo} alt="https://pngtree.com/so/The'>The png from pngtree.com"  />
            <H1>
                Moon Exchange    
            </H1>
        </Header>
    );
    
  }
}
