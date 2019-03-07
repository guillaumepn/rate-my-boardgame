import React, {Component} from 'react';
import {Button, Form} from "semantic-ui-react";

class RegisterForm extends Component {
    render() {
        return (
            <div>
                <h2>Inscription</h2>
                <Form onSubmit={this.props.onSubmit}>
                    <Form.Field>
                        <label htmlFor="username__register">Identifiant</label>
                        <input type="text" id="username__register"
                               onChange={(event) => this.props.onChange(event.currentTarget.value, 'username')}/>
                    </Form.Field>
                    <Form.Field>
                        <label htmlFor="password__register">Mot de passe</label>
                        <input type="password" id="password__register"
                               onChange={(event) => this.props.onChange(event.currentTarget.value, 'password')}/>
                    </Form.Field>
                    <Button type="submit">S'inscrire</Button>
                </Form>
            </div>
        );
    }
}

export default RegisterForm;
