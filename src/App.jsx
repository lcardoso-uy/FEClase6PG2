import { useState } from 'react'
import './App.css'
import Rejuvenecedor from './Rejuvenecedor'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>SPA de rejuvenecimiento
      <Rejuvenecedor/>
    </div>
  )
}

export default App


