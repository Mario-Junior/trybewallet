import React from 'react';
import ExpensesForm from '../components/ExpensesForm';
import ExpensesHeader from '../components/ExpensesHeader';
import Header from '../components/WalletHeader';

class Wallet extends React.Component {
  render() {
    return (
      <>
        <Header />
        <ExpensesForm />
        <ExpensesHeader />
      </>
    );
  }
}

export default Wallet;
