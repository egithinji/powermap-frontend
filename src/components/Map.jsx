/* eslint-disable react/react-in-jsx-scope */
import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from "mapbox-gl";
import SideBar from './SideBar';
import Stats from "./Stats";
import StatsTodayTotal from './StatsTodayTotal';
import CurrentlyViewing from "./CurrentlyViewing";
import 'mapbox-gl/dist/mapbox-gl.css';
import useMap from "../hooks/useMap";

mapboxgl.accessToken = 'pk.eyJ1IjoiZXJpY2dpdGhpbmppIiwiYSI6ImNrZmM4ODFtbzE1dzEyd281ajkydjViMHMifQ.T_3ACROnINNaOH3PBSXujA';
function Map() {
    const mapContainer = useRef(null);

    const sampleData = 
        {
            "type": "FeatureCollection",
            "features": [
                {
                    "type": "Feature",
                    "geometry": {
                      "type": "Point",
                      "coordinates": [
                        37.10396554136118,
                        -0.9381197381062314
                      ]
                    },
                    "properties": {
                      "text": "@KenyaPower_Care Acc. 14272675068. Kabati zabka lost power at night Please assist Working from home",
                      "posted_on": "05:37am on Fri Jan 01 2021",
                      "area": "kabati",
                      "user_id": 917617854018674694
                    },
                    "id": 7524
                  },
                  {
                    "type": "Feature",
                    "geometry": {
                      "type": "Point",
                      "coordinates": [
                        36.83411727374143,
                        -1.3106580411645044
                      ]
                    },
                    "properties": {
                      "text": "@KenyaPower_Care hi no power in south b balozi area since early morning please advice.",
                      "posted_on": "05:42am on Fri Jan 01 2021",
                      "area": "south b",
                      "user_id": 494850245
                    },
                    "id": 7525
                  }
            ]
        };

    useMap(mapContainer, sampleData);

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