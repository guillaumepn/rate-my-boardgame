import React, {Component} from 'react';
import {connect} from "react-redux";

import LoginForm from "../components/LoginForm";
import {login} from "../redux/actions/security";

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
        return <LoginForm onSubmit={this.handleSubmit} onChange={this.handleChange} />;
    }
}

const mapStateToProps = (state) => {
    return {
        token: state.security.loggedUser
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        login: (user) => dispatch(login(user, dispatch))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginFormContainer);
