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
        <div className="text-white flex-col pl-2 rounded-md">
            <div className=" text-lg flex justify-start gap-2 font-bold font-serif w-24">Contributing<FontAwesomeIcon className="cursor-pointer" icon={contVisible ? faCaretDown : faCaretRight} size="lg" onClick={handleClick} /></div>
            <div className={contVisible ? `transition-all duration-1000 ease-linear flex flex-col max-h-96 text-xs` : `transition-all duration-500 ease-linear max-h-0 overflow-hidden`}>
                <div>
                    <p>Contributions are very welcome! If you would like to contribute to the frontend, visit our  <a href='https://github.com/egithinji/powermap-frontend'>frontend repo</a>.
                    If you're more interested in the backend side of things checkout the  <a href='https://github.com/egithinji/powermap-backend'>backend repo</a>.
                    </p>
                    <p>You can also hang out at our <a href='www.google.com'>discord</a>.</p>
                </div>
            </div>
        </div>
    )
}

export default Contributing;