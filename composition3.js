import React from 'react';
import ReactDOM from 'react-dom';

function Dialog(props) {
    return (
        <FancyBorder color='blue'>
            <h1 className='Dialog-title'>
                {props.title}
            </h1>
            <p className='Dialog-message'>
                {props.message}
            </p>
            {props.children}
        </FancyBorder>
    );
}

class SignUpDialog extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSignUp = this.handleSignUp.bind(this);
        this.state = {login: ''};
    }

    render() {
        return (
            <Dialog title='Mars something there' message='How are you'>
                <input/>
            </Dialog>
        );
    }

}

function WelcomeDialog() {
    return (
        <Dialog title='Welcome' message='Hello there!' />
    );
}

ReactDOM.render()