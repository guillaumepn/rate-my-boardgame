import React, {Component} from 'react';
import {connect} from "react-redux";
import {List} from "semantic-ui-react/dist/commonjs/elements/List";
import {Rating} from "semantic-ui-react";
import jwt from "jsonwebtoken";


class RatingGameContainer extends Component {
    state = {
        score: '',
        user: '',
        game:''
    };

    handleRating = (e, { rating }) => {
        const token = jwt.decode(localStorage.getItem('token'));
        const {id} = token ? token : '';
        this.setState({user: id, game: this.props.game._id, score: rating} , function() {
            console.log(this.state);

            fetch(`${process.env.REACT_APP_SERVER_URL}/ratings`, {
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
        });
    }

    render() {

        return (
            <Rating onRate={this.handleRating} icon='star' defaultRating={0} maxRating={10} />
        );
    }
};

export default connect()(RatingGameContainer);
