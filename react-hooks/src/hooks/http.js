import { useReducer } from 'react';

const httpReducer = (currentHttpState, action) => {
    switch (action.type) {
      case "SEND":
        return { loading: true, error: null, data: null };
      case "RESPONSE":
        return { ...currentHttpState, loading: false, data: action.responseData };
      case "ERROR":
        return { loading: false, error: action.errorMessage };
      case "CLEAR":
        return {...currentHttpState, error: null};
      default:
        throw new Error('Ops, Error!');
    }
  }

const useHttp = () => {
    const [httpState, dispatchHttp] = useReducer(httpReducer, {
        loading: false, 
        error: null,
        data: null
    });

    const sendRequest = (url, method, body) => {
        dispatchHttp({type: 'SEND'});
        fetch(url, {
            method: method,
            body: body,
            headers: { 'Content-Type': 'application/json' }
            }).then(response => response.json())
            .then( responseData => {
                dispatchHttp({type: 'RESPONSE', responseData: responseData});
            }).catch( error => { 
                dispatchHttp({type: 'ERROR', errorMessage: error.message});
                console.log(error);
        });
    }
    return {
        isLoading: httpState.loading,
        data: httpState.data,
        error: httpState.error
    };
};

export default useHttp;