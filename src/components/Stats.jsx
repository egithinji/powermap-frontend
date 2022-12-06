/* eslint-disable react/react-in-jsx-scope */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { faCaretUp } from "@fortawesome/free-solid-svg-icons";
import StatsTodayTotal from "./StatsTodayTotal";
import CurrentlyViewing from "./CurrentlyViewing";
import StatsTrending from "./StatsTrending";
import { useState } from "react";

function Stats() {

    const [statsVisible, setStatsVisible] = useState(false);

    const handleClick = () => {
        setStatsVisible(!statsVisible);
    }

    return (
        <div className="bg-black text-white flex-col p-2 rounded-md">
            <div className=" w-40 text-lg flex justify-between font-bold font-serif">Today's stats<FontAwesomeIcon className="cursor-pointer" icon={statsVisible ? faCaretUp : faCaretDown} size="lg" onClick={handleClick} /></div>
            <div className={statsVisible ? `transition-all duration-1000 ease-in flex flex-col w-40 max-h-96 text-xs` : `transition-all duration-1000 ease-out w-40 max-h-0 overflow-hidden text-xxs`}>
                <div>
                    <StatsTrending />
                </div>
                <div>
                    <StatsTodayTotal />
                </div>
                <div>
                    <CurrentlyViewing />
                </div>
            </div>
        </div>
        
    )
}

export default Stats;