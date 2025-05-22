import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Card.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='justify-between items-center md:flex place-content-center '>
        <Card username="Nitya" piclink="https://plus.unsplash.com/premium_photo-1747751013539-b1d2a2fdeb7a?q=80&w=2016&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" pagelink="https://unsplash.com/photos/a-woman-is-wrapped-in-plastic-for-a-fashion-shoot-P98g0W3Tgcg" />
        <Card username="Navya" piclink="https://plus.unsplash.com/premium_photo-1661844541352-3b97b83f3edb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bW9ua2V5fGVufDB8fDB8fHww" pagelink="https://unsplash.com/photos/japanese-macaque-sitting-in-the-snow-japan-nagano-jigokudani-monkey-park-an-excellent-illustration-pv-9aj5etRw"/>
      </div>
    </>
  )
}

export default App
