import React from 'react'
import { useDispatch } from 'react-redux'
import { addNotification } from '../reducers/notificationReducer'
import userService from '../services/users'
import { Form, Button } from 'react-bootstrap'

const SignupForm = () => {
  const dispatch = useDispatch()

  // handle signup
  const handleSignup = async (event) => {
    event.preventDefault()
    const username = event.target.username.value
    const name = event.target.name.value
    const password = event.target.password.value
    event.target.username.value = ''
    event.target.name.value = ''
    event.target.password.value = ''

    try {
      await userService.signupUser({ username, name, password })
      dispatch(addNotification('Successfully signup! Try to log in now.', false, 5))
    } catch (exception) {
      dispatch(addNotification('Error: User name should be unique, longer than 3 charaters. Password should be longer than 3 charaters', true, 5))
    }
  }

  return (
    <Form onSubmit={handleSignup}>
      <h1>Signup for a new account</h1>
      <Form.Group>
        <Form.Label>name</Form.Label>
        <Form.Control
          type="text"
          name="name"
          data-cy="sname"
          required
        />
        <Form.Label>username</Form.Label>
        <Form.Control
          type="text"
          name="username"
          data-cy="susername"
          required
        />
        <Form.Label>password</Form.Label>
        <Form.Control
          type="password"
          name="password"
          data-cy="spassword"
          required
        />
        <Button variant="success" type="submit" data-cy="signup-button">
          signup
        </Button>
      </Form.Group>
    </Form>
  )
}

export default SignupForm