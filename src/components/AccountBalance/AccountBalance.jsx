import React, { Component } from 'react';
import PropTypes from 'prop-types';
//import './AccountBalance.css';
import styled from 'styled-components';

const Section = styled.section`
    border: 1px solid red;
    font-size: 2rem;
    text-align: center;
    margin-bottom: 0 auto 2rem;
    line-height: 3rem;
    
`;

const Balance = styled.div`
  min-width: 250px;
  margin: 0.5rem 0 0 2.5rem;
  font-size: 1.5rem;
  vertical-align: middle;
  test-align: left;
`;

const Button = styled.button`
  margin: 0 8px;
`; 

const BalanceToggleButton = styled(Button)`
  width: 150px;
`;

var formatter = Intl.NumberFormat('en-us', {
  style: 'currency',
  currency: 'USD'
});

export default function AccountBalance(props) {
    
  const buttonText = props.showBalance ? 'Hide Balance' : 'Show Balance';
    let content = '\u00A0';
    if (props.showBalance) {
      content = <>{ formatter.format(props.amount) }</>
    }
    const buttonClass = (props.showBalance) ? 'btn btn-warning' : 'btn btn-info';
    return (
      <>
      <Balance>{content}</Balance>
      <Section>
        {content}
        <BalanceToggleButton onClick={props.handleBalanceVisibilityChange}
        className={buttonClass}
        >{buttonText}
        </BalanceToggleButton>
        <Button className="btn btn-success">
                
          <i className="fa-solid fa-user-astronaut"></i>
        </Button>
      </Section>
    </>
    );

}

AccountBalance.propTypes = {
    amount: PropTypes.number.isRequired
}
