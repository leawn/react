import React from 'react';
import ReactDOM from 'react-dom';

class Avatar extends React.Component {
    render() {
        return (
            <img className='Avatar'
                src={this.props.avatarUrl}
                alt={this.props.name}
            />);
    }
}

class UserInfo extends React.Component {
    render() {
        return (
            <div className='UserInfo'>
                <Avatar user={this.props.user} />
                <div className='UserInfo-name'>
                    {this.props.name}
                </div>
            </div>
        )
    }
}

class Comment extends React.Component {
    render() {
        return (
            <div className='Comment'>
                <UserInfo user={this.props.name} />
                <div className='Comment-text'>
                    {this.props.text}
                </div>
                <div className={'Comment-date'}>
                </div>
            </div>
        );
    }
}

ReactDOM.render(
    Comment,
    document.getElementById('root')
)