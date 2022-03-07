import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

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
        <h4 data-testid="email-field">{user}</h4>
        <span data-testid="total-field">{sum.toFixed(2)}</span>
        <span data-testid="header-currency-field"> BRL</span>
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
