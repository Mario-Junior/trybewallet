import React, { Component } from 'react';

class ExpensesForm extends Component {
  state = {
    value: '',
    description: '',
    currency: 'USD',
    payMethod: 'Dinheiro',
    tag: 'Alimentação',
  }

  handleInputChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  render() {
    const { value, description, currency, payMethod, tag } = this.state;
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
            name="currency"
            data-testid="currency-input"
            value={ currency }
            onChange={ this.handleInputChange }
          >
            <option>USD</option>
            <option>BTC</option>
            <option>EUR</option>
          </select>
        </label>
        <label htmlFor="payMethod">
          Método de pagamento:
          {' '}
          <select
            name="payMethod"
            data-testid="method-input"
            value={ payMethod }
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
        <button
          type="button"
        >
          Adicionar despesa
        </button>
      </form>
    );
  }
}

export default ExpensesForm;
