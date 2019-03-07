import React, {Component} from 'react';
import {Accordion, Button, Form, Icon} from "semantic-ui-react";

class LoginForm extends Component {

    state = {
        activeIndex: null
    };

    handleClick = (e, titleProps) => {
        const { index } = titleProps
        const { activeIndex } = this.state
        const newIndex = activeIndex === index ? -1 : index

        this.setState({ activeIndex: newIndex })
    }

    render() {
        const { activeIndex } = this.state

        return (
            <div>
                <h2>Ajouter un jeu</h2>
                <Form onSubmit={this.props.onSubmit}>
                    <Form.Field>
                        <label htmlFor="title">Titre</label>
                        <input type="text" id="title"
                               onChange={(event) => this.props.onChange(event.currentTarget.value, 'title')}/>
                    </Form.Field>
                    <Form.Field>
                        <label htmlFor="description">Description</label>
                        <textarea id="description"
                                  onChange={(event) => this.props.onChange(event.currentTarget.value, 'description')}
                                  rows="5" cols="33">
                        </textarea>
                    </Form.Field>
                    <Accordion>
                        <Accordion.Title style={{display: 'flex', alignItems: 'center'}} active={activeIndex === 0} index={0} onClick={this.handleClick}>
                            Champs optionnels
                            <Icon name='dropdown' />
                        </Accordion.Title>
                        <Accordion.Content active={activeIndex === 0}>
                            <Form.Group widths={2}>
                                <Form.Field>
                                    <label htmlFor="illustrator">Illustrateur</label>
                                    <input type="text" id="illustrator"
                                           onChange={(event) => this.props.onChange(event.currentTarget.value, 'illustrator')}/>
                                </Form.Field>
                                <Form.Field>
                                    <label htmlFor="editor">Editeur</label>
                                    <input type="text" id="editor"
                                           onChange={(event) => this.props.onChange(event.currentTarget.value, 'editor')}/>
                                </Form.Field>
                            </Form.Group>
                            <Form.Group widths={2}>
                                <Form.Field>
                                    <label htmlFor="publisher">Distributeur</label>
                                    <input type="text" id="publisher"
                                           onChange={(event) => this.props.onChange(event.currentTarget.value, 'publisher')}/>
                                </Form.Field>
                                <Form.Field>
                                    <label htmlFor="year">Année de création</label>
                                    <input type="number" id="year"
                                           onChange={(event) => this.props.onChange(event.currentTarget.value, 'year')}/>
                                </Form.Field>
                            </Form.Group>
                            <Form.Group widths={2}>
                                <Form.Field>
                                    <label htmlFor="minPlayers">Joueurs minimum</label>
                                    <input type="number" id="minPlayers"
                                           onChange={(event) => this.props.onChange(event.currentTarget.value, 'minPlayers')}/>
                                </Form.Field>
                                <Form.Field>
                                    <label htmlFor="maxPlayers">Joueurs maximum</label>
                                    <input type="number" id="maxPlayers"
                                           onChange={(event) => this.props.onChange(event.currentTarget.value, 'maxPlayers')}/>
                                </Form.Field>
                            </Form.Group>
                            <Form.Group widths={2}>
                                <Form.Field>
                                    <label htmlFor="ageRange">Age</label>
                                    <input placeholder="à partir de 12 ans" type="text" id="ageRange"
                                           onChange={(event) => this.props.onChange(event.currentTarget.value, 'ageRange')}/>
                                </Form.Field>
                                <Form.Field>
                                    <label htmlFor="estimatedDuration">Temps de jeu moyen (min)</label>
                                    <input type="number" id="estimatedDuration"
                                           onChange={(event) => this.props.onChange(event.currentTarget.value, 'estimatedDuration')}/>
                                </Form.Field>
                            </Form.Group>
                            <Form.Group widths={2}>
                                <Form.Field>
                                    <label htmlFor="theme">Thèmes</label>
                                    <input type="text" placeholder="séparer les différents éléments par des virgules"
                                           id="theme"
                                           onChange={(event) => this.props.onChange(event.currentTarget.value, 'theme')}/>
                                </Form.Field>
                                <Form.Field>
                                    <label htmlFor="mechanics">Mécaniques</label>
                                    <input type="text" placeholder="séparer les différents éléments par des virgules"
                                           id="mechanics"
                                           onChange={(event) => this.props.onChange(event.currentTarget.value, 'mechanics')}/>
                                </Form.Field>
                            </Form.Group>
                            <Form.Group widths={2}>
                                <Form.Field>
                                    <label htmlFor="website">Website</label>
                                    <input placeholder="https://example.com" type="url" id="website"
                                           onChange={(event) => this.props.onChange(event.currentTarget.value, 'website')}/>
                                </Form.Field>
                                <Form.Field>
                                    <label htmlFor="image">Url de l'image</label>
                                    <input placeholder="https://example.com" type="url" id="image"
                                           onChange={(event) => this.props.onChange(event.currentTarget.value, 'image')}/>
                                </Form.Field>
                            </Form.Group>
                        </Accordion.Content>
                    </Accordion>

                    <Button>Valider</Button>
                </Form>
            </div>
        );
    }
}

export default LoginForm;
