import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

function Modal({message, active, onClickModal}) {

    return (
        <div className={`fixed left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 w-fit text-sm p-4 rounded-md border ${active ? 'flex' : 'hidden'} flex-col gap-2 items-center bg-slate-100`}>
            <div className="rounded-full w-8 h-8 bg-green-200 border-black flex justify-center items-center">
                <FontAwesomeIcon icon={faCheck} color='green'/>
            </div>
            <div className="flex justify-center">
                {message}
            </div>
            <button type="button" onClick={onClickModal} className="self-center font-bold border rounded w-fit px-4 py-2 mt-4 bg-gray-600 text-white hover:bg-gray-500">Close</button>
        </div>
    );
}

export default Modal;