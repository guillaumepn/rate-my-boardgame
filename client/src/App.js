import React, {Component} from 'react';
import './App.css';
import LoginFormContainer from "./containers/LoginFormContainer";

class App extends Component {

    constructor(props) {
        super(props);

        this.state = { theme: 'dark' };
    }

    handleToggle = () => {
        const newTheme = this.state.theme === 'dark' ? 'light' : 'dark';
        this.setState({theme: newTheme});
    }

    render() {
        return (
            <div className="App">
                <LoginFormContainer/>
            </div>
        );
    }
}

export default App;
