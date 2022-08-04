import React, {Component} from 'react';
import './loginForm.css';

class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            formErrors: {email: '', password: ''},
            emailValid: false,
            passwordValid: false,
            formValid: false
        }
    }

    handleUserInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({[name]: value},
            () => {
                this.validateField(name, value)
            });

    }

    validateField(fieldName, value) {
        let fieldValidationErrors = this.state.formErrors;
        let emailValid = this.state.emailValid;
        let passwordValid = this.state.passwordValid;

        switch (fieldName) {
            case 'email':
                emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
                fieldValidationErrors.email = emailValid ? '' : 'Email sai định dạng!';
                break;
            case 'password':
                passwordValid = value.length >= 8;
                fieldValidationErrors.password = passwordValid ? '' : 'Password phải trên 8 kí tự!';
                break;
            default:
                break;
        }
        this.setState({
            formErrors: fieldValidationErrors,
            emailValid: emailValid,
            passwordValid: passwordValid
        }, this.validateForm);
    }

    validateForm() {
        this.setState({formValid: this.state.emailValid && this.state.passwordValid});
    }

    Submit = () => {
        this.props.submit({username: this.state.email, password: this.state.password})
        console.log("test",this.state.emailValid && this.state.passwordValid)
    }

    render() {
        return (
            <form className="demoForm">
                <h2>Test đăng nhập React</h2>
                <div className={`form-group`}>
                    <label>Email</label>
                    <input
                        type="email"
                        required
                        className="form-control"
                        name="email"
                        placeholder="Email"
                        value={this.state.email}
                        onChange={this.handleUserInput}
                    />
                </div>
                <div>{this.state.formErrors.email}</div>
                <div className={`form-group`}>
                    <label>Password</label>
                    <input
                        type="password"
                        className="form-control"
                        name="password"
                        placeholder="Password"
                        value={this.state.password}
                        onChange={this.handleUserInput}
                    />
                </div>
                <div>{this.state.formErrors.password}</div>
                <button type="button" onSubmit={this.submit} onClick={this.Submit}>Đăng nhập</button>
            </form>
        )
    }
}

export default LoginForm;
