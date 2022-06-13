import React from 'react'
import Coin from './Coin/Coin';
import styled from 'styled-components';
import NewsList from '../News/NewsList.js';

const Table = styled.table`
  
  display: inline-block;
  font-size: 30px;
`;




export default function CoinList(props)  {
  
  return (
    
      <Table className='table table-dark'>
      <thead>
        <tr>
          <th>Name</th>
          <th>Ticker</th>
          <th>Price</th>
          {props.showBalance ? <th>Balance</th> : null}
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {
          props.coinData.map( ({key, name, ticker, price, balance}) =>
          <Coin key={key}
                handleRefresh={props.handleRefresh}
                handleTransaction={props.handleTransaction}
                name={name}
                ticker={ticker}
                showBalance={props.showBalance}
                balance={balance}
                price={price} 
                tickerId={key}
                /> 
          // ..value = name={name}, ticker={ticker}, price={price}
          )
        }
      </tbody>
    </Table>
    
  )
  
}
