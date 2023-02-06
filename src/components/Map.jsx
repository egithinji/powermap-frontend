import React, { useRef, useEffect } from 'react';
import 'mapbox-gl/dist/mapbox-gl.css';
import useMap from "../hooks/useMap";

function Map() {

    const mapContainer = useRef(null);

    const [setInitialMapData,setMapData] = useMap(mapContainer);

    const fetchFeatures = (updater) => {
        fetch('https://powermap-backend-production.up.railway.app/api/v1/features/today_features')
            .then((response) => response.json())
            .then((data) => updater(data));
    };


    useEffect(() => {
        // retrieve initial features and display on map
        fetchFeatures(setInitialMapData);   
        // set up sse to be notified of new features to the map
        const sse = new EventSource('https://powermap-backend-production.up.railway.app/stream', { withCredentials: false });
        sse.onmessage = (e) => {
            fetchFeatures(setMapData);
            return () => {
                sse.close();
            }
        }
    },[]);

    

    return (
        <div ref={mapContainer} className="map-container" />
    )
}

export default Map;