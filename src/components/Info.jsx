/* eslint-disable react/react-in-jsx-scope */

function Info() {
    return (
        <div className="flex flex-col gap-4 text-sm">
            <div>
                <h1>What is this?</h1>
                <p>Flux is an open source project that displays a <span className="text-cyan-300 font-bold">real-time heatmap </span> of <span className="text-cyan-300 font-bold"> power outage complaints</span> in Kenya.</p>
                <p>The website uses the Twitter API to track public tweets directed at the official <a href='https://www.kplc.co.ke/'>Kenya Power</a> twitter handle. If a location is mentioned in a tweet, it matches the location to a geojson polygon, and generates a point within the polygon. </p>
            </div>
            <div>
                <h1>How to contribute</h1>
                <h2>Developers</h2>
                <div>
                    <p> Whether you're an experienced developer or a complete beginner, your contributions are very welcome. </p>
                    <p>If you want to contribute to the frontend, visit our  <a href=' https://github.com/egithinji/flux-frontend'>frontend repo</a>.
                    If you're more interested in the backend side of things checkout the  <a href=' https://www.google.com'>backend repo</a>.
                    </p>
                    <p>You can also come hang out on our <a href='www.google.com'>discord channel</a>.</p>
                </div>
                <h2>Financial Support</h2>
                <div>
                    <p> The website incurs expenses mainly in terms of server costs and developer time. Your financial support goes towards defraying these costs and is
                    greatly appreciated.  Our primary channel for receiving donations is <a href='www.google.com'>github sponsors</a>.</p> 
                </div> 
            </div>
        </div>
    )
}

export default Info;