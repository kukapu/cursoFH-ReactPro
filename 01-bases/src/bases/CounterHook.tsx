import { useCounter } from '../hooks/useCounter';


export const CounterHook = () => {

  const { counter, elementToAnimate, handleClick, handleClickLess, handleClickReset } = useCounter({
    maxCount: 10,
  })

  return (
    <>
      <h1> CounterHook:</h1>
      <h2 ref={ elementToAnimate }> { counter } </h2>
      
      <button onClick={ handleClickLess }> -1 </button>
      <button onClick={ handleClick }> +1 </button>
      <button onClick={ handleClickReset }> Reset </button>
    </>

  )
}
