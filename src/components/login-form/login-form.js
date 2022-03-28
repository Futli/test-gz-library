import React from "react"
import './login-form.css'
import { Field } from 'redux-form'
import { Button } from "react-bootstrap"

const LoginForm = (props) => {
        return (
                <>
                        <h1>Login</h1>
                        <form onSubmit={props.handleSubmit} className="login-form">
                                <Field className="form-item" name="userName" component="input" placeholder='Login' />
                                <Field className="form-item" name="password" component="input" placeholder='Password' />
                                <Button className="form-item" type="submit" variant="primary"> Login</Button>


                        </form>
                </>)
}

export default LoginForm