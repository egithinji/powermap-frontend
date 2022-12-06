/* eslint-disable react/react-in-jsx-scope */
import { useState } from 'react'
import Map from "./Map";
import SideBar from "./SideBar";

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="container min-h-screen min-w-full">
        <div>
            <Map />
        </div>
    </div>
    
  )
}

export default App;
