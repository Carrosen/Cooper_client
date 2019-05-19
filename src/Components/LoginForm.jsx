import React from 'react'
import { Form, Button } from 'semantic-ui-react'

const LoginForm = (props) => {
  return (
    <Form>
      <form id="login-form">
        <Form.Field>
          <div>
            <label>Email</label>
            <input id="email" onChange={props.inputChangeHandler}></input>
          </div>
        </Form.Field>

        <Form.Field>
          <div>
            <label>Password</label>
            <input id="password" onChange={props.inputChangeHandler}></input>
          </div>
        </Form.Field>

        <Button color='teal' onClick={(e) => props.loginHandler(e)} id="submit">Log in</Button>
      </form>
    </Form>
  )
}

export default LoginForm