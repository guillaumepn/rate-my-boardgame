import React, {Component} from 'react';
import {connect} from "react-redux";
import styled from 'styled-components';

import {Card, Grid, Image, List, Message, Rating} from "semantic-ui-react";

import RatingGameContainer from "./RatingGameContainer";


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

        return this.props.game && this.props.game.ratings ? (
            <Grid>
                <Grid.Row>
                    <Grid.Column width={6}>
                        <Card fluid>
                            {
                                this.props.game.image ?
                                    <Image fluid src={this.props.game.image}/> :
                                    <Message
                                        style={{textAlign: 'center', margin: 0}}
                                        header=':('
                                        content='Aucune image sélectionnée'
                                    />
                            }
                            <Card.Content>
                                <Card.Header>
                                    {this.props.game.title}
                                </Card.Header>
                                <Card.Meta>
                                    {this.props.game.year}
                                </Card.Meta>
                                <Card.Description>
                                    {this.props.game.description}
                                </Card.Description>
                            </Card.Content>
                        </Card>
                        <RatingGameContainer game={this.props.game}/>
                    </Grid.Column>
                    <Grid.Column width={10}>
                        <CustomList horizontal relaxed>
                            <List.Item>
                                <List.Content>
                                    <List.Header>Editeur</List.Header>
                                    {
                                        this.props.game.editor ?
                                            this.props.game.editor :
                                            `Aucune information`
                                    }
                                </List.Content>
                            </List.Item>
                            <List.Item>
                                <List.Content>
                                    <List.Header>Distributeur</List.Header>
                                    {
                                        this.props.game.publisher ?
                                            this.props.game.publisher :
                                            `Aucune information`
                                    }
                                </List.Content>
                            </List.Item>
                            <List.Item>
                                <List.Content>
                                    <List.Header>Joueurs</List.Header>
                                    {
                                        this.props.game.minPlayers && this.props.game.maxPlayers ?
                                            `Entre ${this.props.game.minPlayers} et ${this.props.game.maxPlayers}`
                                            : this.props.game.minPlayers ?
                                            `A partir de ${this.props.game.minPlayers}`
                                            : this.props.game.maxPlayers ?
                                                `Maximum de ${this.props.game.maxPlayers}`
                                                : `Aucune information`
                                    }
                                </List.Content>
                            </List.Item>
                            <List.Item>
                                <List.Content>
                                    <List.Header>Durée estimée</List.Header>
                                    {
                                        this.props.game.estimatedDuration ?
                                            `${this.props.game.estimatedDuration} minutes` :
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
                                        this.props.game.website ?
                                            <a href={this.props.game.website} target="_blank" rel="noopener noreferrer">{this.props.game.website}</a> :
                                            `Aucune information`
                                    }
                                </List.Content>
                            </List.Item>
                            <List.Item>
                                <List.Content>
                                    <List.Header>Âge</List.Header>
                                    {
                                        this.props.game.ageRange ?
                                            this.props.game.ageRange :
                                            `Aucune information`
                                    }
                                </List.Content>
                            </List.Item>
                            <List.Item>
                                <List.Content>
                                    <List.Header>Illustrateur</List.Header>
                                    {
                                        this.props.game.illustrator ?
                                            this.props.game.illustrator :
                                            `Aucune information`
                                    }
                                </List.Content>
                            </List.Item>
                        </CustomList>
                        <List>
                            {
                                this.props.game.ratings.length > 0 &&
                                    this.props.game.ratings.map(rating => (
                                        <List.Item key={rating._id}>
                                            <List.Content>
                                                {rating.user} a noté ce jeu : <Rating defaultRating={rating.score} maxRating={10} disabled />
                                            </List.Content>
                                        </List.Item>
                                    ))
                            }
                        </List>
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
