import { useState } from 'react'

import './index.css'

function App() {
  const [color, setcolor] = useState('red')

  return (
     <div className="w-full min-h-screen duration-200"
     style={{backgroundColor: color}}>
      <div className=" fixed bottom-10 inset-x-0 px-3">
        <div className='flex flex-wrap justify-between gap-3 shadow-lg bg-white rounded-3xl px-3 py-2'>
          <button onClick={()=>setcolor('blue')}className='outline-none px-4 py-3 rounded-full text-white shadow-xl'
          style={{backgroundColor:"blue"}}>
            blue</button>
            <button onClick={()=>setcolor('green')}className='outline-none px-4 py-3 rounded-full text-white shadow-xl'
          style={{backgroundColor:"green"}}>
            green</button>
            <button onClick={()=>setcolor('purple')}className='outline-none px-4 py-3 rounded-full text-white shadow-xl'
          style={{backgroundColor:"purple"}}>
            purple</button>
        </div>
      </div>

     </div>
  )
}

export default App
