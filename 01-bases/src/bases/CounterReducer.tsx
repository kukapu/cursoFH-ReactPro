import { useReducer } from "react"

interface CounterState {
  counter: number,
  previous: number,
  changes: number,
}

const INITIAL_STATE: CounterState = {
  counter: 0,
  previous: 0,
  changes: 0,
}

type CounterAction = 
  | { type: 'incrementBy', payload: { value: number } } 
  | { type: 'decrementBy', payload: { value: number }  } 
  | { type: 'reset' }

const counterReducer = ( state: CounterState, action: CounterAction ): CounterState => {

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

export const CounterReducerComponent = () => {

  // const [ { counter, previous, changes }, dispatch] = useReducer( counterReducer, INITIAL_STATE )
  const [ counterState, dispatch ] = useReducer( counterReducer, INITIAL_STATE )

  const handleClick = ( value: number ) => {
    dispatch( { type: 'incrementBy', payload: { value } } )
  }
  const handleClickLess = ( value: number ) => {
    dispatch( { type: 'decrementBy', payload: { value } } )
  }
  const handleClickReset = () => {
    dispatch( { type: 'reset' } )
  }

  return (
    <>
      {/* <h1> CounterReducer: { counter } - { previous } - { changes } </h1> */}
      <h1> CounterReducer: </h1>
      <pre> { JSON.stringify( counterState, null, 2 )} </pre>
      
      <button onClick={ () => handleClickLess(1) }> -1 </button>
      <button onClick={ () => handleClick(1) }> +1 </button>
      <button onClick={ () => handleClick(5) }> +5 </button>
      <button onClick={ () => handleClick(10) }> +10 </button>
      <button onClick={ handleClickReset }> Reset </button>
    </>

  )
}
