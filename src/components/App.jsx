/* eslint-disable react/react-in-jsx-scope */
import Map from "./Map";
import SideBar from "./SideBar";
import Stats from './Stats/Stats';

function App() {

  return (
    <div className="container flex flex-col relative min-h-screen min-w-full bg-slate-300 m-0">
        <div className='h-auto w-full sm:min-h-screen sm:min-w-full'>
            <Map />
        </div>
        {/* <div className="sm:absolute sm:top-0 sm:left-0 z-20"> */}
        <div className="absolute top-0 md:right-0 z-20 mr-4 mt-4">
            <SideBar />
        </div>
        <div className="absolute bottom-20 md:bottom-0 left-3 md:left-0 z-20 mr-4 mt-4">
            <Stats />
        </div>
    </div>
    
  )
}

export default App;
