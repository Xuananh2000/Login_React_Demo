import React, { Component } from 'react';
import login_form from "../../../../components/form/login/login";


class login_page extends Component {
    render() {
        return (
            <div className={login_page} >
                <div className="login-page">
                    <login_form />
                </div>
            </div>
        );
    }
}

export default login_page;