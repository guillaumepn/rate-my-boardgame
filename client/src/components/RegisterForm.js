import React from 'react';
import {Button, Form} from "semantic-ui-react";

const RegisterForm = (props) => {
    return (
        <div>
            <h2>Inscription</h2>
            <Form onSubmit={props.onSubmit}>
                <Form.Field required>
                    <label htmlFor="username__register">Identifiant</label>
                    <input type="text" id="username__register"
                           onChange={(event) => props.onChange(event.currentTarget.value, 'username')}/>
                </Form.Field>
                <Form.Field required>
                    <label htmlFor="password__register">Mot de passe</label>
                    <input type="password" id="password__register"
                           onChange={(event) => props.onChange(event.currentTarget.value, 'password')}/>
                </Form.Field>
                <Button type="submit">S'inscrire</Button>
            </Form>
        </div>
    );
};

export default RegisterForm;
