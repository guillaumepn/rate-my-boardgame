import React, {Component} from 'react';
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {List} from "semantic-ui-react";


class UserPage extends Component {

    render() {
        let user = this.props.user;

        return user ? (
            <div>
                <h2>{user.username}</h2>
                <h3>Jeux en liste d'envie</h3>
                <List>
                    {
                        user.wanted_games && user.wanted_games.length > 0 ?
                            user.wanted_games.map(game => (
                                <List.Item
                                    key={game._id}
                                    as={Link}
                                    to={`/game/${game._id}`}
                                >
                                    <List.Content>
                                        <List.Header>
                                            {game.title}
                                        </List.Header>
                                        <List.Description>

                                        </List.Description>
                                    </List.Content>
                                </List.Item>
                            )) :
                            <div>Aucun jeu ajouté à la liste d'envie</div>
                    }
                </List>

                <h3>Jeux possédés par {user.username}</h3>
                <List>
                    {
                        user.owned_games && user.owned_games.length > 0 ?
                            user.owned_games.map(game => (
                                <List.Item
                                    key={game._id}
                                    as={Link}
                                    to={`/game/${game._id}`}
                                >
                                    <List.Content>
                                        <List.Header>
                                            {game.title}
                                        </List.Header>
                                        <List.Description>

                                        </List.Description>
                                    </List.Content>
                                </List.Item>
                            )) :
                            <div>Cet utilisateur n'a pas ajouté de jeu à cette liste</div>
                    }
                </List>
            </div>
        ) : (
            <div>Utilisateur introuvable</div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        user: state.userListing.users.find((user) => user._id === ownProps.match.params.id),
    }
};


export default connect(mapStateToProps)(UserPage);
