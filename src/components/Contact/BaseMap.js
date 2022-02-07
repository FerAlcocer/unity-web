import React, { useEffect } from "react";
import mapboxgl from "mapbox-gl";
import "../../styles/BaseMap.css";



const BaseMap = () => {
  mapboxgl.accessToken = "pk.eyJ1IjoiZnJlaXNjaGFybGVyIiwiYSI6ImNremJ0dWJzYzJmNngyb3B2OGxuemlrdHQifQ.v2WcqbwHdWHrh8-ST9O61Q";

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: "mapContainer",
      style: "mapbox://styles/mapbox/streets-v11",
      center: [-60.53166836736479,-31.73258064513863],
      zoom: 15,
    });

    // Create a marker and add it to the map.
    const marker1 = new mapboxgl.Marker().setLngLat([-60.53166836736479,-31.73258064513863]).addTo(map);

  }, []);

  return <div id="mapContainer" className="map"></div>;
};

export default BaseMap;