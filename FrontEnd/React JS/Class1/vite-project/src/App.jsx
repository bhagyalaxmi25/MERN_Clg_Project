// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='text-center text-4xl text-blue-700'>It is my first react project</h1>
      <Card name={"Bikash"} age={"21"} roll={"24"} />
    </>
  )
}

export default App
