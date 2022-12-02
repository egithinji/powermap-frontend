/* eslint-disable react/react-in-jsx-scope */
import Stats from "./Stats";
import Info from "./Info";

function SideBar() {
    return (
        <div className="flex flex-col justify-start gap-4 min-h-full bg-gradient-to-br from-darkpurple to-mypurple border border-solid border-black text-white">
            <div> 
                <div className="text-3xl font-bold">
                    Flux Logo
                </div>
            </div>
            <Stats />
            <Info />
        </div>
    )
}

export default SideBar;