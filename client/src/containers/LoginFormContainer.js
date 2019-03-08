import React, {Component} from 'react';
import {connect} from "react-redux";

import LoginForm from "../components/LoginForm";
import {login} from "../redux/actions/security";
import {Card, Message} from "semantic-ui-react";

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
        this.props.login(this.state);
    };

    render() {
        return (
            <Card>
                <Card.Content>
                    <LoginForm onSubmit={this.handleSubmit} onChange={this.handleChange}/>
                    {
                        this.props.flashMessage &&
                        (this.props.user ?
                                <Message
                                    success
                                    header="Bravo !"
                                    content={this.props.flashMessage}
                                />
                                :
                                <Message
                                    error
                                    header="Erreur"
                                    content={this.props.flashMessage}
                                />
                        )
                    }
                </Card.Content>
            </Card>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        flashMessage: state.security.flashMessage,
        token: state.security.loggedUser
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        login: (user) => dispatch(login(user, dispatch))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginFormContainer);
