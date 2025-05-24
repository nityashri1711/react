import { useState, useCallback, useEffect, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { motion } from "motion/react"

function App() {
  const[length, setLength] = useState(8)
  const[numAllow, setNumAllow] = useState(false)
  const[charAllow, setCharAllow] = useState(false)
  const[pass, setPass] = useState("")

  const passGenerator = useCallback(() => {
    let p= ""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numAllow) str+="0123456789"
    if(charAllow) str+="@#$%&!*"

    for(let i=1; i<=length; i++) {
      let char = Math.floor(Math.random()*str.length + 1)
      p += str.charAt(char);
    }
    setPass(p)

  } , [length, numAllow, charAllow, setPass]) 

  useEffect(() => {
    passGenerator();
  }, [length, numAllow, charAllow, passGenerator])

  const passRef = useRef(null)

  const handleClick = useCallback(()=> {
    alert("Copied")
    passRef.current?.select()
    window.navigator.clipboard.writeText(pass)
  }, [pass])

  return (
    <>
      <div className='flex place-content-center items-center min-h-screen'>
        <div className='w-full max-w-md mx-auto shadow-md rounded-lg p-4 my-4 text-orange-500 bg-gradient-to-t from-red-900 via-red-500 to-black'>
            <h1 className='text-white text-center mb-3 text-lg font-semibold font-mono'>Password Generator</h1>
            <div className='flex shadow rounded-lg overflow-hidden mb-4 border-2 border-black'>
              <input 
              type="text"
              value={pass}
              className='outline-none w-full py-1 px-4'
              placeholder='your password'
              readOnly
              ref={passRef}
              />
              <motion.button 
                whileTap={{scale:1.3}}
                onClick={handleClick}
                className='h-12 w-20 bg-blue-900 py-1 text-white'>
                copy
              </motion.button>
            </div>
            <div className='flex text-sm gap-x-2 text-white'>
              <div className='flex items-center gap-x-1'>
                <input 
                type="range" 
                id="password-length"
                min={6}
                max={100}
                value={length}
                className='cursor-pointer'
                onChange={(e) => {setLength(e.target.value)}}
                />
                <label htmlFor="password-length">Length: {length}</label>
              </div>
              <div>
                <input 
                type="checkbox" 
                id="num-allow"
                defaultChecked={numAllow}
                onChange={() => {
                  setNumAllow((prev) => !prev)
                }} 
                />
                <label htmlFor="num-allow">Number</label>
              </div>
              <div>
                <input 
                type="checkbox" 
                id="char-allow"
                defaultChecked={charAllow}
                onChange={() => {
                  setCharAllow((prev) => !prev)
                }} 
                />
                <label htmlFor="char-allow">Character</label>
              </div>
              <div>
                <motion.i 
                whileTap={{scale:1.3, rotate:50}}
                onClick={()=>passGenerator()}
                role='button'
                aria-label='Regenerate password'
                className='cursor-pointer material-icons' >&#xe5d5;</motion.i>
              </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default App
