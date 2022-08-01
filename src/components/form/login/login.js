import React, { Component } from 'react';

class login_form extends Component {
    constructor (props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            formErrors: {email: '', password: ''},
            emailValid: false,
            passwordValid: false,
            error : false
        }
    }

    handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({[name]: value}, () => { this.validate(name, value) });
    }

    validate(name, value) {
        let ValidationErrors = this.state.formErrors;
        let emailValid = this.state.emailValid;
        let passwordValid = this.state.passwordValid;

        switch(name) {
            case 'email':
                emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
                ValidationErrors.email = emailValid ? '' : 'Email sai định dạng!';
                break;
            case 'password':
                passwordValid = value.length >= 8;
                ValidationErrors.password = passwordValid ? '': 'Password quá ngắn!';
                break;
            default:
                break;
        }
        this.setState({formErrors: ValidationErrors, emailValid: emailValid, passwordValid: passwordValid}, this.validateForm);
    }

    validateForm() {
        this.setState({formValid: this.state.emailValid && this.state.passwordValid});
    }

    render() {
        console.log(this.state.formErrors)
        return (
            <div className={login_form}>
                <div className="login-form">
                    <div className="login-form__container">
                        <div className="row">
                            <div className="col-12">
                                <form>
                                    <div className={`form-group`}>
                                        <label>Email address</label>
                                        <input
                                            type="email"
                                            required
                                            name="email"
                                            value={this.state.email}
                                            onChange={this.handleInput}
                                        />
                                    </div>
                                    <p>
                                        <div>
                                            {this.state.formErrors.email}
                                        </div>
                                    </p>
                                    <div className={`form-group`}>
                                        <label>Password</label>
                                        <input
                                            type="password"
                                            required
                                            name="password"
                                            value={this.state.password}
                                            onChange={this.handleInput}
                                        />
                                    </div>
                                    <p>
                                        <div>
                                            {this.state.formErrors.password}
                                        </div>
                                    </p>
                                    <button type="submit">Login</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default login_form;