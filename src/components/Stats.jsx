/* eslint-disable react/react-in-jsx-scope */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { faCaretUp } from "@fortawesome/free-solid-svg-icons";
import StatsTodayTotal from "./StatsTodayTotal";
import CurrentlyViewing from "./CurrentlyViewing";
import StatsTrending from "./StatsTrending";
import { useEffect, useState } from "react";

function Stats() {

    const [statsVisible, setStatsVisible] = useState(false);
    const [top3, setTop3] = useState([{area: '', count: 0},{area: '', count: 0},{area: '', count: 0}]);
    const [todayTotal, setTodayTotal] = useState(0);
    

    const handleClick = () => {
        setStatsVisible(!statsVisible);
    }

    useEffect(() => {
        fetch('/today_stats')
            .then((response) => response.json())
            .then((data) => {
                setTop3(data.top3);
                setTodayTotal(data.todayTotal);
            });
    }, []);

    return (
        <div className="bg-black text-white flex-col p-2 rounded-md">
            <div className=" w-40 text-lg flex justify-between font-bold font-serif">Today's stats<FontAwesomeIcon className="cursor-pointer" icon={statsVisible ? faCaretUp : faCaretDown} size="lg" onClick={handleClick} /></div>
            <div className={statsVisible ? `transition-all duration-1000 ease-in flex flex-col w-40 max-h-96 text-xs` : `transition-all duration-1000 ease-out w-40 max-h-0 overflow-hidden text-xxs`}>
                <div>
                    <StatsTrending top3={top3}/>
                </div>
                <div>
                    <StatsTodayTotal todayTotal={todayTotal}/>
                </div>
            </div>
        </div>
        
    )
}

export default Stats;