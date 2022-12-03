/* eslint-disable react/react-in-jsx-scope */
import React, { useRef, useEffect, useState } from 'react';
import StatsTodayTotal from "./StatsTodayTotal";
import StatsTrending from "./StatsTrending";
import CurrentlyViewing from "./CurrentlyViewing";
import mapboxgl from "mapbox-gl";
import 'mapbox-gl/dist/mapbox-gl.css';

mapboxgl.accessToken = 'pk.eyJ1IjoiZXJpY2dpdGhpbmppIiwiYSI6ImNrZmM4ODFtbzE1dzEyd281ajkydjViMHMifQ.T_3ACROnINNaOH3PBSXujA';
function Map() {
    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng, setLng] = useState(-70.9);
    const [lat, setLat] = useState(42.35);
    const [zoom, setZoom] = useState(9);

    useEffect(() => {
        if (map.current) return; // initialize map only once
        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/streets-v12',
            center: [lng, lat],
            zoom: zoom
        });
    });


    return (
        <div ref={mapContainer} className="map-container relative border min-h-full min-w-full">
            <div className="absolute top-0 left-0 z-10">
                <StatsTodayTotal />
            </div>
            <div className="absolute top-0 right-0 z-10">
                <CurrentlyViewing />
            </div>
            <div className="absolute bottom-0 left-0 z-10">
                <StatsTrending />
            </div>
        </div>
    )
}

export default Map;