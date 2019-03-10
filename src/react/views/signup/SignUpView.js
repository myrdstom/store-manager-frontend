import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { postSignup } from '../../../redux/actions/signup/singupAction';
import PropTypes from 'prop-types';
import Loader from '../Loader';
import { toast } from 'react-toastify';


export class SignUpView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
      success: false,
      loading: false,
      error: {}
    };
    this.onChange = this.onChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    const { history, success} = nextProps;
    if (success === true) {
      this.setState({ success: true });
      history.push('/');
    }else{
      this.setState({ loading: false });
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
    this.setState({ loading: true });
    this.props.postSignup(updSignup);
  }

  render() {
    const { username, password, email } = this.state;
    return (
      <div>
        <nav className="navbar navbar-light bg-light">
          <span className="navbar-brand mb-0 h1">SignUp</span>
        </nav>
        <div className="wrapper fadeInDown">
        <h1 className="logo">Store Manager</h1>
          <h1>Register a User</h1>
          <div id="formContent">
            <form
              onSubmit={this.handleSubmit}
              id="loginForm2"
              className="form-horizontal"
              role="form"
            >
            {this.state.loading ? <Loader /> : null}
              <input
                type="text"
                required={true}
                id="login"
                className="fadeIn second"
                name="username"
                placeholder="username"
                value={username}
                onChange={this.onChange}
              />
              <input
                type="email"
                required={true}
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
                required={true}
                id="password"
                className="fadeIn third"
                name="password"
                placeholder="password"
                onChange={this.onChange}
                value={password}
              />
              <input type="submit" className="fadeIn fourth" value="Sign Up" />
              <Link to="/" className="fadeIn fourth" id="reset">
                Cancel
              </Link>
            </form>
            <div id="formFooter" />
          </div>
        </div>
      </div>
    );
  }
}

SignUpView.propTypes = {
  signup: PropTypes.object.isRequired,
  success: PropTypes.bool.isRequired,
  error: PropTypes.object.isRequired
};

export const mapStateToProps = state => {
  return {
    signup: state.signupReducer.signup,
    success: state.signupReducer.success,
    error: state.signupReducer.error
  };
};

export default connect(
  mapStateToProps,
  { postSignup }
)(SignUpView);
