import React, {Component} from 'react';
import './App.scss';
import {connect} from "react-redux";
import {Button, Container, Menu} from 'semantic-ui-react'
import {Link, Route, withRouter} from "react-router-dom";
import jwt from "jsonwebtoken";


import './App.scss';
import HomePage from "./containers/HomePage";
import GamePage from "./containers/GamePage";
import {gameListing} from "./redux/actions/game-listing";
import {logout} from "./redux/actions/security";

class App extends Component {
    constructor(props) {
        super(props);

        props.dispatch(gameListing(props.dispatch))
    }

    handleLogout = () => {
        this.props.dispatch(logout())
    }

    render() {
        const userData = jwt.decode(localStorage.getItem('token'));
        const {username} = userData ? userData : '';

        return (
            <Container className="App">
                <Menu secondary>
                    <Menu.Item as={Link} to="/" name="home"/>
                    <Menu.Menu position="right">
                        {
                            username && (
                                <>
                                    <Menu.Item as={Button} onClick={this.handleLogout} name="Déconnexion" />
                                    <Menu.Item name={`Bonjour ${username}`} />
                                </>
                            )
                        }
                    </Menu.Menu>
                </Menu>

                <Route path="/" exact component={HomePage}/>
                <Route path="/game/:id" component={GamePage}/>
            </Container>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        loggedUser: state.security.loggedUser,
    }
};


export default withRouter(connect(mapStateToProps)(App));
