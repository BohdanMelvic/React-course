import React, {useState, useEffect} from 'react';

import IngredientForm from './IngredientForm';
import Search from './Search';
import IngredientList from './IngredientList';

function Ingredients() {
  const [ userIngredients, setUserIngredients ] = useState([]);

  useEffect( () => {
    fetch('https://react-query-app.firebaseio.com/ingredients.json')
    .then( response => response.json())
    .then( responseData => {
      const loadedIngredients = [];
      for (const key in responseData) {
        loadedIngredients.push({
          id: key,
          title: responseData[key].title,
          amount: responseData[key].amount
        });
      }
      setUserIngredients(loadedIngredients);
    }).catch( error => {
      console.log(error);
    })
  }, []);

  useEffect(() => {
    console.log('RENDRING FROM useEffect', userIngredients);
  }, [userIngredients]);

  const addIngredientHandler = ingredint => {
    fetch('https://react-query-app.firebaseio.com/ingredients.json', {
      method: 'POST',
      body: JSON.stringify(ingredint),
      headers: { 'Content-Type': 'application/json' }
    }).then( response => {
      return response.json();
    }).then(responseData => {
      setUserIngredients(prevIngredients => [...prevIngredients, {id: responseData.name, ...ingredint}]);
    }).catch( error => {
      console.log(error);
    });
    
  } 

  const removeIngredientHandler = IngredientID => {
      const position = userIngredients.findIndex(x => x.id === IngredientID);
      const newArr = [...userIngredients];
      newArr.splice(position, 1);
      setUserIngredients(newArr);
      //setUserIngredients( (prevIngredients) => prevIngredients.filter(ing => ing.id !== IngredientID) );
  }

  return (
    <div className="App">
      <IngredientForm onAddIngredient={addIngredientHandler} />

      <section>
        <Search />
          <IngredientList ingredients={userIngredients} onRemoveItem={removeIngredientHandler} />
      </section>
    </div>
  );
}

export default Ingredients;
