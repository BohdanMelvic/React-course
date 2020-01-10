import * as actionTypes from './actionTypes'

export const saveResult = (res) => {
    const updatedResult = res * 2;
    return {
        type: actionTypes.STORE_RESULT,
        counterValue: updatedResult
    }
};

export const storeResult = (res) => {
    return (dispatch) => {
        setTimeout(() => {
            dispatch(saveResult(res));
        }, 2000);
    }
};

export const deleteResult = (id) => {
    return {
        type: actionTypes.DELETE_RESULT,
        value: id
    }
};