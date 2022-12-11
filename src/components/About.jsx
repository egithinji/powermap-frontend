/* eslint-disable react/react-in-jsx-scope */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight, faCaretDown } from '@fortawesome/free-solid-svg-icons';
import {useState} from 'react';

function About() {
    const [aboutVisible, setAboutVisible] = useState(false);

    const handleClick = () => {
        setAboutVisible(!aboutVisible);
    }

    return (
        <div className="bg-black text-white flex-col p-2 rounded-md">
            <div className=" text-lg flex justify-start gap-2 font-bold font-serif items-center">About<FontAwesomeIcon className="cursor-pointer" icon={aboutVisible ? faCaretDown : faCaretRight} size="lg" onClick={handleClick} /></div>
            <div className={aboutVisible ? `transition-all duration-500 ease-in flex flex-col max-h-96 text-xs` : `transition-all duration-500 ease-out max-h-0 overflow-hidden`}>
                <div>
                    <p>Power Map uses the Twitter API to track public tweets directed at the official <a href='https://www.kplc.co.ke/'>Kenya Power</a> twitter handle. If a location is mentioned in a tweet, it matches the location to a geojson polygon, and generates a point within the polygon. </p>
                    <p>It's a free service to provide members of the public with power outage data.</p>
                </div>
            </div>
        </div>
    )
}

export default About;