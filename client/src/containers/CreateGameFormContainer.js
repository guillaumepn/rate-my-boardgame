import React, {Component} from 'react';
import CreateGameForm from "../components/CreateGameForm";
import jwt from "jsonwebtoken";
import {connect} from "react-redux";

class CreateGameFormContainer extends Component {
    state = {
        creator: '',
    };

    handleChange = (value, field) => {
        this.setState({
            [field]: value,
        });
        let themes = this.state.theme;
        let mechanics = this.state.mechanics;
        if (field === 'theme')
            themes = value.split(',');
        if (field === 'mechanics')
            mechanics = value.split(',');
        this.setState({theme: themes, mechanics: mechanics});
        const token = jwt.decode(localStorage.getItem('token'));
        const {id} = token ? token : '';
        this.setState({creator: id});
    };

    handleSubmit = (event) => {
        event.preventDefault();
         console.log(this.state);
        fetch(`${process.env.REACT_APP_SERVER_URL}/games`, {
            method: 'POST',
            mode: 'cors',
            body: JSON.stringify(this.state),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            },
        })
            .then(response => response.json())
            .catch(error => console.log(error));
    };

    render() {
        return <CreateGameForm onSubmit={this.handleSubmit} onChange={this.handleChange} />;
    }
}


export default connect()(CreateGameFormContainer);
