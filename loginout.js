import React from 'react';
import ReactDOM from 'react-dom';

class LoginControl extends React.Component {
    constructor(props) {
        super(props);
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
        this.state = {isLoggedIn: false};
    }

    handleLoginClick() {
        this.setState({isLoggedIn: true});
    }

    handleLogoutClick() {
        this.setState({isLoggedIn: false});
    }

    render() {
        const isLoggedIn = this.state.isLoggedIn;
        let button;
        /*if(isLoggedIn) {
            button = <LogoutButton onClick={this.handleLogoutClick()} />;
        } else {
            button = <LoginButton onClick={this.handleLoginClick()}/>;
        }*/


        return (
            <div>
                {isLoggedIn
                    ? <LogoutButton onClick={this.handleLogoutClick()} />
                    : <LoginButton onClick={this.handleLoginClick()} />
                }
            </div>
        )
    }
}

class LoginButton extends React.Component {
    render() {
        return (
            <button onClick={this.props.onClick}>
                Login
            </button>
        )
    }
}

class LogoutButton extends React.Component {
    render() {
        return (
            <button onClick={this.props.onClick}>
                Logout
            </button>
        )
    }
}

ReactDOM.render(
    <LoginControl />,
    document.getElementById('root')
)