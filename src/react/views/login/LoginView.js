import React, { Component } from 'react';
import { connect } from 'react-redux';
import { postLogin } from '../../../redux/actions/login/loginAction';
import Loader from '../Loader';
import PropTypes from 'prop-types';

export class LoginView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      success: false,
      loading: false,
      error: {}
    };
    this.onChange = this.onChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    const { history, success, error } = nextProps;
    if (error) {
      this.setState({ loading: false });
      // console.log(error.data.message)
    }
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
    const updLogin = {
      username: this.state.username,
      password: this.state.password
    };
    this.setState({ loading: true });
    this.props.postLogin(updLogin);
  }

  render() {
    const { username, password } = this.state;

    return (
      <div>
        <nav className="navbar navbar-light bg-light">
          <span className="navbar-brand mb-0 h1">Login</span>
        </nav>
        <div className="wrapper fadeInDown">
          <h1 className="logo">Store Manager</h1>
          <h1>Login Please</h1>
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

              {/* this.props.error.data && this.props.error.data.message === 'Error: wrong password' ?
                (<p>{this.props.error.data.message}</p>) : null
              */}

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

              <input type="submit" className="fadeIn fourth" value="Log In" />
            </form>
            <div id="formFooter" />
          </div>
        </div>
      </div>
    );
  }
}

LoginView.propTypes = {
  login: PropTypes.object.isRequired,
  success: PropTypes.bool.isRequired,
  error: PropTypes.object.isRequired
};
export const mapStateToProps = state => {
  return {
    login: state.loginReducer.login,
    success: state.loginReducer.success,
    error: state.loginReducer.error
  };
};

export default connect(
  mapStateToProps,
  { postLogin }
)(LoginView);
