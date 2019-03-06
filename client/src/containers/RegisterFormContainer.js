import React, {Component} from 'react';
import RegisterForm from "../components/RegisterForm";

class RegisterFormContainer extends Component {
    state = {
        username: '',
        password: '',
        flashMessage: '',
    };

    handleChange = (value, field) => {
        this.setState({
            [field]: value
        });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state);
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
                if (user) {
                    this.setState({flashMessage: "Votre compte a bien été enregistré"});
                }
            })
            .catch(error => {
                console.log(error)
                this.setState({flashMessage: "Ce username est déjà utilisé"});
                console.log(this.state);
            });
    };

    render() {
        return (
            <div>
                <p>{ this.state.flashMessage }</p>
                <RegisterForm onSubmit={this.handleSubmit} onChange={this.handleChange}/>
            </div>
        );
    }
}

export default RegisterFormContainer;
