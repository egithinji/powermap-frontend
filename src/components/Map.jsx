/* eslint-disable react/react-in-jsx-scope */
import React, { useRef, useEffect } from 'react';
import 'mapbox-gl/dist/mapbox-gl.css';
import useMap from "../hooks/useMap";

function Map() {

    const mapContainer = useRef(null);

    const [setInitialMapData,setMapData] = useMap(mapContainer);

    const fetchFeatures = (updater) => {
        fetch('http://localhost:4000/api/v1/features/today_features')
            .then((response) => response.json())
            .then((data) => updater(data));
    };


    useEffect(() => {
        // retrieve initial features and display on map
        console.log('fetching initial features');
        fetchFeatures(setInitialMapData);   
        // set up sse to be notified of new features to the map
        const sse = new EventSource('http://localhost:4000/stream');
        sse.onmessage = (e) => {
            console.log('event received: ', e.data);
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