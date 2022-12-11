/* eslint-disable react/react-in-jsx-scope */
import About  from "./About";
import Contributing  from "./Contributing";


function Info() {
    return (
        <div className="flex flex-col gap-4 text-xs">
            <div>
                <p className="text-sm"><span className="font-bold">Power Map</span> is an open source data visualization project that displays a <span className="text-cyan-300 font-bold">real-time heatmap </span> of <span className="text-cyan-300 font-bold"> power outage complaints</span> in Kenya.</p>
                <About />
            </div>
            <div>
                <Contributing /> 
            </div>
        </div>
    )
}

export default Info;