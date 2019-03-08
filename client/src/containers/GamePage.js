import React, {Component} from 'react';
import {connect} from "react-redux";
import {List} from "semantic-ui-react/dist/commonjs/elements/List";
import {Rating} from "semantic-ui-react";
import GameListingContainer from "./HomePage";
import RatingGameContainer from "./RatingGameContainer";

class GamePage extends Component {
    state = {
        rating: '',
    };

    handleRating = (value, ownProps) => {
        this.setState({rating: value});
        console.log(this.state);
        console.log(value);
        fetch(`${process.env.REACT_APP_SERVER_URL}/game/${ownProps.match.params.id}`, {
            method: 'PUT',
            mode: 'cors',
            body: JSON.stringify(this.state),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            },
        })
            .then(response => response.json())
            .catch(error => console.log(error));
    }

    render() {
        const game = this.props.game;

        return game ? (
            <div>
                {game.title}

                <RatingGameContainer game={game}/>
            </div>
        ) : (
            <div>Aucun jeu trouvé</div>
        );
    }
}


const mapStateToProps = (state, ownProps) => {
    return {
        game: state.gameListing.games.find((game) => game._id === ownProps.match.params.id),
    }
};

export default connect(mapStateToProps)(GamePage);
