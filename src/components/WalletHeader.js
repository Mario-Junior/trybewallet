import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class WalletHeader extends Component {
  render() {
    const { user, expenses } = this.props;

    const sum = expenses.reduce((acc, { currency, exchangeRates, value }) => {
      const { ask, code } = exchangeRates[currency];
      const adjustedValue = Number(value);
      let exchange = Number(ask);

      const btcMultiplier = 1000;
      if (code === 'BTC') exchange *= btcMultiplier;

      return acc + adjustedValue * exchange;
    }, 0);
    return (
      <header>
        <h1>TRYBE Wallet</h1>
        <div className="user-info">
          <p>
            E-mail:
            {' '}
            <span data-testid="email-field">{user}</span>
          </p>
          <p>
            Despesa Total:
            {' '}
            <span data-testid="total-field">{sum.toFixed(2)}</span>
          </p>
          <p data-testid="header-currency-field"> BRL</p>
          <Link to="/">Logout</Link>
        </div>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user.email,
  expenses: state.wallet.expenses,
});

WalletHeader.propTypes = {
  user: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps)(WalletHeader);
