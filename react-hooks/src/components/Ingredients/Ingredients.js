import React, { useReducer, useEffect, useCallback} from 'react';

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

const httpReducer = (currentHttpState, action) => {
  switch (action.type) {
    case "SEND":
      return { loading: true, error: null };
    case "RESPONSE":
      return { ...currentHttpState, loading: false };
    case "ERROR":
      return { loading: false, error: action.errorMessage };
    case "CLEAR":
      return {...currentHttpState, error: null};
    default:
      throw new Error('Ops, Error!');
  }
}

function Ingredients() {
  const [userIngredients, dispatch] = useReducer(ingredientReducer, []);
  const [httpState, dispatchHttp] = useReducer(httpReducer, {loading: false, error: null})
  //const [ userIngredients, setUserIngredients ] = useState([]);
  //const [ isLoading, setIsLoading ] = useState(false);
  //const [error, setError ] = useState();

  useEffect( () => {
    //setIsLoading(true);
    dispatchHttp({type: 'SEND'});
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
      //setIsLoading(false);
      dispatchHttp({type: 'RESPONSE'});
      dispatch({type: 'SET', ingredients: loadedIngredients});
    }).catch( error => {
      //setError(error.message);
      dispatchHttp({type: 'ERROR', errorMessage: error.message});
      console.log(error);
    })
  }, []);

  useEffect(() => {
    console.log('RENDRING FROM useEffect', userIngredients);
  }, [userIngredients]);

  const addIngredientHandler = ingredint => {
    dispatchHttp({type: 'SEND'});
    fetch('https://react-query-app.firebaseio.com/ingredients.json', {
      method: 'POST',
      body: JSON.stringify(ingredint),
      headers: { 'Content-Type': 'application/json' }
    }).then( response => {
      dispatchHttp({type: 'RESPONSE'});
      return response.json();
    }).then(responseData => {
      //setUserIngredients(prevIngredients => [...prevIngredients, {id: responseData.name, ...ingredint}]);
      dispatch({type: 'ADD', ingredient: {id: responseData.name, ...ingredint}});
    }).catch( error => {
      dispatchHttp({type: 'ERROR', errorMessage: error.message});
      console.log(error);
    });
  } 

  const removeIngredientHandler = IngredientID => {
    dispatchHttp({type: 'SEND'});
      fetch(`https://react-query-app.firebaseio.com/ingredients/${IngredientID}.json`, {
        method: 'DELETE'
      }).then( response => {
        dispatchHttp({type: 'RESPONSE'});
        //setUserIngredients( (prevIngredients) => prevIngredients.filter(ing => ing.id !== IngredientID) );
        dispatch({type: 'DELETE', id: IngredientID});
      }).catch( error => { 
        dispatchHttp({type: 'ERROR', errorMessage: error.message});
        //setError(error.message);
        console.log(error);
      });
  }

  const filterIngredientsHandler = useCallback((loadedIngredients) => {
    dispatch({type: 'SET', ingredients: loadedIngredients});
  }, []);

  const clearError = () => {
    dispatchHttp({type: 'CLEAR'});
    dispatchHttp({type: 'RESPONSE'});
  }

  return (
    <div className="App">
      {httpState.error ? <ErrorModal onClose={clearError}>{httpState.error}</ErrorModal> : null}
      <IngredientForm onAddIngredient={addIngredientHandler} loading={httpState.loading} />

      <section>
        <Search onLoadIngredients={filterIngredientsHandler} />
        <IngredientList ingredients={userIngredients} onRemoveItem={removeIngredientHandler} loading={httpState.loading} />
      </section>
    </div>
  );
}

export default Ingredients;
