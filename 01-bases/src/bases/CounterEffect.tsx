import { useState, useEffect, useLayoutEffect, useRef } from "react"
import { gsap } from 'gsap'

const MAXIMUN_COUNT = 10


export const CounterEffect = () => {

  const [counter, setCounter] = useState( 5 )
  const counterElement = useRef<HTMLHeadingElement>(null)

  useLayoutEffect( () => {
    if ( counter < MAXIMUN_COUNT ) return

    console.log('Se llego al valor maximo')

    const tl = gsap.timeline()

    tl.to( counterElement.current , { y: -10, x: 10, duration: 0.2, ease: 'ease.out' })
      .to( counterElement.current, { y:0 , x:0, duration: 1, ease: 'bounce.out'  })
    // gsap.to( counterElement.current , { y: -10, duration: 0.2, ease: 'ease.out' }).then( () => {
    //   gsap.to( counterElement.current, { y: 0, duration: 1, ease: 'bounce.out' })
    // })

  },[counter])

  const handleClick = () => {
    // if( counter >= MAXIMUN_COUNT ) return
    setCounter( prev => Math.min( prev + 1, MAXIMUN_COUNT ) )
  }
  const handleClickLess = () => {
    setCounter( prev => prev - 1 )
  }
  const handleClickReset = () => {
    setCounter( 5 )
  }

  return (
    <>
      <h1> CounterEffect:</h1>
      <h2 ref={ counterElement }> { counter } </h2>
      
      <button onClick={ handleClickLess }> -1 </button>
      <button onClick={ handleClick }> +1 </button>
      <button onClick={ handleClickReset }> Reset </button>
    </>

  )
}
