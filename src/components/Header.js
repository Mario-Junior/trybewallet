import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends Component {
  render() {
    const { user } = this.props;
    return (
      <header>
        <h4 data-testid="email-field">{user}</h4>
        <span data-testid="total-field">0</span>
        <span data-testid="header-currency-field"> BRL</span>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({ user: state.user.email });

Header.propTypes = {
  user: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(Header);
