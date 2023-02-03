import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight, faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { Link } from "react-router-dom";

function About() {
    const [aboutVisible, setAboutVisible] = useState(false);

    const handleClick = () => {
        setAboutVisible(!aboutVisible);
    }

    return (
        <div className="text-white flex-col pl-2 rounded-md">
            <div className=" text-lg flex justify-start gap-2 font-bold font-serif items-center">About<FontAwesomeIcon className="cursor-pointer" icon={aboutVisible ? faCaretDown : faCaretRight} size="lg" onClick={handleClick} /></div>
            <div className={aboutVisible ? `transition-all duration-1000 ease-linear flex flex-col max-h-96 text-xs` : `transition-all duration-500 ease-linear max-h-0 overflow-hidden`}>
                <div>
                    <p>Power Map uses the Twitter API to track public tweets directed at the official <a href='https://www.kplc.co.ke/'>Kenya Power</a> twitter handle.</p>
                    <p>When a tweet contains a complaint about an area, a random point is generated on the map within that area.</p>
                    <p>We're currently covering 220 areas (neighborhoods, towns, etc) in Kenya and are progressively increasing coverage. You can help by <Link to="/AddPolygon"> adding new polygons.</Link> </p>
                    <p>If you're interested in contributing or just want to say hi, <a href='mailto:ericgithinji@gmail.com'>send me an email</a>.</p>
                </div>
            </div>
        </div>
    )
}

export default About;