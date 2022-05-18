import React, { Component } from 'react'
//import "./Coin.css";
import PropTypes from 'prop-types';
import styled from 'styled-components';
//import { toHaveAccessibleDescription } from '@testing-library/jest-dom/dist/matchers';


const Td = styled.td`
    border: 1px solid #cccccc;
    width: 25vh
    
`;

export default class Coin extends Component {
  


  

  handleClick = (event) => {
        event.preventDefault();
        this.props.handleRefresh(this.props.ticker);
        
    
  }
  render() {
    return (
      <tr>
          <Td>{this.props.name}</Td>
          <Td>{this.props.ticker}</Td>
          <Td>${this.props.price}</Td>
          {this.props.showBalance ? <Td>{this.props.balance}</Td> : null}
          <Td>
              <form action="#" method="POST"> 
                <button onClick={this.handleClick}>Refresh</button>
              </form>
          </Td>
      </tr>
    ); 
  }
}

Coin.protoTypes = {
    name: PropTypes.string.isRequired,
    ticker: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
}