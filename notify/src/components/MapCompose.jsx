import React, { useEffect, useState } from "react";
import { APIProvider, Map, Marker } from "@vis.gl/react-google-maps";
import fire from '../images/fire.png'
import flood from '../images/flood.png';
import landslide from '../images/landslide.png';
import poweroutage from '../images/poweroutage.png';
import thunderstorm from '../images/thunderstorm.png';

import axios from "axios";
function MapCompose({ data, zoom, disableUI ,handleClick ,markers}) {

    const [center, setCenter] = useState(data.position);

    useEffect(() => {
      setCenter(data.position);
      console.log(data.position)
    }, [data.position]);

    return (
        <APIProvider apiKey="AIzaSyAYWRedRUK6_0ol2PkQN3SJWgRfaO4dBY8">
            <Map center={center} zoom={zoom} disableDefaultUI={disableUI} mapId={'b75c0b5de2f2fec7'}>
                {/* Add your map markers and other elements here */}
                {markers?.map((marker, index) => (
                    <Marker 
                        position={marker.position} 
                        icon={{
                            url: marker.type,
                            scaledSize: { width: 40, height: 40 }
                        }} 
                        onClick={() => handleClick(marker._id)}
                    />
                ))}

            </Map>
        </APIProvider>
    )
}
export default MapCompose;