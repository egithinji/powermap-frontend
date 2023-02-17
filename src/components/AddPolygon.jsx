import { useEffect, useState } from "react";
import TagInput from "./TagInput";
import Modal from "./Modal";

function AddPolygon() {
    const [geojson, setGeojson] = useState('');
    const [areaName, setAreaName] = useState('');
    const [email, setEmail] = useState('');
    const [aliases, setAliases] = useState([]);
    const [errors, setErrors] = useState([]);
    const [loading, setLoading] = useState(false);
    const [filteredAreas, setFilteredAreas] = useState([]);
    const [areaList, setAreaList] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);

    const onChangeGeojson = (e) => {
        setGeojson(e.target.value);
    }

    const updateFilter = (entry) => {
        if (entry.length === 0) {
            setFilteredAreas([]);
        } else {
            setFilteredAreas(areaList.filter(area => area.toLowerCase().startsWith(entry.toLowerCase())));
        }
    }

    const onChangeAreaName = (e) => {
        setAreaName(e.target.value);
        updateFilter(e.target.value);
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

    const inputIsValid = () => {
        let valid = true;
        const newErrors = [];
        if (!isValidGeoJSON(geojson)) {
            newErrors.push('Please copy-paste a valid Geojson object from geojson.io');
            valid = false;
        }
        if (areaList.includes(areaName)) {
            newErrors.push('We already have this area in the database');
            valid = false;
        }
        setErrors([...errors, ...newErrors]);
        return valid;
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        
        if (!inputIsValid()) {
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
        setModalVisible(true);
        setErrors([]);
    }

    const onClickModalHandler = () => {
        setModalVisible(false);
    }

    useEffect(() => {
       fetch('https://powermap-backend-production.up.railway.app/api/v1/features/area_list') 
            .then((response) => response.json())
            .then((data) => {
                setAreaList(data.areas)
            });
    }, []);

    return (
            <div className="flex flex-col md:flex-row gap-2 text-black pt-10 pl-10 pr-10 w-full min-h-screen bg-white">
                <div className="text-sm md:w-1/2">
                    <p>For an area to show up on the heat map, we need its polygon to be in our database (we currently have polygons for 220 areas).</p>
                    <p>You can help by adding a polygon for an area you are familiar with using this form.</p>
                    <ol className="list-decimal ml-10">
                        <li>Enter the name of the area in the "Area name" box.</li>
                        <li>Provide the polygon coordinates of the area. To do this, go to <a href="https://geojson.io/" target="_blank">geojson.io</a>, draw a polygon around the area, and copy the 
                            entire "JSON" contents into the "Area coordinates" box below.
                        </li>
                        <li>Use the "Aliases" box to enter alternative words or spellings people may use when referring to the area. </li>
                        <li>If you'd like us to be able to contact you for clarifications, please provide your email address too (optional).</li>
                    </ol>
                </div>
                <div className="md:w-1/2 flex justify-center">
                    <form className="flex flex-col md:min-w-[60%] p-4 h-fit border-2 border-gray-900 rounded shadow-lg text-xs">
                        <label htmlFor="text" className="font-semibold text-gray-600">Area name</label>
                        <div className="relative">
                            <input id="text" value={areaName} required placeholder="e.g. 'ongata rongai'" type="text" onChange={onChangeAreaName} className="p-2 h-9 border rounded shadow bg-gray-100"/>
                            <div className={`${filteredAreas.length === 0 ? 'hidden' : 'flex flex-col'} absolute border-2 top-9 left-0 w-full z-50 bg-white text-black`}>
                                <p className="text-red-500">Similar areas already in the database:</p>
                                {filteredAreas.map(item => <div key={item}>{item}</div>)}
                                    
                            </div>
                        </div>
                        <label htmlFor="coordinates" className="font-bold mt-4 text-gray-600">Area coordinates</label>
                        <textarea id="coordinates" required placeholder="Copy-paste here from geojson.io" onChange={onChangeGeojson} rows="5" className="p-2 flex border rounded shadow bg-gray-100"/>
                        <label htmlFor="tagInput" className="font-bold mt-4 text-gray-600">Aliases</label>
                        <TagInput id="tagInput" addAlias={onAddAlias} />
                        <label htmlFor="email" className="font-bold mt-4 text-gray-600">Your email</label>
                        <input id="email" type="email" onChange={onChangeEmail} className="p-2 border rounded shadow bg-gray-100"/>
                        <input className="self-center font-bold cursor-pointer border rounded w-fit px-4 py-2 mt-4 mb-4 bg-gray-600 text-white hover:bg-gray-500" type="button" onClick={handleSubmit} value={loading ? "Please wait..." : "Submit"} />
                        {errors.map(error => <div className="text-red-500 col-span-full mb-1">-{error}</div>)}
                    </form> 
                </div>
                <Modal message="Thanks for your submission! We'll review it and add it to the database." active={modalVisible} onClickModal={onClickModalHandler} /> 
            </div>
    )
}

export default AddPolygon;