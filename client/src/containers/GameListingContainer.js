import React, {Component} from 'react';
import {gameListing} from "../redux/actions/game-listing";
import {connect} from "react-redux";

class GameListingContainer extends Component {

    constructor(props) {
        super(props);

        this.state = {
            games: []
        };
    }

    componentDidMount() {
        this.props.gameListing(this.state);
    }

    render() {
        return (
            <div>
                <h2>Liste des jeux</h2>
                {
                    this.props.games.length > 0 ?
                        this.props.games.map(game => (
                            <div key={game._id}>{game.title} - {game.year}</div>
                        ))
                        :
                        <p>Aucun jeu</p>
                }
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        games: state.gameListing.games,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        gameListing: () => dispatch(gameListing(dispatch))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(GameListingContainer);
