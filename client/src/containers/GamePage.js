import React, {Component} from 'react';
import {connect} from "react-redux";
import {Card, Container, Header, Image, List} from "semantic-ui-react";

class GamePage extends Component {

    render() {
        const game = this.props.game;

        return game ? (
            <Container>
                <Card>
                    <Image fluid src={game.image} />
                    <Card.Content>
                        <Card.Header>
                            {game.title}
                        </Card.Header>
                        <Card.Meta>
                            {game.year}
                        </Card.Meta>
                        <Card.Description>
                            {game.description}
                        </Card.Description>
                    </Card.Content>
                </Card>
                <List>
                    <List.Item>
                        <List.Content>
                            <List.Header>{game.editor}</List.Header>
                            Editeur
                        </List.Content>
                    </List.Item>
                    <List.Item>
                        <List.Content>
                            <List.Header>{game.publisher}</List.Header>
                            Distributeur
                        </List.Content>
                    </List.Item>
                </List>
            </Container>
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
