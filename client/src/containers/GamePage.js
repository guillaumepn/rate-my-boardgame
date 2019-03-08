import React, {Component} from 'react';
import {connect} from "react-redux";
import styled from 'styled-components';

import {Card, Grid, Image, List, Message} from "semantic-ui-react";

const CustomList = styled(List)`
    width: 100%;
    display: flex !important;
    justify-content: flex-start;
    
    .item {
        width: 25%;
        margin-bottom: 2em;
        
        a {
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            width: 100%;
            display: block;
        }
    }
`;

class GamePage extends Component {

    render() {
        const game = this.props.game;

        return game ? (
            <Grid>
                <Grid.Row>
                    <Grid.Column width={6}>
                        <Card fluid>
                            {
                                game.image ?
                                    <Image fluid src={game.image}/> :
                                    <Message
                                        style={{textAlign: 'center', margin: 0}}
                                        header=':('
                                        content='Aucune image sélectionnée'
                                    />
                            }
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
                    </Grid.Column>
                    <Grid.Column width={10}>
                        <CustomList horizontal relaxed>
                            <List.Item>
                                <List.Content>
                                    <List.Header>Editeur</List.Header>
                                    {
                                        game.editor ?
                                            game.editor :
                                            `Aucune information`
                                    }
                                </List.Content>
                            </List.Item>
                            <List.Item>
                                <List.Content>
                                    <List.Header>Distributeur</List.Header>
                                    {
                                        game.publisher ?
                                            game.publisher :
                                            `Aucune information`
                                    }
                                </List.Content>
                            </List.Item>
                            <List.Item>
                                <List.Content>
                                    <List.Header>Joueurs</List.Header>
                                    {
                                        game.minPlayers && game.maxPlayers ?
                                            `Entre ${game.minPlayers} et ${game.maxPlayers}`
                                            : game.minPlayers ?
                                            `A partir de ${game.minPlayers}`
                                            : game.maxPlayers ?
                                                `Maximum de ${game.maxPlayers}`
                                                : `Aucune information`
                                    }
                                </List.Content>
                            </List.Item>
                            <List.Item>
                                <List.Content>
                                    <List.Header>Durée estimée</List.Header>
                                    {
                                        game.estimatedDuration ?
                                            `${game.estimatedDuration} minutes` :
                                            `Aucune information`
                                    }
                                </List.Content>
                            </List.Item>
                        </CustomList>
                        <CustomList horizontal relaxed>
                            <List.Item style={{width: '50%', marginRight: '1em'}}>
                                <List.Content>
                                    <List.Header>Site web</List.Header>
                                    {
                                        game.website ?
                                            <a href={game.website} target="_blank">{game.website}</a> :
                                            `Aucune information`
                                    }
                                </List.Content>
                            </List.Item>
                            <List.Item>
                                <List.Content>
                                    <List.Header>Âge</List.Header>
                                    {
                                        game.ageRange ?
                                            game.ageRange :
                                            `Aucune information`
                                    }
                                </List.Content>
                            </List.Item>
                            <List.Item>
                                <List.Content>
                                    <List.Header>Illustrateur</List.Header>
                                    {
                                        game.illustrator ?
                                            game.illustrator :
                                            `Aucune information`
                                    }
                                </List.Content>
                            </List.Item>
                        </CustomList>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
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
