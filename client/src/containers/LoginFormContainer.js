import React, {Component} from 'react';
import LoginForm from "../components/LoginForm";

class LoginFormContainer extends Component {
    state = {
        username: '',
        password: '',
    };

    handleChange = (value, field) => {
        this.setState({
            [field]: value
        });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state);
        fetch(`${process.env.REACT_APP_SERVER_URL}/login_check`, {
            method: "POST",
            mode: 'cors',
            body: JSON.stringify(this.state),
            headers: {
                'Content-Type': 'application/json'
            },
        })
            .then(response => response.json())
            .then(data => localStorage.setItem('token', data.token))
            .catch(error => console.log(error));
    };

    render() {
        return <LoginForm onSubmit={this.handleSubmit} onChange={this.handleChange} />;
    }
}

export default LoginFormContainer;
