import React, { Component } from 'react';
import ExpensesFields from './ExpensesFields';

const headerFields = [
  'Descrição',
  'Tag',
  'Método de pagamento',
  'Valor',
  'Moeda',
  'Câmbio utilizado',
  'Valor convertido',
  'Moeda de conversão',
  'Editar/Excluir',
];

class ExpensesHeader extends Component {
  render() {
    return (
      <div className="container">
        <table>
          <thead>
            <tr>
              {headerFields.map((field) => (
                <th key={ field }>{field}</th>
              ))}
            </tr>
          </thead>
          <ExpensesFields />
        </table>
      </div>
    );
  }
}

export default ExpensesHeader;
