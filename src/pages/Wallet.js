import React from 'react';
import ExpensesForm from '../components/ExpensesForm';
import ExpensesTable from '../components/ExpensesTable';
import Header from '../components/WalletHeader';

class Wallet extends React.Component {
  render() {
    return (
      <>
        <Header />
        <ExpensesForm />
        <ExpensesTable />
      </>
    );
  }
}

export default Wallet;
