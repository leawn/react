import React from 'react';
import ReactDOM from 'react-dom';

function formatName(user) {
    return `${user.firstName} ${user.lastName}`;
}

const user = {
    firstName: 'Harper',
    lastName: 'Perez',
    avatarUrl: 'https://i.ebayimg.com/images/g/w3EAAOSwrslaa6yZ/s-l300.jpg'
};

const element = getGreeting(user);

function getGreeting(user) {
    if(user) {
        return (
        <div>
            <h1>Hello, {formatName(user)}!</h1>
            <img alt={'batman image'} src={user.avatarUrl}/>
        </div>
        )
    }
    return <h1>Hello, Stranger.</h1>
}

ReactDOM.render(
    element,
    document.getElementById('root')
);