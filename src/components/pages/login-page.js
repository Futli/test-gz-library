import React, { useEffect } from 'react'
import { reduxForm } from 'redux-form'
import LoginForm from '../login-form'
import { useNavigate } from "react-router-dom";



const LoginPage = ({ isAuth, error, onLogin }) => {
    let navigate = useNavigate();    
    
    useEffect(() => {  
    
    error == null && isAuth != null && navigate("/") }, [isAuth])


   const handleLogin = (formData) => {
        onLogin(formData)        
    }
    
    return <div className='text-center mt-5'>

        <p style={{ color: "red" }}>{error}</p>
        {
            <LoginReduxForm onSubmit={handleLogin} />}
    </div>
}

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm)


export default LoginPage;