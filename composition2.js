import React from 'react';
import ReactDOM from 'react-dom';

function SplitPane(props) {
    return (
        <div className='SplitPane'>
            <div className='SplitPane-left'>
                {props.left}
            </div>
            <div className='SplitPane-right'>
                {props.right}
            </div>
        </div>
    )
}

function App() {
    return (
        <SplitPane
            left={
                <Contacts />
            }
            right={
                <Chat />
            } />
    );
}

function Contacts() {
    return (
        <div>
            Your contacts are here!
        </div>
    )
}

function Chat() {
    return (
        <div>
            Here we can chat!
        </div>
    )
}

ReactDOM.render(
)