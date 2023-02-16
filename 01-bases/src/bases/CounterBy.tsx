import { useState } from "react"

interface CounterProps {
  initialValue?: number
}

interface CounterState {
  counter: number, 
  click: number,
}

export const CounterBy = ({ initialValue = 10 }: CounterProps) => {

  const [{ counter, click }, setCounterState] = useState<CounterState>({
    counter: initialValue,
    click: 0,
  })

  const handleClickAdd = ( add: number ) => {
    setCounterState( ({ counter, click }) => ({
      counter: counter + add,
      click: click + 1,
    }) )	
  }
  const handleClickLess = ( less: number ) => {
    setCounterState( ({ counter, click }) => ({
      counter: counter - less,
      click: click + 1,
    }))
  }
  const handleClickReset = () => {
    setCounterState( {
      counter: initialValue,
      click: 0,
    } )
  }

  return (
    <>
      <h1> CounterBy: { counter }</h1>
      <h1> Click: { click }</h1>

      <button onClick={ () => handleClickLess( 1 ) }> -1 </button>
      <button onClick={ () => handleClickAdd( 1 ) }> +1 </button>
      <button onClick={ () => handleClickAdd( 5 ) }> +5 </button>
      <button onClick={ handleClickReset }> Reset </button>
    </>

  )
}
