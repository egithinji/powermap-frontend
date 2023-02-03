import { useState } from "react";
import Tag from "./Tag";

function TagInput({ addAlias }) {
    const [tags, setTags] = useState([]);
    const [inputValue, setInputValue] = useState('');

    const onChangeHandler = (e) => {
        setInputValue(e.target.value);
    };

    const onEnterPressed = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            addAlias(inputValue);
            setTags([...tags, inputValue]);
            setInputValue('');
        }
    }

    const onCloseTagHandler = (tag) => {
        setTags(tags.filter(value => value !== tag));
    }

    return (
        <div className="flex flex-wrap text-white border-white bg-transparent w-56">
            {
                tags.map((tag) => <Tag key={tag} text={tag} onCloseTagHandler={onCloseTagHandler} />)
            } 
            <input value={inputValue} placeholder="e.g. 'ronga' + press Enter" type="text" onChange={onChangeHandler} onKeyDown={onEnterPressed} className="text-white bg-transparent border border-white w-full" />

        </div>
        
    ); 
}

export default TagInput;