// useReducer: simple Counter
// http://localhost:3000/isolated/exercise/01.js

import * as React from 'react'

function countReducer(previousCount, newCount){
  //previousCount = newCount
  return newCount.type === 'INCREMENT' ? {...previousCount, count: previousCount.count + newCount.step} :  previousCount;
}

function Counter({initialCount = 0, step = 1}) {
  // 🐨 replace React.useState with React.useReducer.
  // 💰 React.useReducer(countReducer, initialCount)
  // const [count, changeCount] = React.useReducer(countReducer, initialCount)

  // // 💰 you can write the countReducer function so you don't have to make any
  // // changes to the next two lines of code! Remember:
  // // The 1st argument is called "state" - the current value of count
  // // The 2nd argument is called "newState" - the value passed to setCount
  // //const increment = () => setCount(count + step)
  // const increment = () => changeCount(step)

  // const [state, setState] = React.useReducer(countReducer, {
  //   count: initialCount,
  // })
  // const {count} = state
  // const increment = () => setState({count: count + step})

  const [state, dispatch] = React.useReducer(countReducer, {
    count: initialCount,
  })
  const {count} = state
  const increment = () => dispatch({type: 'INCREMENT', step})
  return <button onClick={increment}>{count}</button>
}

function App() {
  return <Counter />
}

export default App
