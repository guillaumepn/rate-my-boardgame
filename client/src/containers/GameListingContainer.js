import React, {Component} from 'react';
import {connect} from "react-redux";
import {List} from "semantic-ui-react";
import {Link} from "react-router-dom";
import { Rating } from 'semantic-ui-react';

class GameListingContainer extends Component {

    constructor(props) {
        super(props);

        this.state = {
            games: []
        };
    }

    render() {
        return (
            <div>
                <h2>Liste des jeux</h2>
                <List selection verticalAlign="middle">
                    {
                        this.props.games.length > 0 ?
                            this.props.games.map(game => (
                                <List.Item key={game._id} as={Link} to={`/game/${game._id}`}>
                                    <List.Content>
                                        <List.Header>{game.title}</List.Header>
                                        <List.Description>{game.title}</List.Description>
                                        {game.year}
                                    </List.Content>
                                    <Rating icon='star' defaultRating={0} maxRating={10} />
                                </List.Item>
                            ))
                            :
                            <List.Item>Aucun jeu</List.Item>
                    }
                </List>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        games: state.gameListing.games,
    }
};

export default connect(mapStateToProps)(GameListingContainer);
