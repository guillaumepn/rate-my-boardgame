import React, {Component} from 'react';
import {connect} from "react-redux";
import {Header} from "semantic-ui-react";

class GamePage extends Component {

    render() {
        const game = this.props.game;

        return game ? (
            <div>
                <Header as="h2">
                    {game.title}
                    <Header.Subheader>
                        {game.description}
                    </Header.Subheader>
                </Header>

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
