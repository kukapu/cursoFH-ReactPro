import { useReducer } from "react"
import { CounterState } from "./interfaces/interfaces"
import { INITIAL_STATE, counterReducer } from './state/counterReducer';
// import { doDecrementBy, doIncrementBy, doReset } from './actions/accions';
import * as actions from './actions/accions';


export const CounterReducerComponent = () => {

  // const [ { counter, previous, changes }, dispatch] = useReducer( counterReducer, INITIAL_STATE )
  const [ counterState, dispatch ] = useReducer( counterReducer, INITIAL_STATE )

  const handleClick = ( value: number ) => {
    dispatch( actions.doIncrementBy( value ) )
  }
  const handleClickLess = ( value: number ) => {
    dispatch( actions.doDecrementBy( value ) )
  }
  const handleClickReset = () => {
    dispatch( actions.doReset() )
  }

  return (
    <>
      {/* <h1> CounterReducer: { counter } - { previous } - { changes } </h1> */}
      <h1> CounterReducer Segmentado: </h1>
      <pre> { JSON.stringify( counterState, null, 2 )} </pre>
      
      <button onClick={ () => handleClickLess(9) }> -9 </button>
      <button onClick={ () => handleClickLess(4) }> -4 </button>
      <button onClick={ () => handleClickLess(1) }> -1 </button>
      <button onClick={ () => handleClick(1) }> +1 </button>
      <button onClick={ () => handleClick(5) }> +5 </button>
      <button onClick={ () => handleClick(10) }> +10 </button>
      <button onClick={ handleClickReset }> Reset </button>
    </>

  )
}
