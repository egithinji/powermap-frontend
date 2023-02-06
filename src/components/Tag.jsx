import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWindowClose } from "@fortawesome/free-solid-svg-icons";

function Tag({ text, onCloseTagHandler }) {

    return (
        <div className="relative border border-white w-fit pr-7 pl-3 rounded ml-2">
            <FontAwesomeIcon icon={ faWindowClose } className="absolute top-0 right-1 cursor-pointer" onClick={() => {onCloseTagHandler(text)}} />
            {text}
        </div>
    )
}

export default Tag;