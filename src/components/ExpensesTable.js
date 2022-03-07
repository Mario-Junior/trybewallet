import React, { Component } from 'react';
import { connect } from 'react-redux';

class ExpensesTable extends Component {
  render() {
    return (
      <table />
    );
  }
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps, null)(ExpensesTable);
