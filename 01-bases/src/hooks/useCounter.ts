import { useState, useLayoutEffect, useRef, useEffect } from 'react';
import { gsap } from 'gsap'

const MAXIMUN_COUNT = 10

export const useCounter = ({ maxCount = 1 }) => {

  const [counter, setCounter] = useState( 5 )
  // const counterElement = useRef<HTMLHeadingElement>(null)
  const elementToAnimate = useRef<any>(null)

  const tl = useRef( gsap.timeline() )

  useLayoutEffect(() => {

    // console.log(counterElement.current)
    if( !elementToAnimate.current ) return

    tl.current.to( elementToAnimate.current , { y: -10, duration: 0.2, ease: 'ease.out' })
              .to( elementToAnimate.current, { y:0, duration: 1, ease: 'bounce.out'  })
              .pause()
    // gsap.to( counterElement.current , { y: -10, duration: 0.2, ease: 'ease.out' }).then( () => {
    //   gsap.to( counterElement.current, { y: 0, duration: 1, ease: 'bounce.out' })
    // })

  }, [])

  useEffect( () => {
    // if ( counter < maxCount ) return
    // console.log('Se llego al valor maximo')

    tl.current.play(0)
    

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


  return {
    counter,
    elementToAnimate,
    handleClick,
    handleClickLess,
    handleClickReset,
  }
}