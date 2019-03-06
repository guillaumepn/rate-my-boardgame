import React, {Component} from 'react';
import RegisterForm from "../components/RegisterForm";
import {connect} from "react-redux";
import {register} from "../redux/actions/register";

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
        this.props.register({username: this.state.username, password: this.state.password});
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

const mapStateToProps = (state) => {
    return {
        flashMessage: state.register.flashMessage,
        user: state.register.user,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        register: (user) => dispatch(register(user))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(RegisterFormContainer);
