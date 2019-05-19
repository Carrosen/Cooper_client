import React, { Component } from 'react';
import DisplayCooperResult from './Components/DisplayCooperResult'
import InputFields from './Components/InputFields.jsx'
import LoginForm from './Components/LoginForm'
import SignupForm from './Components/SignupForm'
import { authenticate, register, logout } from './Modules/Auth'
import DisplayPerformanceData from './Components/DisplayPerformanceData'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      distance: '',
      gender: 'female',
      age: '',
      renderLoginForm: false,
      authenticated: false,
      email: '',
      password: '',
      message: '',
      entrySaved: false,
      renderIndex: false,
      renderSignupForm: false,
      password_confirmaton: ''
    }
  }

  onChange(event) {
    this.setState({
      [event.target.id]: event.target.value,
      entrySaved: false
    })
  }

  entryHandler() {
    this.setState({ entrySaved: true, updateIndex: true })
  }

  indexUpdated() {
    this.setState({ updateIndex: false })
  }

  async onLogin(e) {
    e.preventDefault()
    let resp = await authenticate(this.state.email, this.state.password)
    if (resp.authenticated === true) {
      this.setState({ authenticated: true })
    } else {
      this.setState({ message: resp.message, renderLoginForm: false })
    }
  }

  async onSignup(e) {
    e.preventDefault();
    let resp = await register(this.state.email, this.state.password, this.state.password_confirmation)
    if (resp.authenticated === true) {
      this.setState({ authenticated: true });
    } else {
      debugger
      this.setState({ message: resp.message, renderSignupForm: false })
    }
  }

  async onLogout(e) {
    e.preventDefault();
    let resp = await logout()
    if (resp.authenticated === false) {
      this.setState({ authenticated: false });
    } else {
      this.setState({ message: resp.message })
    }
  }


  render() {
    let renderLogin;
    let user;
    let performanceDataIndex;
    let renderSignup;
    let renderLogout

    if (this.state.authenticated === true) {
      user = JSON.parse(sessionStorage.getItem('credentials')).uid
      renderLogin = (
        <p>Hi {user}</p>
      )
      renderLogout =(
        <>
        <button id="logout" onClick={this.onLogout.bind(this)}>Log out</button>
        {/* logoutHandler=

        {(e) => props.logoutHandler(e)} */}
        </>
      )

      if (this.state.renderIndex === true) {
        performanceDataIndex = (
          <>
            <DisplayPerformanceData
              updateIndex={this.state.updateIndex}
              indexUpdated={this.indexUpdated.bind(this)}
            />
            <button onClick={() => this.setState({ renderIndex: false })}>Hide past entries</button>
          </>
        )
      } else {
        performanceDataIndex = (
          <button id="show-index" onClick={() => this.setState({ renderIndex: true })}>Show past entries</button>
        )
      }
    } else {
      if (this.state.renderLoginForm === true) {
        renderLogin = (
          <>
            <LoginForm 
              loginHandler={this.onLogin.bind(this)}
              inputChangeHandler={this.onChange.bind(this)}
            />
          </>
        )
      } else {
        renderLogin = (
          <>
            <button id="login" onClick={() => this.setState({ renderLoginForm: true})}>Login</button>
            <p>{this.state.message}</p>
          </>
        )
      }

      
      if (this.state.renderSignupForm === true) {
        renderSignup = (
          <>
            <SignupForm 
              signupHandler={this.onSignup.bind(this)}
              inputChangeHandler={this.onChange.bind(this)}
            />
          </>
        )
      } else {
        renderSignup = (
          <>
            <button id="signup" onClick={() => this.setState({ renderSignupForm: true})}>Sign up</button>
            <p>{this.state.message}</p>
          </>
        )
      }



    }
  

    return (
      <>
        <InputFields
          inputChangeHandler={this.onChange.bind(this)}
        />
        
        <DisplayCooperResult
          distance={this.state.distance}
          gender={this.state.gender}
          age={this.state.age}
          authenticated={this.state.authenticated}
          entrySaved={this.state.entrySaved}
          entryHandler={this.entryHandler.bind(this)}
        />
        {performanceDataIndex}
        {renderLogin}
        {renderSignup}
        {renderLogout}
      </>
    );
  }
}

export default App