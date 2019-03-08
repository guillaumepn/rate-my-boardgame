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
import {logout, logUser} from "./redux/actions/security";
import UsersPage from "./containers/UsersPage";
import UserPage from "./containers/UserPage";

class App extends Component {
    constructor(props) {
        super(props);

        props.dispatch(gameListing(props.dispatch))
    }

    handleLogout = () => {
        this.props.dispatch(logout())
    };

    componentDidMount() {
        if (localStorage.getItem('token')) {
            this.props.dispatch(logUser(localStorage.getItem('token')));
        }
    }

    render() {
        const userData = jwt.decode(localStorage.getItem('token'));
        const {username} = userData ? userData : '';

        return (
            <Container className="App">
                <Menu secondary>
                    <Menu.Item as={Link} to="/" name="Rate Your Board Game"/>
                    <Menu.Menu position="right">
                        <Menu.Item as={Link} to="/users" name="Utilisateurs"/>

                        {
                            username && (
                                <>
                                    <Menu.Item as={Button} onClick={this.handleLogout} name="Déconnexion"/>
                                    <Menu.Item name={`Bonjour ${username}`}/>
                                </>
                            )
                        }
                    </Menu.Menu>
                </Menu>

                <Route path="/" exact component={HomePage}/>
                <Route path="/game/:id" component={GamePage}/>
                <Route path="/users" exact component={UsersPage}/>
                <Route path="/user/:id" component={UserPage}/>
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
