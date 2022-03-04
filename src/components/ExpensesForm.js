import React, { Component } from 'react';

class ExpensesForm extends Component {
  render() {
    return (
      <form>
        Valor:
        {' '}
        <input
          type="number"
          data-testid="value-input"
        />
        Descrição:
        {' '}
        <input
          type="text"
          data-testid="description-input"
        />
        <label htmlFor="currency">
          Moeda:
          {' '}
          <select
            data-testid="currency-input"
            id="currency"
          >
            <option>BRL</option>
            <option>EUR</option>
            <option>USD</option>
          </select>
        </label>
        <label htmlFor="method">
          Método de pagamento:
          {' '}
          <select
            data-testid="method-input"
            id="method"
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
            data-testid="tag-input"
            id="tag"
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
