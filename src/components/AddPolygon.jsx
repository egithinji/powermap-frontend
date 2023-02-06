import { useState } from "react";
import { Link } from "react-router-dom"
import TagInput from "./TagInput";

function AddPolygon() {

    const [geojson, setGeojson] = useState('');
    const [areaName, setAreaName] = useState('');
    const [aliases, setAliases] = useState([]);
    const [errors, setErrors] = useState([]);

    const onChangeGeojson = (e) => {
        setGeojson(e.target.value);
    }

    const onChangeAreaName = (e) => {
        setAreaName(e.target.value);
    }

    const onAddAlias = (alias) => {
        setAliases([...aliases,alias]);
    }

    const isValidGeoJSON = (input) => {
        try {
            JSON.parse(input);
            return true;
        } catch {
            return false;
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!isValidGeoJSON(geojson)) {
            setErrors([...errors, 'Please copy-paste a valid Geojson object from geojson.io']);
            return;
        }
        const response = await fetch('https://powermap-backend-production.up.railway.app/api/v1/features/add_polygon', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                areaName,
                aliases,
                geojson: JSON.parse(geojson) 
            }) 
        });
        console.log(response);
        setErrors([]);
    }

    return (
        <div className="flex flex-col gap-2 text-white ml-10">
            <Link to="/">Back</Link>
            <div className="text-lg font-bold font-serif mt-10">
                We could use your help
            </div>
            <div className="text-white text-sm w-1/2">
                <p>We need to increase our coverage so that more areas show up on the heat map when they're mentioned in complaints (we're currently covering 220 areas).</p>
                <p>If you'd like to add an area, you can use the form below.</p>
                <p>To get the coordinates of an area, go to <a href="https://geojson.io/" target="_blank">geojson.io</a>, draw a polygon around the area, and copy the 
                    "JSON" contents.
                </p>
            </div>
            <form className="grid grid-cols-2 gap-2 md:w-1/3 w-fit p-4 bg-transparent" onSubmit={handleSubmit}>
                <label htmlFor="coordinates">Area coordinates:</label>
                <textarea id="coordinates" required placeholder="Copy-paste here from geojson.io" onChange={onChangeGeojson} rows="5" className="flex bg-transparent text-white border border-white w-56"/>
                <label htmlFor="text" >Area name:</label>
                <input id="text" required placeholder="e.g. 'ongata rongai'" type="text" onChange={onChangeAreaName} className="bg-transparent text-white border border-white w-56"/>

                <label htmlFor="tagInput">Aliases:</label>
                <TagInput id="tagInput" addAlias={onAddAlias}  />
                                
                <input className="col-span-full cursor-pointer border border-white rounded w-fit justify-self-center pl-2 pr-2 pt-0 pb-0 mt-4" type="submit" value="Submit" />
            </form> 

            {errors.map(error => <div className="text-red-500">{error}</div>)}
        </div>
    )
}

export default AddPolygon;