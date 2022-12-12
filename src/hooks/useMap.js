import {useState, useEffect, useRef} from 'react';
import mapboxgl from "mapbox-gl";
import { response } from 'msw';

function useMap(mapContainer) {

    const map = useRef(null);
    const [lng, setLng] = useState(36.817223);
    const [lat, setLat] = useState(-1.286389);
    const [zoom, setZoom] = useState(5);

    mapboxgl.accessToken = 'pk.eyJ1IjoiZXJpY2dpdGhpbmppIiwiYSI6ImNrZmM4ODFtbzE1dzEyd281ajkydjViMHMifQ.T_3ACROnINNaOH3PBSXujA';

    const emptyData = {
            "type": "FeatureCollection",
            "features": []
        };

    //initialize the map: 1)add style 2)add source with empty data 3) add layers
    useEffect(() => {
        if (map.current) return; // initialize map only once
        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/ericgithinji/ckfcmujs49j1v19oe4duz53oj',
            center: [lng, lat],
            zoom
        });

        map.current.on('load', () => {

            map.current.addSource('tweets', {
                  'type': 'geojson',
                  'data': emptyData
            });
             
            //add the heatmap layer
            map.current.addLayer({
                id: 'tweet-heat',
                type: 'heatmap',
                source: 'tweets',
                maxzoom: 15,
                paint: {
                  // increase intensity as zoom level increases
                  'heatmap-intensity': {
                    stops: [
                        [11, 1],
                        [15, 3]
                    ]
                  },
                  // assign color values be applied to points depending on their density
                  'heatmap-color': [
                    'interpolate',
                    ['linear'],
                    ['heatmap-density'],
                    0, 'rgba(0, 0, 255, 0)',
                    0.1, 'royalblue',
                    0.3, 'cyan',
                    0.5, 'lime',
                    0.7, 'yellow',
                    1, 'red'
                  ],
                  // increase radius as zoom increases
                  'heatmap-radius': {
                    stops: [
                  [11, 15],
                  [15, 20]
                    ]
                  },
                  // decrease opacity to transition into the circle layer
                  'heatmap-opacity': {
                    default: 1,
                    stops: [
                        [14, 1],
                        [15, 0]
                    ]
                  },
                }
            });
            //add the tweet-point layer (when user zooms in, change to points)
            map.current.addLayer({
                id: 'tweet-point',
                type: 'circle',
                source: 'tweets',
                minzoom: 14,
                paint: {
                    // increase the radius of the circle as the zoom level and dbh value increases
                    'circle-radius': 10,
                    'circle-blur': 0.5,
                    'circle-color': 'red',
                    'circle-stroke-color': 'white',
                    'circle-stroke-width': 1,
                    'circle-opacity': {
                        stops: [
                        [14, 0],
                        [15, 1]
                        ]
                    }
                }
            }); 
            //Create a popup that will be added to the map when a user hovers over a point
            const popup = new mapboxgl.Popup({
                closeButton: false,
                closeOnClick: false
            });
            map.current.on('mouseenter', 'tweet-point', (e) => {
                //Change the cursor style as a UI indicator.
                map.current.getCanvas().style.cursor = 'pointer';	
                //Cause the popup to display here
                popup.setLngLat(e.features[0].geometry.coordinates).setHTML(`<p align='left'><b>Tweeted at</b> ${e.features[0].properties.posted_on} </p> 
                <p align='left'><b>Area: </b> ${e.features[0].properties.area} </p>`).addTo(map.current);
            });
            map.current.on('mouseleave', 'tweet-point', () => {
              map.current.getCanvas().style.cursor = '';
                popup.remove();
              });
            });
    });

    //function for updating the map's data. this will cause mapboxgl to re-rerender the map
    //this function is passed to the Map component.
    const updateMapData = (newData) => {
        map.current.on('load', () => {
          map.current.getSource('tweets').setData(newData);
        })
    }
    return updateMapData;

}

export default useMap;