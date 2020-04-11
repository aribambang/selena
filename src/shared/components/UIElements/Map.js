import React, { useRef, useEffect } from 'react';
import L from 'leaflet';

import './Map.css';

const Map = props => {
  const mapRef = useRef();

  const { center, zoom } = props;

  useEffect(() => {
    const map = L.map(mapRef.current, {
      center: center,
      zoom: zoom,
      layers: [
        L.tileLayer(
          'https://{s}.basemaps.cartocdn.com/rastertiles/voyager_labels_under/{z}/{x}/{y}.png',
          {
            attribution:
              '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="http://cartodb.com/attributions">CartoDB</a>'
          }
        )
      ]
    });
    L.marker(center).addTo(map);
  }, [center, zoom]);

  return (
    <div
      ref={mapRef}
      className={`map ${props.className}`}
      style={props.style}
    ></div>
  );
};

export default Map;
