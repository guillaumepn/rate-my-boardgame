import React, {Component} from 'react';
import {connect} from "react-redux";
import {List} from "semantic-ui-react";
import {Link} from "react-router-dom";

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
                <List
                    selection
                    verticalAlign="middle"
                    style={{
                        margin: '1em 0'
                    }}
                >
                    {
                        this.props.games.length > 0 ?
                            this.props.games.map(game => (
                                <List.Item
                                    key={game._id}
                                    as={Link}
                                    to={`/game/${game._id}`}
                                    style={{
                                        padding: '1em'
                                    }}
                                >
                                    <List.Content floated="left">
                                        <List.Header>{game.title}</List.Header>
                                        <List.Description>{game.description}</List.Description>
                                        {game.year}
                                    </List.Content>
                                    <List.Content style={{textAlign: 'right'}} floated="right">
                                        {game.editor && <List.Header>Créé par {game.editor}</List.Header>}
                                        {game.publisher && <List.Description>Publié par {game.publisher}</List.Description>}
                                    </List.Content>
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
