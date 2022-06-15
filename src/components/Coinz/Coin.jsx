import React from 'react'
//import "./Coin.css";
import PropTypes from 'prop-types';
import styled from 'styled-components';
//import { toHaveAccessibleDescription } from '@testing-library/jest-dom/dist/matchers';


const Td = styled.td`
    border: 1px solid #cccccc;
    width: 14vh;
    
`;

const TdControls = styled(Td)`
    width: 120vw;
`;

const TdName = styled(Td)`
    width: 50vw;
    font-size: 30px
`;
const Button = styled.button`
    width: 200px;
    margin: 3px 5px 0;
    font-size: 30px
`;

export default function Coin(props) {  

  const handleRefresh = (event) => {
        event.preventDefault();

        props.handleRefresh(props.tickerId);
  }

  const handleBuy = (event) => {
    event.preventDefault();

    props.handleTransaction(true, props.tickerId);
  }

  const handleSell = (event) => {
    event.preventDefault();

    props.handleTransaction(false, props.tickerId);
  }
  
  return (
    <tr>
        <TdName>{props.name}</TdName>
        <Td>{props.ticker}</Td>
        <Td>${props.price}</Td>
        {props.showBalance ? <Td>{props.balance}</Td> : '-'}
        <TdControls>
            <form action="#" method="POST"> 
              <Button className="btn btn-info" onClick={handleRefresh}>
              Refresh
              </Button>
              <Button className="btn btn-warning" onClick={handleBuy}>
              Buy
              </Button>
              <Button className="btn btn-danger" onClick={handleSell}>
              Sell
              </Button>
            </form>
        </TdControls>
    </tr>
    
  ); 

}

Coin.protoTypes = {
    name: PropTypes.string.isRequired,
    ticker: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
}