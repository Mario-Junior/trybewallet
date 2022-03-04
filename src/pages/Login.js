import React from 'react';

class Login extends React.Component {
  state = {
    email: '',
    password: '',
  };

  handleInputChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { email, password } = this.state;
    return (
      <div>
        <input
          type="email"
          name="email"
          data-testid="email-input"
          placeholder="email@domain.com"
          value={ email }
          onChange={ this.handleInputChange }
        />
        <input
          type="password"
          name="password"
          data-testid="password-input"
          placeholder="insira sua senha"
          value={ password }
          onChange={ this.handleInputChange }
        />
        <button
          type="button"
          disabled
        >
          Entrar
        </button>
      </div>
    )
  }
}

export default Login;
