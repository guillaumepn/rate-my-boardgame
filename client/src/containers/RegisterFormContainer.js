import React, {Component} from 'react';
import RegisterForm from "../components/RegisterForm";

class RegisterFormContainer extends Component {
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
        fetch(`${process.env.REACT_APP_SERVER_URL}/users/register`, {
            method: 'POST',
            mode: 'cors',
            body: JSON.stringify(this.state),
            headers: {
                'Content-Type': 'application/json'
            },
        })
            .then(response => response.json())
            .then(user => {
                console.log(user);
            })
            .catch(error => console.log(error));
    };

    render() {
        return (
            <RegisterForm onSubmit={this.handleSubmit} onChange={this.handleChange}/>
        );
    }
}

export default RegisterFormContainer;
