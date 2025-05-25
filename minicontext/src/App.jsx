import { useState } from 'react'
import UserContextProvider from './context/UseContextProvider'
import Login from './components/Login'
import Profile from './components/Profile'

function App() {

  return (
    <UserContextProvider>
      <h1>context</h1>
      <Login/>
      <Profile/>
    </UserContextProvider>
  )
}

export default App