import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faDiscord } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

function NavBar() {

    return (
    <nav className="flex justify-between items-center bg-black text-white text-sm font-bold h-10 font-sans">
        <ul className="flex">
            <li className="ml-6">
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
            <li className="ml-6">
                <NavLink
                    to="/About"
                    className={({ isActive }) =>
                        isActive ? "font-bold text-cyan-200" : undefined
                    }
                >About</NavLink>
            </li>

        </ul>
        <div className='flex justify-center gap-2 mr-6'>
            <a href='https://github.com/egithinji' target='_blank'><FontAwesomeIcon icon={faGithub} size="lg"/></a>
            <a href='mailto:ericgithinji@gmail.com'><FontAwesomeIcon icon={faEnvelope} size="lg"/></a>
        </div>
    </nav>
    ) 
}

export default NavBar;