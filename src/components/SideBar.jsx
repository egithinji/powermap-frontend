import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight, faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import Info from "./Info";

function SideBar() {
    const [ sideBarExpanded, setSideBarExpanded ] = useState(false);

    const handleClick = () => {
        setSideBarExpanded(!sideBarExpanded);
    }

    useEffect(() => {
        const mediaQuery = window.matchMedia('(min-width: 768px)');
        if (mediaQuery.matches) setSideBarExpanded(true);
    }, []);

    return (
        <div className="flex flex-col justify-start gap-2 bg-black/40 backdrop-blur-sm text-white rounded-md  pl-5 pr-5 pt-2 pb-1 h-full overflow-y-hidden ">
            {/* <div className="text-lg font-bold font-serif flex justify-between items-center">
                Power Map <FontAwesomeIcon className={`cursor-pointer`} icon={sideBarExpanded ? faCaretDown : faCaretRight} size="lg" onClick={handleClick} />
            </div> */}
            {/* <div className={sideBarExpanded ? `transition-all duration-1000 ease-in flex flex-col max-h-[32rem] text-xs` : `transition-all duration-500 ease-out max-h-0 overflow-hidden`}>
 */}            <div className="transition-all duration-1000 ease-in flex flex-col max-h-[32rem] text-xs">
                <Info />
            </div>
        </div>
    )
}

export default SideBar;