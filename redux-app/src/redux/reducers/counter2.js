import {ADD, SUB, changeCount} from '../actions/actionType'

const initialState = {
    counter2: 10
  }
  
  export default function counter2(state = initialState, action) {
    switch(action.type) {
      case ADD:
        return {
          counter2: state.counter2 + action.value
        }
      case SUB:
        return  {
          counter2: state.counter2 - action.value
        }
        case changeCount:
        return  {
          counter2: state.counter2 + action.value
        }
    }
    return state
  }