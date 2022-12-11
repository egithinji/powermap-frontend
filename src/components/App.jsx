/* eslint-disable react/react-in-jsx-scope */
import { useState } from 'react'
import Map from "./Map";
import SideBar from "./SideBar";
import Stats from './Stats';

function App() {

  return (
    <div className="container relative m-0 min-h-screen min-w-full bg-slate-300">
        <div className="absolute top-0 left-0 z-20">
            <SideBar />
        </div>
        <div className='min-h-screen min-w-full'>
            <Map />
        </div>
        <div className="absolute top-0 right-0 z-20 mr-4 mt-4">
            <Stats />
        </div>
    </div>
    
  )
}

export default App;
