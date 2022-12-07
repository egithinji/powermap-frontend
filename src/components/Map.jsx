/* eslint-disable react/react-in-jsx-scope */
import React, { useRef } from 'react';
import SideBar from './SideBar';
import Stats from "./Stats";
import 'mapbox-gl/dist/mapbox-gl.css';
import useMap from "../hooks/useMap";

function Map() {

    const mapContainer = useRef(null);

    const setMapData = useMap(mapContainer);

    return (
        <div ref={mapContainer} className="map-container relative min-h-screen min-w-full">
            <div className="absolute top-0 left-0 z-20 ml-4 mt-4">
                <SideBar />
            </div>
            <div className="absolute top-0 right-0 z-20 mr-4 mt-4">
                <Stats />
            </div>
        </div>
    )
}

export default Map;