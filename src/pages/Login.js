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

  // Ref. Regular expression for email validation at:
  // https://pt.stackoverflow.com/questions/1386/express%C3%A3o-regular-para-valida%C3%A7%C3%A3o-de-e-mail
  enableEnterButton = () => {
    const { email, password } = this.state;
    const regex = /^[\w+.]+@\w+\.\w{2,}(?:\.\w{2})?$/i;
    const MIN_LENGTH = 6;

    return !regex.test(email) || password.length < MIN_LENGTH;
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
          disabled={ this.enableEnterButton() }
        >
          Entrar
        </button>
      </div>
    );
  }
}

export default Login;
