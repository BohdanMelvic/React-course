import * as actionTypes from './actions';

const initialState = {
    counter: 0,
    result: []
};

const reducer = (state = initialState, action) => {

    if (action.type === actionTypes.INCREMENT) {
        return {
            ...state,
            counter: state.counter + 1
        }
    }

    
    if (action.type === actionTypes.DECREMENT) {
        return {
            ...state,
            counter: state.counter - 1
        }
    }

    
    if (action.type === actionTypes.ADD) {
        return {
            ...state,
            counter: state.counter + action.value
        }
    }

    
    if (action.type === actionTypes.SUBTRACT) {
        return {
            ...state,
            counter: state.counter - action.value
        }
    }

    if (action.type === actionTypes.STORE_RESULT) {
        return {
            ...state,
            result: state.result.concat({id: new Date(), counterValue: state.counter})
        }
    }

    if (action.type === actionTypes.DELETE_RESULT) {
        const newArr = state.result.filter((item) => item.id !== action.value);

        return {
            ...state,
            result: newArr
        }
    }

    return state;
}

export default reducer;