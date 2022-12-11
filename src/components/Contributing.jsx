/* eslint-disable react/react-in-jsx-scope */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faCaretRight } from '@fortawesome/free-solid-svg-icons';
import {useState} from 'react';

function Contributing() {
    const [contVisible, setContVisible] = useState(false);

    const handleClick = () => {
        setContVisible(!contVisible);
    }

    return (
        <div className="bg-black text-white flex-col p-2 rounded-md">
            <div className=" text-lg flex justify-start gap-2 font-bold font-serif w-24">Contributing<FontAwesomeIcon className="cursor-pointer" icon={contVisible ? faCaretDown : faCaretRight} size="lg" onClick={handleClick} /></div>
            <div className={contVisible ? `transition-all duration-500 ease-in flex flex-col max-h-96 text-xs` : `transition-all duration-500 ease-out max-h-0 overflow-hidden`}>
                <div>
                    <h2>Developers</h2>
                <div>
                    <p>If you want to contribute to the frontend, visit our  <a href=' https://github.com/egithinji/flux-frontend'>frontend repo</a>.
                    If you're more interested in the backend side of things checkout the  <a href=' https://www.google.com'>backend repo</a>.
                    </p>
                    <p>You can also hang out at our <a href='www.google.com'>discord</a>.</p>
                </div>
                <h2>Sponsors</h2>
                <div>
                    <p> The website incurs expenses in terms of server costs and developer time. Your financial support goes towards defraying these costs and is
                    greatly appreciated.  Our primary channel for receiving donations is <a href='www.google.com'>github sponsors</a>.</p> 
                </div>
                                    
                </div>
            </div>
        </div>
    )
}

export default Contributing;