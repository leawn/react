import React from 'react';
import ReactDOM from 'react-dom';

class Welcome extends React.Component {
    render() {
        return <h1>Hello, {this.props.name}</h1>;
    }
}

class App extends React.Component {
    render() {
        return (
            <div>
                <Welcome name={'Sara'} />
                <Welcome name={'Peter'} />
                <Welcome name={'Leo'} />
            </div>
        )
    }
}

//const element = <Welcome name={'Sarah'} />;

ReactDOM.render(
    App,
    document.getElementById('root')
)