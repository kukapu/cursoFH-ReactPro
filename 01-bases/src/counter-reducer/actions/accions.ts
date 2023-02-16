
export type CounterAction = 
  | { type: 'incrementBy', payload: { value: number } } 
  | { type: 'decrementBy', payload: { value: number }  } 
  | { type: 'reset' }

// export const doReset = (): CounterAction => {
//   return {
//     type: 'reset',
//   }
// }

export const doReset = (): CounterAction =>  ({ 
  type: 'reset',
})

export const doIncrementBy = ( value: number ): CounterAction => ({
  type: 'incrementBy', 
  payload: { value },
})

export const doDecrementBy = ( value: number ): CounterAction => ({
  type: 'decrementBy', 
  payload: { value },
})