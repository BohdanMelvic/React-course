import React, { useReducer, useState, useEffect, useCallback} from 'react';

import IngredientForm from './IngredientForm';
import Search from './Search';
import IngredientList from './IngredientList';
import ErrorModal from '../UI/ErrorModal';

const ingredientReducer = (currentIngredients, action) => {
  switch (action.type) {
    case 'SET':
      return action.ingredients;
    case 'ADD':
      return [...currentIngredients, action.ingredient];
    case 'DELETE':
      return currentIngredients.filter(ing => ing.id !== action.id);
    default:
      throw new Error('Ops, Error!');
  }
};

function Ingredients() {
  const [userIngredients, dispatch] = useReducer(ingredientReducer, []);

  //const [ userIngredients, setUserIngredients ] = useState([]);
  const [ isLoading, setIsLoading ] = useState(false);
  const [error, setError ] = useState();

  useEffect( () => {
    setIsLoading(true);
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
      setIsLoading(false);
      dispatch({type: 'SET', ingredients: loadedIngredients});
    }).catch( error => {
      setError(error.message);
      console.log(error);
    })
  }, []);

  useEffect(() => {
    console.log('RENDRING FROM useEffect', userIngredients);
  }, [userIngredients]);

  const addIngredientHandler = ingredint => {
    setIsLoading(true);
    fetch('https://react-query-app.firebaseio.com/ingredients.json', {
      method: 'POST',
      body: JSON.stringify(ingredint),
      headers: { 'Content-Type': 'application/json' }
    }).then( response => {
      setIsLoading(false);
      return response.json();
    }).then(responseData => {
      //setUserIngredients(prevIngredients => [...prevIngredients, {id: responseData.name, ...ingredint}]);
      dispatch({type: 'ADD', ingredient: {id: responseData.name, ...ingredint}});
    }).catch( error => {
      setError(error.message);
      console.log(error);
    });
  } 

  const removeIngredientHandler = IngredientID => {
    setIsLoading(true);
      fetch(`https://react-query-app.firebaseio.com/ingredients/${IngredientID}.json`, {
        method: 'DELETE'
      }).then( response => {
        setIsLoading(false);
        //setUserIngredients( (prevIngredients) => prevIngredients.filter(ing => ing.id !== IngredientID) );
        dispatch({type: 'DELETE', id: IngredientID});
      }).catch( error => { 
        setError(error.message);
        console.log(error);
      });
  }

  const filterIngredientsHandler = useCallback((loadedIngredients) => {
    dispatch({type: 'SET', ingredients: loadedIngredients});
  }, []);

  const clearError = () => {
    setError(null);
    setIsLoading(false);
  }

  return (
    <div className="App">
      {error ? <ErrorModal onClose={clearError}>{error}</ErrorModal> : null}
      <IngredientForm onAddIngredient={addIngredientHandler} loading={isLoading} />

      <section>
        <Search onLoadIngredients={filterIngredientsHandler} />
        <IngredientList ingredients={userIngredients} onRemoveItem={removeIngredientHandler} loading={isLoading} />
      </section>
    </div>
  );
}

export default Ingredients;
