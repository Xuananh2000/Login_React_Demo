import React, {Component} from 'react';
import './Login.css';
import LoginForm from '../forms/loginForm.js';

class Login extends Component {
    render() {
        return (
            <div className="App">
                <LoginForm submit={this.handleFormSubmit}/>
            </div>
        );
    }

    handleFormSubmit = (formData) => {
        // console.log('FormData', formData)
        //karn.yong@mecallapi.com
        //mecallapi
        return fetch('https://www.mecallapi.com/api/login',
            {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(formData)
            })
            .then(data => data.json())
        if ('accessToken' in formData) {
            ("Success").then(() => {
                localStorage.setItem('accessToken', formData['accessToken']);
            });
        } else {
        }
    }
}

export default Login;