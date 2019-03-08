import React, {Component} from 'react';
import RegisterForm from "../components/RegisterForm";
import {connect} from "react-redux";
import {register} from "../redux/actions/register";
import {Card, Message} from "semantic-ui-react";

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
        console.log(this.props);
        this.props.register({username: this.state.username, password: this.state.password});
    };

    render() {
        return (
            <Card>
                <Card.Content>
                    <RegisterForm onSubmit={this.handleSubmit} onChange={this.handleChange}/>
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
        flashMessage: state.register.flashMessage,
        user: state.register.user,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        register: (user) => dispatch(register(user, dispatch))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(RegisterFormContainer);
