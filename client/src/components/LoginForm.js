import React from 'react';
import {Button, Form} from "semantic-ui-react";

const LoginForm = (props) => {
    return (
        <div>
            <h2>Connexion</h2>
            <Form onSubmit={props.onSubmit}>
                <Form.Field required>
                    <label htmlFor="username">Identifiant</label>
                    <input type="text" id="username"
                           onChange={(event) => props.onChange(event.currentTarget.value, 'username')}/>
                </Form.Field>
                <Form.Field required>
                    <label htmlFor="password">Mot de passe</label>
                    <input type="password" id="password"
                           onChange={(event) => props.onChange(event.currentTarget.value, 'password')}/>
                </Form.Field>
                <Button type="submit">Se connecter</Button>
            </Form>
        </div>
    );
};

export default LoginForm;
