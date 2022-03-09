import React from 'react';
import './wallet.css';
import ExpensesForm from '../components/ExpensesForm';
import ExpensesTable from '../components/ExpensesTable';
import WalletHeader from '../components/WalletHeader';

class Wallet extends React.Component {
  render() {
    return (
      <>
        <WalletHeader />
        <div className="expenses-container">
          <ExpensesForm />
          <ExpensesTable />
        </div>
      </>
    );
  }
}

export default Wallet;
