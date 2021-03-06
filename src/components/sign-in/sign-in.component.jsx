import React from 'react';
import { FormInput } from '../form-input/form-input.component';
import { CustomButton } from '../custom-button/custom-button.component';
import { signInWithGoogle } from '../../firebase/firebae.utils';
import './sign-in.styles.scss';

export class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ email: '', password: '' });
  };
  handleChange = (e) => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form action="">
          <FormInput
            name="email"
            type="email"
            handleChange={this.handleChange}
            value={this.state.email}
            label="Email"
            required
          />
          <FormInput
            name="password"
            type="password"
            value={this.state.password}
            handleChange={this.handleChange}
            label="Password"
            required
          />
          <div className="buttons">
            <CustomButton type="submit" value="Submit Form">
              Sign in
            </CustomButton>
            <CustomButton
              onClick={signInWithGoogle}
              isGoogleSignIn
              value="Submit Form"
            >
              Sign in with Google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}
