/* eslint-disable react/react-in-jsx-scope */
import React, { useRef, useEffect } from 'react';
import 'mapbox-gl/dist/mapbox-gl.css';
import useMap from "../hooks/useMap";

function Map() {

    const mapContainer = useRef(null);

    const setMapData = useMap(mapContainer);

    useEffect(() => {
        setInterval(() => {
          fetch('/today_features')
            .then((response) => response.json())
            .then((data) => setMapData(data))
        }, 5000);
    }, []);

    return (
        <div ref={mapContainer} className="map-container" />
    )
}

export default Map;