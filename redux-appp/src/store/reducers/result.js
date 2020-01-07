import * as actionTypes from '../actions';

const initialState = {
    result: []
};

const reducer = (state = initialState, action) => {

    if (action.type === actionTypes.STORE_RESULT) {
        return {
            ...state,
            result: state.result.concat({id: new Date(), counterValue: action.counterValue})
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