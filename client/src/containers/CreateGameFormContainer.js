import React, {Component} from 'react';
import CreateGameForm from "../components/CreateGameForm";
import jwt from "jsonwebtoken";
import {connect} from "react-redux";
import {addGame} from "../redux/actions/game-listing";

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
        this.props.addGame(this.state);
    };

    render() {
        return <CreateGameForm onSubmit={this.handleSubmit} onChange={this.handleChange}/>;
    }
}

const mapStateToProps = (state) => {
    return {
        games: state.gameListing.games,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        addGame: (data) => dispatch(addGame(data, dispatch))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateGameFormContainer);
