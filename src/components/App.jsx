/* eslint-disable react/react-in-jsx-scope */
import { useState } from 'react'
import Map from "./Map";
import SideBar from "./SideBar";

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="container min-h-full min-w-full grid grid-cols-3 border-solid border border-black">
        
        <div className='border-solid border border-black min-h-full'>
            <SideBar />
        </div>
        <div className='col-span-2 flex justify-center items-center border-solid border border-black'>
            <Map />
        </div>
    </div>
    
  )
}

export default App;
