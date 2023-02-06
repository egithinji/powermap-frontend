import Map from "./Map";
import SideBar from "./SideBar";
import Stats from './Stats/Stats';


function Home() {
    return (
        <div className="container flex flex-col relative min-h-screen min-w-full bg-slate-300 m-0">
            <div className='h-auto w-full sm:min-h-screen sm:min-w-full'>
                <Map />
            </div>
            <div className="absolute top-2 left-2 w-8/12 md:w-96 z-20">
                <SideBar />
            </div>
            <div className="absolute bottom-20 right-2 md:bottom-2 z-20">
                <Stats />
            </div>
        </div>
    )
}

export default Home;