import { useState, useCallback, useEffect, useRef } from 'react'

function App() {

  const [length, setLength] = useState(8);
  const [numbersAllowed, setNumbersAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("")

  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(()=>{
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(numbersAllowed) str+="0123456789"
    if(charAllowed) str+="~!@#$%^&*()_-|"

    for(let i=1; i<=length; i++){
      let index = Math.floor(Math.random()*str.length + 1)
      let char = str.charAt(index);
      pass+=char;
    }

    setPassword(pass);

  }, [length, numbersAllowed, charAllowed, setPassword]);

  useEffect(()=>{
    passwordGenerator();
  }, [length, charAllowed, numbersAllowed, passwordGenerator]
  )

  const copyPasswordToClipBoard = useCallback(()=>{
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password);
  }, [password])



  return (
    <>
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-700 text-orange-500'>
      <h1 className='text-white text-center my-3'>Password Generator</h1>
      <div className='flex rounded-lg overflow-hidden mb-4'>
        <input 
        type='text'
        value={password}
        className='outline-none w-full py-1 px-3 bg-white text-black rounded-lg'
        placeholder='Password'
        ref={passwordRef}
        readOnly
        />
        <button className='rounded-lg px-3 py-1 bg-orange-500 text-white mx-2 shrink-0 cursor-pointer'
          onClick={copyPasswordToClipBoard}
        >
          Copy
        </button>
      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input 
            type='range'
            min={6}
            max={100}
            value={length}
            className='cursor-pointer'
            onChange={(e)=>{setLength(e.target.value)}}
          />
          <label>Length: {length}</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input
            type='checkbox'
            defaultChecked={numbersAllowed}
            id='numberInput'
            onChange={()=>{
              setNumbersAllowed((prev)=>!prev)}
            }
          />
          <label>Numbers</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input
            type='checkbox'
            defaultChecked={charAllowed}
            id='charInput'
            onChange={()=>{
              setCharAllowed((prev)=>!prev)
            }
          }
          />
          <label>Characters</label>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
