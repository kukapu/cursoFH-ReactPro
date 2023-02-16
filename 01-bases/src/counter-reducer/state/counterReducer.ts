import { CounterState } from '../interfaces/interfaces';
import { CounterAction } from '../actions/accions';


export const INITIAL_STATE: CounterState = {
  counter: 0,
  previous: 0,
  changes: 0,
}

export const counterReducer = ( state: CounterState, action: CounterAction ): CounterState => {

  switch ( action.type ) {
    case 'incrementBy':
      return {
        ...state,
        counter: state.counter + action.payload.value,
        previous: state.counter,
        changes: state.changes + 1,
      }
    case 'decrementBy':
      return { 
        ...state,
        counter: state.counter - action.payload.value,
        previous: state.counter,
        changes: state.changes + 1,
      }
    case 'reset':
      return INITIAL_STATE
  }
}