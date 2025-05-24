import { useState } from 'react'
//import React, { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState("olive")
  const [items, setItems] = useState([])
  const [inputValue, setInputValue] = useState("");
  function addItem() {
    setItems([...items, inputValue]);  // update state, triggers re-render
    setInputValue("");
  }

  return (
      <div className="w-full h-screen duration-200 flex flex-col items-center justify-center" style={{backgroundColor: color}}>
        <div className='flex-grow flex items-center justify-center'>
          <div className='h-[200px] w-[500px] bg-slate-50 border-2 rounded-3xl border-black'>
              <div className='flex items-center h-20 w-full place-content-center p-2 m-1'>
                  <input id='inputBox' value={inputValue} className='h-14 w-96 border-2 border-b-slate-400 rounded-2xl p-3'
               type="text" placeholder ='Add something to your list..' 
                onChange={(e)=>setInputValue(e.target.value)}
               />
                 <button onClick={addItem} className='bg-red-500 h-14 w-16 rounded-3xl ml-3' type="button">Add</button>
              </div>

              {/* <li>{text}</li> */}
              <div>
                <ul>
                {items.map((item, index) => (
                  <li key={index}>{item}</li>    // Render each item in list
                ))}
                </ul>
              </div>
          </div>
        </div>
        {/* toolbar */}
        <div className='bg-white h-8 w-96 rounded-2xl flex  items-center place-content-center justify-between mb-10 p-8'>
          <button className='bg-red-600 rounded-md p-3 text-white w-20' onClick={()=>setColor("red")}>
            Red
          </button>

          <button className='bg-gradient-to-br from-red-600 to-yellow-200 rounded-md p-3 text-white w-20' onClick={()=> {
            if(color==="red") {
              setColor("olive")
            }
            else {
              setColor("red")
            }
          }}>
            Toggle
          </button>

          <button className='bg-yellow-600 rounded-md p-3 text-white w-20' onClick={()=>setColor("olive")}>
            Olive
          </button>
          
        </div>
      </div>
  )
}

export default App
