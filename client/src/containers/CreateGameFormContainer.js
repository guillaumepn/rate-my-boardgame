import React, {Component} from 'react';
import CreateGameForm from "../components/CreateGameForm";


class CreateGameFormContainer extends Component {
    state = {
    };

    handleChange = (value, field) => {
        this.setState({
            [field]: value
        });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state);
        console.log('Bearer ' + localStorage.getItem('token'));
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

export default CreateGameFormContainer;
