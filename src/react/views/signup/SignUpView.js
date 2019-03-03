import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { postSignup } from '../../../redux/actions/signup/singupAction';

export class SignUpView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
      success: false
    };
    this.onChange = this.onChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    const { history, success } = nextProps;
    if (success === true) {
      this.setState({ success: true });
      history.push('/');
    }
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const updSignup = {
      username: this.state.username,
      password: this.state.password,
      email: this.state.email
    };
    this.props.postSignup(updSignup);
  }

  render() {
    const { username, password, email } = this.state;
    return (
      <div>
        <div className="wrapper fadeInDown">
          <div id="formContent">
            <form
              onSubmit={this.handleSubmit}
              id="loginForm2"
              className="form-horizontal"
              role="form"
            >
              <input
                type="text"
                id="login"
                className="fadeIn second"
                name="username"
                placeholder="username"
                value={username}
                onChange={this.onChange}
              />
              <input
                type="email"
                id="email"
                type="email"
                className="fadeIn second"
                name="email"
                placeholder="email"
                value={email}
                onChange={this.onChange}
              />
              <input
                type="password"
                id="password"
                className="fadeIn third"
                name="password"
                placeholder="password"
                onChange={this.onChange}
                value={password}
              />
              <input type="submit" className="fadeIn fourth" value="Sign Up" />
            </form>
            <div id="formFooter" />
          </div>
        </div>
      </div>
    );
  }
}

export const mapStateToProps = state => {
  return {
    signup: state.signupReducer.signup,
    success: state.signupReducer.success
  };
};

export default connect(
  mapStateToProps,
  { postSignup }
)(SignUpView);
