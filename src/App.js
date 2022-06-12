import React, {useState, useEffect} from 'react';
import AccountBalance from './components/AccountBalance/AccountBalance.jsx';
import CoinList from './components/CoinList/CoinList';
import styled from 'styled-components';
import Header from './components/Header/Header';
import NewsList from './components/News/NewsList';
import axios from 'axios';
//import {ScrollBox, ScrollAxes, FastTrack} from 'react-scroll-box';

//import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootswatch/dist/solar/bootstrap.min.css';  

import '@fortawesome/fontawesome-free/js/all';



const Div = styled.div`
    text-align: center;
    background-color: #282c34;
    color: white;
`;

const News = styled.div`
    font-size: 50px;
    
`;

const COIN_COUNT = 10;
const formatPrice = price =>parseFloat(Number(price).toFixed(4));

function App() {

  const [balance, setBalance] = useState(10000);
  const [showBalance, setShowBalance] = useState(false);
  const [coinData, setCoinData] = useState([]);

  const componentDidMount = async () => {
    const response = await axios.get('https://api.coinpaprika.com/v1/coins');
    const coinIds = response.data.slice(0, COIN_COUNT).map(coin => coin.id);
    const tickerUrl = 'https://api.coinpaprika.com/v1/tickers/';
    const promises = coinIds.map(id => axios.get(tickerUrl + id));
    const coinData = await Promise.all(promises);
    const coinPriceData = coinData.map(function(response) {
      const coin = response.data;
      return {
        key: coin.id,
        name: coin.name,
        ticker: coin.symbol,
        balance: 0,
        price: formatPrice(coin.quotes.USD.price),
    };
  })
  // Retrieve the prices
  setCoinData(coinPriceData);
  }  

  useEffect(function() {
    if (coinData.length === 0 ) {
      componentDidMount();
    }
  });

 const handleMoney = () => {
    setBalance( oldBalance => oldBalance + 12000);
  }

  const handleBalanceVisibilityChange = () => {
    setShowBalance(oldValue => !oldValue);
  }

  

  const handleTransaction = (isBuy, valueChangeId) => {
    var balanceChange = isBuy ? 1 : -1;
    const newCoinData = coinData.map( function(values) {
      let newValues = {...values};
      if ( valueChangeId === values.key) {
        if( isBuy ) {
          if ( balance < newValues.price * balanceChange ) {
            alert('Insufficient funds for this purchase.');
            return values;
          }
        } else {
          if ( values.balance + balanceChange < 0) {
            alert('Insufficient holdings for this sell order.');
            return values
          } 
        } // Transaction is possible.
        newValues.balance += balanceChange;
        setBalance( oldBalance => oldBalance - balanceChange * newValues.price);
      }
      return newValues;
    })
    setCoinData(newCoinData);
  }

  const handleRefresh = async (valueChangeId) => {
    const tickerUrl = `https://api.coinpaprika.com/v1/tickers/${valueChangeId}`;
    const response = await axios.get(tickerUrl);
    const newPrice = formatPrice(response.data.quotes.USD.price);
    const newCoinData = coinData.map( function( values )  {
      let newValues = { ...values };
      if ( valueChangeId === values.key) {
        newValues.price = newPrice;
      }
      return newValues;

    }); 
    setCoinData(newCoinData);
  }
  
  return (
    <Div className="App">
      <Header /> 
      <AccountBalance 
        amount= {balance}
        showBalance={showBalance}
        handleMoney={handleMoney} 
        handleBalanceVisibilityChange={handleBalanceVisibilityChange} />
      <CoinList 
        coinData={coinData} 
        showBalance={showBalance}
        handleTransaction={handleTransaction}
        handleRefresh={handleRefresh} />
      <News> Crypto News</News>
      <NewsList />
    </Div>
    
  );

  
}

export default App;
