import React, { useState, useEffect, useCallback } from 'react';

const obj = {
    id1 : {
        title: 1,
        amount: 2
    },
    id2 : {
        title: 3,
        amount: 3
    }
}
import IngredientForm from './IngredientForm';
import IngredientList from "./IngredientList";
import Search from './Search';

const Ingredients = () => {
  const [ ingredients, setIngredients ] = useState([]);

  useEffect(() => {
      fetch('')
          .then(res => res.json())
          .then(resData => {
              setIngredients(prevIngredients => [...prevIngredients, { _id: resData._id, ...JSON.parse(resData)}]);
          })
          .catch(err => {
              console.log(err);
          });
  }, []);
    // really depends on database we r using

    const filteredIngredientsHandler = useCallback(filteredIngredients => {
        setIngredients(filteredIngredients);
    }, []);

  const addIngredientHandler = ingredient => {
      fetch('', {
          method: 'POST',
          body: JSON.stringify(ingredient),
          headers: { 'Content-Type': 'application/json' }
      })
          .then(res => res.json())
          .then(resData => {
              setIngredients(prevIngredients => [...prevIngredients, { _id: resData._id, ...ingredient}]);
          })
          .catch(err => {
              console.log(err);
          });
      // i would create some 'loading' state (true/false) where a component adds to the dom instantly
      // but within we add a loader that shows that its waiting for a response, when we get the promise back
      // with the response 201 then we remove that loader through changing state to false
  };
  const removeIngredientHandler = _id => {
      setIngredients(prevIngredients => [...prevIngredients.filter(i => i._id !== _id)]);
  }

  return (
    <div className="App">
      <IngredientForm onAddIngredient={addIngredientHandler} />

      <section>
        <Search onLoadIngredients={} />
        <IngredientList ingredients={ingredients} onRemoveItem={removeIngredientHandler}/>
      </section>
    </div>
  );
}

export default Ingredients;
