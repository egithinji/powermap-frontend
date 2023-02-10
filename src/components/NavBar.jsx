import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faDiscord } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { useState } from 'react';

function NavBar() {

    const [mobNavExpanded, setMobNavExpanded] = useState(true);

    const toggleHamburger = () => {
        setMobNavExpanded(!mobNavExpanded);
    }

    const styleRect1BeforeClick = {
        y: 25,
        transition: "rotate 300ms ease-in, y 300ms ease-in 300ms",
        transformOrigin: "center",
    }   

    const styleRect1AfterClick = {
        y: 45,
        rotate: "45deg",
        transition: "y 300ms ease-in, rotate 300ms ease-in 300ms",
        transformOrigin: "center",
    }   

    const styleRect2BeforeClick = {
        y: 45,
        opacity: 100,
        transition: "opacity 300ms ease-in 300ms",
    }   

    const styleRect2AfterClick = {
        y: 45,
        opacity: 0,
        transition: "transition-opacity 300ms ease-in",
    }

    const styleRect3BeforeClick = {
        y: 65,
        transition: "rotate 300ms ease-in, y 300ms ease-in 300ms",
        transformOrigin: "center",       
    }   

    const styleRect3AfterClick = {
        y: 45,
        rotate: "-45deg",
        transition: "y 300ms ease-in, rotate 300ms ease-in 300ms",
        transformOrigin: "center",       
    }   

    return (
        <>
            <svg onClick={toggleHamburger} className="md:hidden z-50 fixed top-1 left-1" viewBox="0 0 100 100" width="25">
                    <rect 
                        fill="white" 
                        stroke="white" 
                        width="80" height="8" 
                        x="10" 
                        rx="2" 
                        style={mobNavExpanded ? styleRect1AfterClick : styleRect1BeforeClick}
                        />


                    <rect 
                        fill="white" 
                        stroke="white" 
                        width="80" height="8" 
                        x="10" y="45"
                        rx="2" 
                        style={mobNavExpanded ? styleRect2AfterClick : styleRect2BeforeClick}
                        />

                    <rect 
                        fill="white" 
                        stroke="white" 
                        width="80" height="8" 
                        x="10" y="65"
                        rx="2"
                        style={mobNavExpanded ? styleRect3AfterClick : styleRect3BeforeClick }
                         />
            </svg>           
            <nav className={`${mobNavExpanded ? 'translate-x-0' : '-translate-x-full md:translate-x-0'} transition-transform ease-in-out duration-500 fixed flex flex-col md:flex-row md:static inset-y-0 left-0 w-1/2 md:w-full z-30 md:justify-around items-center bg-black text-white text-sm font-bold md:h-10 font-sans`}>
                <ul className="flex flex-col md:flex-row gap-4 mt-10 md:mt-0">
                    <li className="md:ml-6">
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                isActive ? "font-bold text-cyan-200" : undefined
                            }
                        >Power Map</NavLink>
                    </li>
                    {/* <li className="ml-6">
                        <NavLink
                            to="/AddPolygon"
                            className={({ isActive }) =>
                                isActive ? "font-bold text-cyan-200" : undefined
                            }
                        >Add a Polygon</NavLink>
                    </li> */}
                    <li className="md:ml-6">
                        <NavLink
                            to="/About"
                            className={({ isActive }) =>
                                isActive ? "font-bold text-cyan-200" : undefined
                            }
                        >About</NavLink>
                    </li>
                    <li className="md:ml-6">
                        <div className="flex gap-2">
                        <a href='https://github.com/egithinji' target='_blank'><FontAwesomeIcon icon={faGithub} size="lg"/></a>
                        <a href='mailto:ericgithinji@gmail.com'><FontAwesomeIcon icon={faEnvelope} size="lg"/></a>
                        </div>
                    </li>
                </ul>
            </nav>
        </>
    ) 
}

export default NavBar;