import React, { useState, useEffect } from 'react';

import Card from '../UI/Card';
import './Search.css';

const Search = React.memo(props => {
    const [ inputFilter, setInputFilter ] = useState('');

    useEffect(() => {
        fetch('')
            .then(res => res.json())
            .then(resData => {
                set(prevIngredients => [...prevIngredients, { _id: resData._id, ...JSON.parse(resData)}]);
                props.onLoadIngredients(loadedIngredients);
            })
            .catch(err => {
                console.log(err);
            });
    }, [inputFilter]);

  return (
    <section className="search">
      <Card>
        <div className="search-input">
          <label>Filter by Title</label>
          <input type="text" value={inputFilter} onChange={e => setInputFilter(e.target.value)}/>
        </div>
      </Card>
    </section>
  );
});

export default Search;
