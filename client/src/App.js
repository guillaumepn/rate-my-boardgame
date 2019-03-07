import React, {Component} from 'react';
import './App.scss';
import LoginFormContainer from "./containers/LoginFormContainer";
import RegisterFormContainer from "./containers/RegisterFormContainer";
import jwt from "jsonwebtoken";
import GameListingContainer from "./containers/GameListingContainer";
import {connect} from "react-redux";

class App extends Component {

    render() {
        const userData = jwt.decode(localStorage.getItem('token'));
        const {username} = userData ? userData : '';

        return (
            <div className="App">
                {localStorage.getItem('token') === null
                    ? (
                        <div className="App__auth" style={{display: 'flex'}}>
                            <RegisterFormContainer/>
                            <LoginFormContainer/>
                        </div>
                    )
                    : (
                        <div>
                            Bonjour {username}
                        </div>
                    )
                }

                <GameListingContainer/>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        loggedUser: state.security.loggedUser,
    }
};


export default connect(mapStateToProps)(App);
