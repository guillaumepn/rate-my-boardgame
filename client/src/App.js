import React, {Component} from 'react';
import './App.scss';
import LoginFormContainer from "./containers/LoginFormContainer";
import RegisterFormContainer from "./containers/RegisterFormContainer";
import jwt from "jsonwebtoken";
import CreateGameFormContainer from "./containers/CreateGameFormContainer";

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {theme: 'dark'};
    }

    handleToggle = () => {
        const newTheme = this.state.theme === 'dark' ? 'light' : 'dark';
        this.setState({theme: newTheme});
    };

    render() {
        const userData = jwt.decode(localStorage.getItem('token'));
        const {username} = userData;

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
                            <CreateGameFormContainer/>
                            <LoginFormContainer/>
                        </div>
                    )
                }
            </div>
        );
    }
}

export default App;
