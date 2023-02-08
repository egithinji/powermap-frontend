import About  from "./About";
import Contributing  from "./Contributing";

function Info() {
    return (
        <div className="flex flex-col gap-4 text-xs">
            <div>
                <p className="text-sm"><span className="font-bold">Power Map</span> displays a <span className="text-cyan-300 font-bold">real-time heatmap </span> of <span className="text-cyan-300 font-bold"> power outage complaints</span> in Kenya.</p>
                {/* <About /> */}
            </div>
        </div>
    )
}

export default Info;