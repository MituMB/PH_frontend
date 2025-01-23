// // import { useState } from 'react'
// // import reactLogo from './assets/react.svg'
// // import viteLogo from '/vite.svg'
// import { useDispatch } from 'react-redux'
// import './App.css'
// import { decrement, increment } from './redux/features/counter/counterSlice'
// import { useAppDispatch, useAppSelector } from './redux/hook'
// import { Button } from './components/ui/button'

// function App() {
//   // const [count, setCount] = useState(0)
//   const { count} = useAppSelector((state) => state.counter)
// const dispatch = useAppDispatch()
// const handleIncrement = (amount:number) => {
// dispatch(increment(amount))
// }
// const handleDecrement = () => {
//   dispatch(decrement())
//   }
//   return (
//     <>
//      <h1>Counter</h1>
//      <Button onClick={()=>handleIncrement(5)}>Increment by 5</Button>
//      <Button onClick={()=>handleIncrement(1)}>Increment</Button>
//      <div>{count}</div>
//      <button onClick={handleDecrement}>Decrement</button>
//     </>
//   )
// }

// export default App
import React from 'react'
import { Navabar } from './components/layouts/Navabar'
import { Outlet } from 'react-router-dom'

const App = () => {
  return (
    <div>

      <Navabar/>
      <Outlet/>
    </div>
  )
}

export default App
