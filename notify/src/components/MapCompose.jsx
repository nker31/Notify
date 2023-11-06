import React from "react";
import { APIProvider, Map, Marker } from "@vis.gl/react-google-maps";
import fire from '../images/fire.png'

function MapCompose({ lat, lng, zoom, disableUI }) {
    const position = { lat, lng };

    return (
        <APIProvider apiKey="AIzaSyAYWRedRUK6_0ol2PkQN3SJWgRfaO4dBY8">
            <Map center={position} zoom={zoom} disableDefaultUI={disableUI} mapId={'b75c0b5de2f2fec7'}>
                {/* Add your map markers and other elements here */}
                <Marker position={position} icon={{
                    url: fire,
                    scaledSize: { width: 40, height: 40 }
                }} onClick={() => alert("click!")} />
            </Map>
        </APIProvider>
    )
}
export default MapCompose;