/* eslint-disable react/react-in-jsx-scope */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faDiscord } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import Info from "./Info";

function SideBar() {
    return (
        <div className="flex flex-col justify-start gap-4 min-h-full bg-black text-white">
            <div> 
                <div className="text-3xl font-bold font-serif">
                    Logo
                </div>
            </div>
            <Info />
            <div className='flex justify-center gap-2'>
            <FontAwesomeIcon icon={faGithub} size="lg"/>
            <FontAwesomeIcon icon={faDiscord} size="lg"/>
            <FontAwesomeIcon icon={faEnvelope} size="lg"/>
            </div>
        </div>
    )
}

export default SideBar;