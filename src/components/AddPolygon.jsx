import { useState } from "react";
import TagInput from "./TagInput";

function AddPolygon() {

    const [geojson, setGeojson] = useState('');
    const [areaName, setAreaName] = useState('');
    const [email, setEmail] = useState('');
    const [aliases, setAliases] = useState([]);
    const [errors, setErrors] = useState([]);
    const [loading, setLoading] = useState(false);

    const onChangeGeojson = (e) => {
        setGeojson(e.target.value);
    }

    const onChangeAreaName = (e) => {
        setAreaName(e.target.value);
    }

    const onChangeEmail = (e) => {
        setEmail(e.target.value);
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
        setLoading(true);
        if (!isValidGeoJSON(geojson)) {
            setErrors([...errors, 'Please copy-paste a valid Geojson object from geojson.io']);
            setLoading(false);
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
                geojson: JSON.parse(geojson),
                email 
            }) 
        });
        console.log(response);
        setLoading(false);
        setErrors([]);
    }

    return (
        <div className="flex flex-col md:flex-row gap-2 text-black pt-10 pl-10 pr-10 w-full min-h-screen bg-white">
            <div className="text-sm md:w-1/2">
                <p>For an area to show up on the heat map, we need its polygon to be in our database (we currently have polygons for 220 areas).</p>
                <p>If you'd like to help by adding a polygon for a new area, please use this form.</p>
                <ol className="list-decimal ml-10">
                    <li>First provide the name for the area in the "Area name" box.</li>
                    <li>Provide the polygon coordinates of the area. To do this, go to <a href="https://geojson.io/" target="_blank">geojson.io</a>, draw a polygon around the area, and copy the 
                        entire "JSON" contents into the "Area coordinates" box below.
                    </li>
                    <li>Finally please use the "Aliases" box to enter alternative words or spellings people may use when referring to the area. </li>
                    <li>If you'd like us to be able to contact you for clarifications, please provide your email address too.</li>
                </ol>
            </div>
            <div className="md:w-1/2 flex justify-center">
                <form className="grid grid-cols-2 gap-2 p-4 w-fit h-fit border rounded shadow-lg bg-gradient-to-r from-gray-100 to-gray-200 text-sm">
                    <label htmlFor="text" className="font-bold">Area name: *</label>
                    <input id="text" required placeholder="e.g. 'ongata rongai'" type="text" onChange={onChangeAreaName} className="pl-2 pr-2 border rounded shadow"/>
                    <label htmlFor="coordinates" className="font-bold">Area coordinates: *</label>
                    <textarea id="coordinates" required placeholder="Copy-paste here from geojson.io" onChange={onChangeGeojson} rows="5" className="pl-2 pr-2 flex border rounded shadow"/>
                    <label htmlFor="tagInput" className="font-bold">Aliases:</label>
                    <TagInput id="tagInput" addAlias={onAddAlias} />
                    <label htmlFor="email" className="font-bold">Your email:</label>
                    <input id="email" type="email" onChange={onChangeEmail} className="pl-2 pr-2 border rounded shadow"/>
                    <input className="font-bold col-span-full cursor-pointer border rounded w-fit justify-self-center px-4 py-2 mt-4 bg-gray-600 text-white hover:bg-gray-500" type="button" onClick={handleSubmit} value={loading ? "Please wait..." : "Submit"} />
                    {errors.map(error => <div className="text-red-500 col-span-full">{error}</div>)}
                </form> 
            </div>
        </div>
    )
}

export default AddPolygon;