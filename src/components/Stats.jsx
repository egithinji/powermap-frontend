/* eslint-disable react/react-in-jsx-scope */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { faCaretUp } from "@fortawesome/free-solid-svg-icons";
import StatsTodayTotal from "./StatsTodayTotal";
import StatsTrending from "./StatsTrending";
import { useState } from "react";

function Stats() {

    const [statsVisible, setStatsVisible] = useState(false);

    const handleClick = () => {
        setStatsVisible(!statsVisible);
    }

    return (
        <div className="flex-col text-sm">
            <div className="bg-slate-300/75 w-40 text-xl flex justify-between">Trending areas<FontAwesomeIcon icon={statsVisible ? faCaretUp : faCaretDown} size="lg" onClick={handleClick}/></div>
            <div className={statsVisible ? `transition-all duration-1000 ease-in-out flex flex-col opacity-100 bg-slate-300/75 w-40` : `transition-all duration-1000 ease-in-out opacity-0 w-40`}>
                <div>
                    <StatsTrending />
                </div>
                <div>
                    <StatsTodayTotal />
                </div>
                
            </div>
        </div>
        
    )
}

export default Stats;