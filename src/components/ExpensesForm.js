import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addExpense as addExpenseAction, editExpense as editExpenseAction,
  fetchCurrenciesThunk } from '../actions';
import apiRequest from '../services/api';

const INITIAL_STATE = {
  value: '',
  description: '',
  currency: 'USD',
  method: 'Dinheiro',
  tag: 'Alimentação',
  exchangeRates: {},
};

class ExpensesForm extends Component {
  state = {
    ...INITIAL_STATE,
  }

  componentDidMount() {
    const { fetchCurrencies } = this.props;
    fetchCurrencies();
  }

  // Ref.: How to "Handle infinite loop in componentDidUpdate", at
  // https://stackoverflow.com/questions/56818044/handle-infinite-loop-in-componentdidupdate
  componentDidUpdate(nextProps) {
    const { expenses, expenseId, isEditing } = this.props;

    if (isEditing && isEditing !== nextProps.isEditing) {
      const { value, description, currency, method, tag } = expenses[expenseId];
      this.setState({ value, description, currency, method, tag });
    }
  }

  handleInputChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  handleButtonAddExpense = async () => {
    const { addExpense } = this.props;
    const exchangeRates = await apiRequest();

    this.setState({ exchangeRates });
    addExpense(this.state);

    this.setState(INITIAL_STATE);
  }

  conditionalButtonRender = () => {
    const { value, description, currency, method, tag } = this.state;
    const { expenseId: id, isEditing } = this.props;
    const expense = { id, value, description, currency, method, tag };

    return isEditing ? (
      <button
        type="button"
        onClick={ () => this.handleButtonEditExpense(expense) }
      >
        Editar despesa
      </button>
    ) : (
      <button
        type="button"
        onClick={ this.handleButtonAddExpense }
      >
        Adicionar despesa
      </button>
    );
  }

  handleButtonEditExpense(expense) {
    const { editExpense } = this.props;

    editExpense(expense);
    this.setState(INITIAL_STATE);
  }

  render() {
    const { value, description, currency, method, tag } = this.state;
    const { currencies } = this.props;
    return (
      <form>
        Valor:
        {' '}
        <input
          type="number"
          name="value"
          data-testid="value-input"
          value={ value }
          onChange={ this.handleInputChange }
        />
        Descrição:
        {' '}
        <input
          type="text"
          name="description"
          data-testid="description-input"
          value={ description }
          onChange={ this.handleInputChange }
        />
        <label htmlFor="currency">
          Moeda
          {' '}
          <select
            id="currency"
            name="currency"
            data-testid="currency-input"
            value={ currency }
            onChange={ this.handleInputChange }
          >
            {currencies.map((curr) => (
              <option key={ curr } value={ curr }>
                {curr}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="method">
          Método de pagamento:
          {' '}
          <select
            id="method"
            name="method"
            data-testid="method-input"
            value={ method }
            onChange={ this.handleInputChange }
          >
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão de crédito">Cartão de crédito</option>
            <option value="Cartão de débito">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Tag:
          {' '}
          <select
            id="tag"
            name="tag"
            data-testid="tag-input"
            value={ tag }
            onChange={ this.handleInputChange }
          >
            <option value="Alimentação">Alimentação</option>
            <option value="Lazer">Lazer</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Transporte">Transporte</option>
            <option value="Saúde">Saúde</option>
          </select>
        </label>
        { this.conditionalButtonRender() }
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
  expenses: state.wallet.expenses,
  expenseId: state.wallet.expenseId,
  isEditing: state.wallet.isEditing,
});

const mapDispatchToProps = (dispatch) => ({
  addExpense: (expense) => dispatch(addExpenseAction(expense)),
  editExpense: (expense) => dispatch(editExpenseAction(expense)),
  fetchCurrencies: () => dispatch(fetchCurrenciesThunk()),
});

ExpensesForm.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.string),
  expenses: PropTypes.arrayOf(PropTypes.shape),
  fetchCurrencies: PropTypes.func,
  addExpense: PropTypes.func,
  editExpense: PropTypes.func,
  expenseId: PropTypes.number,
  isEditing: PropTypes.bool,
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(ExpensesForm);
