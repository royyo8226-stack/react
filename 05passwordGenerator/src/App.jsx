import { useState,useCallback ,useEffect} from "react"
function App() {
  const[length,setlength]=useState(8)
  const[isnumber,setisnumber]=useState(false)
  const[isspecial,setisspecial]=useState(false)
  const[password,setpassword]=useState("")
  const passwordGenerator=useCallback(()=>{
    let str="QWERTYUIOPASDFGHJKLZXXVBNMqwertyuiopasdfghhjkklzxcvbnm"
    let pass=""
    if(isnumber)str+="0123456789"
    if(isspecial)str+="!@#$%^&*"
    for(let i=0;i<length;i++){
      let char=Math.floor(Math.random()*str.length)
      pass+=str.charAt(char)
    }
    setpassword(pass)



  },[isnumber,isspecial,length,setpassword ])
  useEffect(()=>{
    passwordGenerator()
  },[length,isnumber,isspecial,passwordGenerator])
  return (
  <div className="min-h-screen bg-gray-900 flex items-center justify-center">
    <div className="w-full max-w-xl bg-gray-800 rounded-lg p-5 shadow-lg">

      {/* Heading */}
      <h1 className="text-2xl font-bold text-white text-center mb-5">
        Password Generator
      </h1>

      {/* Password + Copy */}
      <div className="flex w-full mb-5">
        <input
          type="text"
          value={password}
          readOnly
          className="w-full px-4 py-2 rounded-l-lg bg-white text-orange-500 font-semibold outline-none"
        />

        <button
          onClick={() => navigator.clipboard.writeText(password)}
          className="px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-r-lg"
        >
          Copy
        </button>
      </div>

      {/* Controls */}
      <div className="flex items-center gap-4 flex-wrap">

        {/* Length */}
        <input
          type="range"
          min="6"
          max="30"
          value={length}
          onChange={(e) => setlength(Number(e.target.value))}
          className="cursor-pointer"
        />

        <span className="text-orange-500 font-semibold">
          Length: {length}
        </span>

        {/* Numbers */}
        <label className="flex items-center gap-1 text-orange-500">
          <input
            type="checkbox"
            checked={isnumber}
            onChange={() => setisnumber((prev) => !prev)}
          />
          Numbers
        </label>

        {/* Characters */}
        <label className="flex items-center gap-1 text-orange-500">
          <input
            type="checkbox"
            checked={isspecial}
            onChange={() => setisspecial((prev) => !prev)}
          />
          Characters
        </label>

      </div>
    </div>
  </div>
)
  
}

export default App