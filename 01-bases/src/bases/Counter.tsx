import { useState } from "react"

interface CounterProps {
  initialValue?: number
}

export const Counter = ({ initialValue = 0 }: CounterProps) => {

  const [counter, setCounter] = useState( initialValue )

  const handleClick = () => {
    setCounter( prev => prev + 1 )
  }
  const handleClickLess = () => {
    setCounter( prev => prev - 1 )
  }
  const handleClickReset = () => {
    setCounter( initialValue )
  }

  return (
    <>
      <h1> Counter: { counter }</h1>
      
      <button onClick={ handleClickLess }> -1 </button>
      <button onClick={ handleClick }> +1 </button>
      <button onClick={ handleClickReset }> Reset </button>
    </>

  )
}
