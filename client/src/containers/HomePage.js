import React, {Component} from 'react';
import {connect} from "react-redux";

import GameListingContainer from "./GameListingContainer";
import LoginFormContainer from "./LoginFormContainer";
import RegisterFormContainer from "./RegisterFormContainer";
import {Card} from "semantic-ui-react";
import CreateGameFormContainer from "./CreateGameFormContainer";


class HomePage extends Component {

    render() {
        return (
            <div>
                {localStorage.getItem('token') === null && (
                    <Card.Group centered>
                        <RegisterFormContainer/>
                        <LoginFormContainer/>
                    </Card.Group>
                )}

                <GameListingContainer/>

                {
                    localStorage.getItem('token') !== null &&
                    <CreateGameFormContainer/>
                }
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        loggedUser: state.security.loggedUser,
    }
};

export default connect(mapStateToProps)(HomePage);
