import React, {Component} from 'react';
import {Button, Form} from "semantic-ui-react";

class LoginForm extends Component {
    render() {
        return (
            <div>
                <h2>Connexion</h2>
                <Form onSubmit={this.props.onSubmit}>
                    <Form.Field required>
                        <label htmlFor="username">Identifiant</label>
                        <input type="text" id="username" onChange={(event) => this.props.onChange(event.currentTarget.value, 'username')}/>
                    </Form.Field>
                    <Form.Field required>
                        <label htmlFor="password">Mot de passe</label>
                        <input type="password" id="password" onChange={(event) => this.props.onChange(event.currentTarget.value, 'password')}/>
                    </Form.Field>
                    <Button type="submit">Se connecter</Button>
                </Form>
            </div>
        );
    }
}

export default LoginForm;
