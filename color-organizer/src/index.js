import React, { createContext } from 'react';
import colors from './data/color-data.json';
import ReactDOM, {render} from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ColorProvider from './color-hooks';

render(
    <ColorProvider value={{ colors }}>
        <App />
    </ColorProvider>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
