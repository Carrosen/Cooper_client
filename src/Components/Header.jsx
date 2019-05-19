import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import LoginForm from './LoginForm'
import SignupForm from './SignupForm'
import { authenticate, register, logout } from '../Modules/Auth'
import { Button, Grid, Segment, Icon, Menu, Container, Form, Divider, Header } from 'semantic-ui-react'


class Nav extends Component {  
  constructor(props) {
    super(props)
    this.state = {
      renderLoginForm: false,
      authenticated: false,
      email: '',
      password: '',
      message: '',
      renderSignupForm: false,
      password_confirmaton: ''
    }
  }

  componentDidUpdate(){
    setTimeout(() => this.setState({message:''}), 10000);
  }
  
  onChange(event) {
    this.setState({
      [event.target.id]: event.target.value,
    })
  }
  
  async onLogin(e) {
    e.preventDefault()
    let resp = await authenticate(this.state.email, this.state.password)
    if (resp.authenticated === true) {
      this.setState({ authenticated: true, renderLoginForm: false })
    } else {
      this.setState({ message: resp.message, renderLoginForm: false })
    }
  }

  async onSignup(e) {
    e.preventDefault();
    let resp = await register(this.state.email, this.state.password, this.state.password_confirmation)
    if (resp.authenticated === true) {
      this.setState({ authenticated: true, renderSignupForm: false });
    } else {
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
    let loginButton;
    let user;
    let signupButton;
    let userForm

    if (this.state.authenticated === true) {
      user = JSON.parse(sessionStorage.getItem('credentials')).uid
      signupButton = (
        <p>Hi {user}</p>
      )
      loginButton =(
        <Button color='teal' id="logout" onClick={this.onLogout.bind(this)}>Log out</Button>
      )
    } else {
      signupButton = (
        <>
          <Button 
            color='teal' 
            id="signup" 
            style={{ margin: '0.5em' }} 
            onClick={() => 
              this.setState({ renderSignupForm: true, renderLoginForm: false })
            }>
              Sign up
          </Button>  
        </>
      )

      loginButton = (
        <>
          <Button 
            color='teal' 
            id="login" 
            onClick={() => 
              this.setState({ renderLoginForm: true, renderSignupForm: false })
            }>
              Login
          </Button>          
        </>
      )
    }

    if(this.state.renderLoginForm === true) {
      userForm = (
        <>
          <Container>
            <Grid centered columns={2}>
              <Grid.Column>
                <LoginForm 
                  loginHandler={this.onLogin.bind(this)}
                  inputChangeHandler={this.onChange.bind(this)}
                />
              </Grid.Column>
            </Grid>
          </Container>

          <Divider horizontal>
            <Header as="h1">
              <Icon 
                link name="angle up" 
                color='teal' 
                size='massive' 
                onClick={() => this.setState({ renderLoginForm: false })}
              />
            </Header>
          </Divider>
        </>
      )
    }

    if(this.state.renderSignupForm === true) {
      userForm = (
        <>
          <Container>
            <Grid centered columns={2}>
              <Grid.Column>
                <SignupForm 
                  signupHandler={this.onSignup.bind(this)}
                  inputChangeHandler={this.onChange.bind(this)}
                />
              </Grid.Column>
            </Grid>
          </Container>
            
          <Divider horizontal>
            <Header as="h1">
              <Icon 
                link name="angle up" 
                color='teal' 
                size='massive' 
                onClick={() => this.setState({ renderSignupForm: false })}
              />
            </Header>
          </Divider>
        </>
      )
    }


    return (
      <>
      <Segment inverted color='teal'>

        <Menu inverted secondary>
          <Menu.Item as='a'>
            <NavLink
              id="cooperlink"
              onClick={() => this.setState({ renderLoginForm: false, renderSignupForm: false })} 
              activeStyle={{fontWeight: 'bold'}} 
              to='/cooper'>
              Cooper Calculator
            </NavLink>
          </Menu.Item>
          
          <Menu.Item as='a'>
            <NavLink
              id="bmilink"
              onClick={() => this.setState({ renderLoginForm: false, renderSignupForm: false })} 
              activeStyle={{fontWeight: 'bold'}} 
              to='/bmi'>
              BMI Calculator
            </NavLink>
          </Menu.Item>

          <Menu.Item as='a'>  
            <NavLink
              id="runlink"
              onClick={() => this.setState({ renderLoginForm: false, renderSignupForm: false })} 
              activeStyle={{fontWeight: 'bold'}} 
              to='/history'>
              Your Runs
            </NavLink>
          </Menu.Item>


          <Menu.Menu position='right'>
            <Menu.Item>{signupButton}</Menu.Item>
            <Menu.Item>{loginButton}</Menu.Item>
          </Menu.Menu>

        </Menu>

      </Segment>
      <Grid centered columns={2}>
        <Grid.Column textAlign='center'>
          {this.state.message}
        </Grid.Column>
      </Grid>

      {userForm}

      </>
    );
  }
};

export default Nav