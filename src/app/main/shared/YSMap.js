import React from 'react';
import ReactMapboxGl, { Layer, Marker, Popup } from 'react-mapbox-gl';

// NOTE
// import './styles/mapbox.css';

const paintLayer = {
  'fill-extrusion-color': '#aaa',
  'fill-extrusion-height': {
    type: 'identity',
    property: 'height'
  },
  'fill-extrusion-base': {
    type: 'identity',
    property: 'min_height'
  },
  'fill-extrusion-opacity': 0.6
};
const styles = {
  londonCycle: 'mapbox://styles/mapbox/light-v9',
  light: 'mapbox://styles/mapbox/light-v9',
  dark: 'mapbox://styles/mapbox/dark-v9',
  basic: 'mapbox://styles/mapbox/basic-v9',
  outdoor: 'mapbox://styles/mapbox/outdoors-v10'
};

const Map = ReactMapboxGl({
  // 'pk.eyJ1IjoicHNoZW9uIiwiYSI6ImNqenV6MWYzMDBhbTQzanBod2ltc3FjeWQifQ.EXKcYFoeWNUJu9j4lL1t8Q'
  accessToken: process.env.REACT_APP_MAP_BOX_KEY
});

function YSMap({ width = '100vw', height = '100%' }) {
  return (
    <Map
      style={styles.light}
      containerStyle={{ height, width }}
      zoom={[15]}
      pitch={[60]}
      bearing={[-60]}
      center={[120.299384, 22.624167]}
    >
      {/* <Feature coordinates={[120.299384, 22.624167]} /> */}
      <Marker coordinates={[120.299747, 22.622389]} anchor="top">
        <div
          style={{
            backgroundColor: '#e74c3c',
            borderRadius: '50%',
            width: '20px',
            height: '20px',
            border: '4px solid #eaa29b'
          }}
        />
      </Marker>
      <Popup key="120.299747" coordinates={[120.299747, 22.622389]}>
        <div
          style={{
            background: 'white',
            color: '#3f618c',
            fontWeight: 400,
            padding: '5px',
            borderRadius: '2px'
          }}
        >
          <div>YS 青年職涯發展中心</div>
          <div>高雄市前金區五福三路21號</div>
        </div>
      </Popup>

      <Layer
        id="3d-buildings"
        sourceId="composite"
        sourceLayer="building"
        filter={['==', 'extrude', 'true']}
        type="fill-extrusion"
        minZoom={14}
        paint={paintLayer}
      />
    </Map>
  );
}

export default YSMap;
