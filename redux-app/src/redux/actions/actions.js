import {ADD, SUB, changeCount} from './actionType'

export function add(number) {
    return {
        type: ADD,
        value: number
    }
}

export function sub(number) {
    return {
        type: SUB,
        value: number
    }
}

export function changeCountF(number) {
    return {
        type: changeCount,
        value: number
    }
}

export function asyncAdd(number) {
    return (dispatch) => {
       setTimeout( () => {
           dispatch(changeCountF(number))
       }, 3000)
    }
}