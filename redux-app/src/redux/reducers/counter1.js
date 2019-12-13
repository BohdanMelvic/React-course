import {ADD, SUB} from '../actions/actionType'

const initialState = {
    counter: 0
  }
  
  export default function counter1(state = initialState, action) {
    switch(action.type) {
      case ADD:
        return {
          counter: state.counter + action.value
        }
      case SUB:
        return  {
          counter: state.counter - action.value
        }
    }
    return state
  }