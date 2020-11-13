import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
    const [val, set] = useState('');
    const [phrase, setPhrase] = useState('example phrase');

    const createPhrase = () => {
        setPhrase(val);
        set('');
    };
    useEffect(() => {
        console.log('both val and phrase states have changed!')
    }, [val, phrase]);

    useEffect(() => {
        console.log(`typing '${val}'`);
    }, [val]);

    useEffect(() => {
        console.log(`the saved phrase: '${phrase}'`);
    }, [phrase]);

    return (
        <>
            <label>Favourite phrase:</label>
            <input
                value={val}
                placeholder={phrase}
                onChange={e => set(e.target.value)}
            />
            <button onClick={createPhrase}>send</button>
        </>
    )
}