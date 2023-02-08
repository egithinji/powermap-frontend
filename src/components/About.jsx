import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from 'react';
import { Link } from "react-router-dom";

function About() {

    return (
        <div className="w-full min-h-screen bg-white text-black pt-10 pl-10 pr-10">
            <div className="flex-col text-sm md:w-1/3 justify-around ml-6">
                <p className="mb-6">Power Map uses the Twitter API to track public tweets directed at the official <a href='https://www.kplc.co.ke/'>Kenya Power</a> twitter handle.</p>
                <p className="mb-6">When a tweet contains a complaint about an area, a random point is generated on the map within that area.</p>
                <p className="mb-6">We're currently covering 220 areas (neighborhoods, towns, etc) in Kenya and are progressively increasing coverage. You can help by <Link to="/AddPolygon"> adding new polygons.</Link> </p>
                <p>If you're interested in contributing or just want to say hi, please <a href='mailto:ericgithinji@gmail.com'>send me an email</a>.</p>
            </div>
        </div>
    )
}

export default About;