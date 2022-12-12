/* eslint-disable react/react-in-jsx-scope */
import React, { useRef, useEffect } from 'react';
import 'mapbox-gl/dist/mapbox-gl.css';
import useMap from "../hooks/useMap";

function Map() {

    const mapContainer = useRef(null);

    const setMapData = useMap(mapContainer);

    const fetchFeatures = () => {
        fetch('/today_features')
            .then((response) => response.json())
            .then((data) => setMapData(data));
    };

    // retrieve initial features and display on map
    useEffect(() => {
        fetchFeatures();   
    },[]);

    // set up interval to periodically retrieve latest features
    useEffect(() => {
        setInterval(() => fetchFeatures(), 10000);
    },[]);

    return (
        <div ref={mapContainer} className="map-container" />
    )
}

export default Map;