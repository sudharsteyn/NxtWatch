import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'

import {
  BgContainer,
  LoginContainer,
  AppLogo,
  InputContainer,
  LabelText,
  CustomInput,
  CheckboxContainer,
  Checkbox,
  ShowPasswordLabel,
  LoginButton,
  ErrorMessage,
} from './styledComponents'

import NxtWatchContext from '../../context/NxtWatchContext'

class Login extends Component {
  state = {
    username: '',
    password: '',
    showPassword: false,
    errorMsg: '',
    showErrorMsg: false,
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onChangeShowPassword = event => {
    this.setState({showPassword: event.target.checked})
  }

  onLoginSuccess = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    history.replace('/')
  }

  onLoginFailure = errorMsg => {
    this.setState({showErrorMsg: true, errorMsg})
  }

  onSubmitLogin = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const apiUrl = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(apiUrl, options)
    const data = await response.json()
    if (response.ok) {
      this.onLoginSuccess(data.jwt_token)
    } else {
      this.onLoginFailure(data.error_msg)
    }
  }

  renderUsernameInput = darkTheme => {
    const {username} = this.state
    return (
      <InputContainer>
        <LabelText darkTheme={darkTheme} htmlFor="username">
          USERNAME
        </LabelText>
        <CustomInput
          darkTheme={darkTheme}
          onChange={this.onChangeUsername}
          value={username}
          id="username"
          type="text"
          placeholder="Username"
        />
      </InputContainer>
    )
  }

  renderPasswordInput = darkTheme => {
    const {password, showPassword} = this.state
    const passwordType = showPassword ? 'text' : 'password'
    return (
      <InputContainer>
        <LabelText darkTheme={darkTheme} htmlFor="password">
          PASSWORD
        </LabelText>
        <CustomInput
          darkTheme={darkTheme}
          onChange={this.onChangePassword}
          value={password}
          id="password"
          type={passwordType}
          placeholder="Password"
        />
        <CheckboxContainer>
          <Checkbox
            onChange={this.onChangeShowPassword}
            checked={showPassword}
            id="show-password"
            type="checkbox"
          />
          <ShowPasswordLabel darkTheme={darkTheme} htmlFor="show-password">
            Show Password
          </ShowPasswordLabel>
        </CheckboxContainer>
      </InputContainer>
    )
  }

  render() {
    const {errorMsg, showErrorMsg} = this.state
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {darkTheme} = value
          const logo = darkTheme
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
          console.log(darkTheme)
          return (
            <BgContainer darkTheme={darkTheme}>
              <LoginContainer
                darkTheme={darkTheme}
                onSubmit={this.onSubmitLogin}
              >
                <AppLogo src={logo} alt="website logo" />
                {this.renderUsernameInput(darkTheme)}
                {this.renderPasswordInput(darkTheme)}
                <LoginButton type="submit">Login</LoginButton>
                {showErrorMsg && <ErrorMessage>*{errorMsg}</ErrorMessage>}
              </LoginContainer>
            </BgContainer>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default Login
