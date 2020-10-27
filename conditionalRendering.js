import React from 'react';
import ReactDOM from 'react-dom';

class UserGreeting extends React.Component {
    render() {
        return (
            <h1>Welcome back!</h1>
        );
    }
}

class GuestGreeting extends React.Component {
    render() {
        return (
            <h1>Please sign up.</h1>
        );
    }
}

function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;
    if(isLoggedIn) {
        return <UserGreeting />;
    }
    return <GuestGreeting />;
}

ReactDOM.render(
    <Greeting isLoggedIn={false} />,
    document.getElementById('root')
)

//Ended on 'ELEMENT VARIABLES'