import React, {Component} from 'react';
import {connect} from "react-redux";

class GamePage extends Component {

    render() {
        const game = this.props.game;

        return game ? (
            <div>
                {game.title}
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
