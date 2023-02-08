import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWindowClose } from "@fortawesome/free-solid-svg-icons";

function Tag({ text, onCloseTagHandler }) {

    return (
        <div className="relative border shadow-md w-fit pr-7 pl-3 rounded ml-2 mb-1 bg-white">
            <FontAwesomeIcon icon={ faWindowClose } className="absolute top-0 right-1 cursor-pointer" onClick={() => {onCloseTagHandler(text)}} />
            {text}
        </div>
    )
}

export default Tag;