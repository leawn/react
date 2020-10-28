import React from 'react';
import ReactDOM from 'react-dom';

function NumberList(props) {
    const numbers = props.numbers;
    const listItems = numbers.map(number =>
        <li key={number.toString()}>
            {number}
        </li>
    );
    return (
        <ul>{listItems}</ul>
    );
}

const numbers = [1, 2, 3, 5, 6546, 324];

ReactDOM.render(
    <NumberList numbers={numbers}/>,
    document.getElementById('root')
)