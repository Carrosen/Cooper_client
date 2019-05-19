import React from 'react';
import { Form, Button } from 'semantic-ui-react'

const SignupForm = (props) => {
  return (
    <Form>
    <form id="signup-form">
      <Form.Field>
        <div>
          <label >Email</label>
          <input id="email" onChange={props.inputChangeHandler}></input>
        </div>
      </Form.Field>

      <Form.Field>
        <div>
          <label>Password</label>
          <input id="password" onChange={props.inputChangeHandler}></input>
        </div>
      </Form.Field>

      <Form.Field>
        <div>
          <label>Password confirmation</label>
          <input id="password_confirmation" onChange={props.inputChangeHandler}></input>
        </div>
      </Form.Field>
      
      <Button color='teal' onClick={(e) => props.signupHandler(e)} id="submit">Sign up</Button>
    </form>
  </Form>
  )
}

export default SignupForm