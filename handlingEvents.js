import React from 'react';
import ReactDOM from 'react-dom';

class Toggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isToggleOn: true};
        // This binding is necessary to make 'this' work in a callback. When handleClick is called by the onClick event;
        // the 'this' is not the component, but the button that was clicked;
        // We have two solution here. The first one is using the bind, the second to use an ARROW FUNCTION;
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(state => ({
            isToggleOn: !state.isToggleOn
        }));
    }

    render() {
        return (
            <button onClick={this.handleClick}>
                {this.state.isToggleOn ? 'ON': 'OFF'}
            </button>
        );
    }
}

ReactDOM.render(
    <Toggle />,
    document.getElementById('root')
)