import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { postLogin } from '../../../redux/actions/login/loginAction';

export class LoginView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      success: false
    };
    this.onChange = this.onChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    const { history, success } = nextProps;
    if(success=== true) {
        this.setState({success:true})
        history.push('/products');
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
    this.props.postLogin(updLogin);
  }

  render() {
    const { username, password } = this.state;
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
                type="text"
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

export const mapStateToProps = state => {
  return {
  login: state.loginReducer.login,
  success: state.loginReducer.success
  }
  
};

export default connect(
  mapStateToProps,
  { postLogin }
)(LoginView);
