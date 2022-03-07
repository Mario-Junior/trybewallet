import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class ExpensesFields extends Component {
  render() {
    const { expenses } = this.props;
    return (
      <tbody>
        {expenses.map(
          ({ id, description, tag, method, value, currency, exchangeRates }) => {
            const { ask, code, name } = exchangeRates[currency];
            const btcMultiplier = 1000;

            const exchangeName = name.split('/')[0];
            let exchangeRate = Number(ask);
            if (code === 'BTC') exchangeRate *= btcMultiplier;
            const convertedValue = Number(value * exchangeRate);

            return (
              <tr key={ id }>
                <td>{description}</td>
                <td>{tag}</td>
                <td>{method}</td>
                <td>{Number(value).toFixed(2)}</td>
                <td>{exchangeName}</td>
                <td>{exchangeRate.toFixed(2)}</td>
                <td>{convertedValue.toFixed(2)}</td>
                <td>Real</td>
                <td>
                  <button
                    type="button"
                    data-testid="delete-btn"
                  >
                    Excluir
                  </button>
                </td>
              </tr>
            );
          },
        )}
      </tbody>
    );
  }
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

ExpensesFields.propTypes = {
  expenses: PropTypes.shape.isRequired,
};

export default connect(mapStateToProps, null)(ExpensesFields);
