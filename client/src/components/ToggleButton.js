import React, {Component} from 'react';

class ToggleButton extends Component {
    render() {
        const props = this.props;

        return (
            <button onClick={props.onClick}>Current theme : {props.theme}</button>
        );
    }
}

export default ToggleButton;
