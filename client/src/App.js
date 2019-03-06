import React, {Component} from 'react';
import './App.css';
import LoginFormContainer from "./containers/LoginFormContainer";
import RegisterFormContainer from "./containers/RegisterFormContainer";

class App extends Component {

    constructor(props) {
        super(props);

        this.state = { theme: 'dark' };
    }

    handleToggle = () => {
        const newTheme = this.state.theme === 'dark' ? 'light' : 'dark';
        this.setState({theme: newTheme});
    };

    render() {
        return (
            <div className="App">
                <div style={{display: 'flex'}}>
                    <RegisterFormContainer/>
                    <LoginFormContainer/>
                </div>
            </div>
        );
    }
}

export default App;
