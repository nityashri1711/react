import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

function MyApp() {
  return(
    <>
    <h1>Custom App</h1>
    <a href="https://www.google.com">Click on this link</a>
    </>
  )
}

const anotherElement = (
  <a href="https://www.google.com" target='_blank'>Visit Google</a>
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
